using System;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Runtime.InteropServices;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PuppeteerSharp;
using RegioneLombardia.FunctionApp.Models;
using RegioneLombardia.Models.Store;
using RegioneLombardia.Models.Interfaces;

[assembly: FunctionsStartup(typeof(RegioneLombardia.FunctionApp.Startup))]

namespace RegioneLombardia.FunctionApp
{
    public class Startup : FunctionsStartup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            var sqlConnectionString = Environment.GetEnvironmentVariable("DefaultConnectionString");
            var useInMemoryDatabase = string.IsNullOrWhiteSpace(sqlConnectionString);
            if (useInMemoryDatabase)
            {
                sqlConnectionString = "";
            }
            services.AddDbContext<ApplicationDbContext>();
            services.AddTransient<IApplicationDbContext>(x => new ApplicationDbContext(sqlConnectionString));
            services.AddTransient(x => new ApplicationDbContext(sqlConnectionString));
        }
        public override void Configure(IFunctionsHostBuilder builder)
        {
            var bfOptions = new BrowserFetcherOptions();
            if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
            {
                bfOptions.Path = Path.GetTempPath();
            }
            var bf = new BrowserFetcher(bfOptions);
            bf.DownloadAsync(BrowserFetcher.DefaultRevision).Wait();
            var info = new AppInfo
            {
                BrowserExecutablePath = bf.GetExecutablePath(BrowserFetcher.DefaultRevision)
            };

            var port = GetAvailablePort();
            info.TemplateServerPort = port;
            builder.Services.AddSingleton(info);

            var webHost = Host.CreateDefaultBuilder()
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    var scriptRoot = Environment.GetEnvironmentVariable("AzureWebJobsScriptRoot");
                    if (!string.IsNullOrEmpty(scriptRoot))
                    {
                        webBuilder.UseContentRoot(scriptRoot);
                    }
                    webBuilder.UseUrls($"http://0.0.0.0:{port}").UseStartup<RegioneLombardia.Templates.Startup>();
                })
                .Build();

            webHost.Start();
        }
        private int GetAvailablePort()
        {
            var listener = new TcpListener(IPAddress.Loopback, 0);
            listener.Start();
            int availablePort = ((IPEndPoint)listener.LocalEndpoint).Port;
            listener.Stop();
            return availablePort;
        }
    }
}