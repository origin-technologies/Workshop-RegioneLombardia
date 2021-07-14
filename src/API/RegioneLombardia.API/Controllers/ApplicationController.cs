using System.Collections.Generic;
using Azure.Storage.Queues;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RegioneLombardia.Models.Store;
using RegioneLombardia.ViewModels.Store;

namespace RegioneLombardia.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApplicationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private IConfiguration _configuration { get; }
        public ApplicationController(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        
        [HttpPost]
        [Route("Apply")]
        public void Apply(ViewModels.Store.Application application)
        {
            var applicationToAdd = new Models.Store.Application()
            {
                IdNotice = application.IdNotice,
                Name = application.Name,
                Surname = application.Surname,
                Email = application.Email,
                Phone = application.Phone,
                Archived = application.Archived
            };
            int applicationId = Models.Store.Application.AddApplication(_context, applicationToAdd);
            string connectionString = _configuration[ConfigurationPath.Combine("ConnectionStrings", "StorageConnectionString")];
            QueueClient queueClient = new QueueClient(connectionString, "applications");
            queueClient.CreateIfNotExists();
            if (queueClient.Exists())
            {
                var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(applicationId.ToString());
                queueClient.SendMessage(System.Convert.ToBase64String(plainTextBytes));
            }
        }
    }
}

