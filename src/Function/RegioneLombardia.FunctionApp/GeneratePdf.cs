using System;
using System.Linq;
using System.IO;
using System.Security;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using PuppeteerSharp;
using RegioneLombardia.Models.SharePoint;
using RegioneLombardia.Models.Store;
using RegioneLombardia.Models.Extensions;
using RegioneLombardia.FunctionApp.Models;

namespace RegioneLombardia.FunctionApp
{
    public class GeneratePdf
    {
        private readonly AppInfo _appInfo;
        public GeneratePdf(AppInfo browserInfo)
        {
            _appInfo = browserInfo;
        }      
        [FunctionName("GeneratePdf")]
        public async Task Run([QueueTrigger("applications")] string myQueueItem, ILogger log)
        {
            log.LogInformation($"Browser path: {_appInfo.BrowserExecutablePath}");
            int applicationId = int.Parse(myQueueItem);
            var browser = await Puppeteer.LaunchAsync(new LaunchOptions
            {
                Headless = true,
                ExecutablePath = _appInfo.BrowserExecutablePath
            });
            var page = await browser.NewPageAsync();
            await page.GoToAsync($"http://localhost:{_appInfo.TemplateServerPort}/");
     
            Notice notice = null;
            Application application = null;
            var sqlConnectionString = Environment.GetEnvironmentVariable("DefaultConnectionString");
            using(var context = new ApplicationDbContext(sqlConnectionString))
            {
                log.LogInformation($"Get order details by aplication ID {applicationId}");
                application = Application.GetApplicationById(context, applicationId);
                notice = Notice.GetNoticeById(context, application.IdNotice);
                log.LogInformation($"Notice:{string.Join(",", notice.ToDictionary())}");
            }

            log.LogInformation($"Generate PDF");
            string applicationJson = application.ToJson();
            log.LogInformation($"Application: {applicationJson}");
            string noticeJson = notice.ToJson();
            log.LogInformation($"Notice: {noticeJson}");
            Stream stream = await GenerateStream(applicationJson, noticeJson);
            log.LogInformation($"Stream length: {stream.Length}");

            log.LogInformation($"Upload PDF to Azure Storage");
            string storageConnectionString = Environment.GetEnvironmentVariable("AzureWebJobsStorage");
            BlobContainerClient container = new BlobContainerClient(storageConnectionString, "applications");
            container.CreateIfNotExists(Azure.Storage.Blobs.Models.PublicAccessType.None);
            var blockBlobClient = container.GetBlobClient(applicationId.ToString() + ".pdf");
            blockBlobClient.Upload(stream, new BlobHttpHeaders { ContentType = "application/pdf" });          
            // string sasUri = blockBlobClient.GenerateSasUri(permissions: Azure.Storage.Sas.BlobSasPermissions.Read, expiresOn: DateTime.Now.AddYears(1)).AbsoluteUri;

            log.LogInformation($"Upload PDF to SharePoint Online");
            var siteUrl = new Uri(Environment.GetEnvironmentVariable("SharePointOnlineSiteUrl"));
            var username = Environment.GetEnvironmentVariable("SharePointOnlineUsername");
            var password = Environment.GetEnvironmentVariable("SharePointOnlinePassword");
            var documentLibraryTitle = Environment.GetEnvironmentVariable("SharePointOnlineDocumentLibrary");
            var azureADApplicationId = Environment.GetEnvironmentVariable("AzureADApplicationId");
            SecureString securePassword = password.GetSecureString();
            using (var authenticationManager = new AuthenticationManager(azureADApplicationId))
            using (var context = authenticationManager.GetContext(siteUrl, username, securePassword))
            {
               DocumentLibraryManager.AddDocument(context, documentLibraryTitle, stream);
            }

            log.LogInformation($"Update database");
            using(var context = new ApplicationDbContext(sqlConnectionString))
            {          
                application.Archived = true;
                context.Update(application);
            }
        }
        private async Task<Stream> GenerateStream(string applicationJson, string noticeJson)
        {
            var browser = await Puppeteer.LaunchAsync(new LaunchOptions { Headless = true, ExecutablePath = _appInfo.BrowserExecutablePath });
            var page = await browser.NewPageAsync();
            await page.GoToAsync($"http://localhost:{_appInfo.TemplateServerPort}/");
            await page.TypeAsync("#application-box", applicationJson);
            await page.TypeAsync("#notice-box", noticeJson);
            await Task.WhenAll(page.WaitForNavigationAsync(), page.ClickAsync("#submit-button"));
            var stream = await page.PdfStreamAsync();
            await browser.CloseAsync();
            return stream;
        }
    }
}
