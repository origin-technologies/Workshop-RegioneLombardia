using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RegioneLombardia.Models.Store;

namespace RegioneLombardia.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ServiceController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public ServiceController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("AddService")]
        public void AddService(Service service)
        {
            Service.AddService(_context, service);
        }

        [HttpPost]
        [Route("RemoveService")]
        public void RemoveService(int id)
        {
            Service.RemoveServiceById(_context, id);
        }

        [HttpGet]
        [Route("GetAllServices")]
        public IEnumerable<Service> GetAllServices()
        {
            return Service.GetAllService(_context);
        }

        [HttpGet]
        [Route("GetService")]
        public Service GetService(int id)
        {
            return Service.GetServiceById(_context, id);
        }
    }
}


