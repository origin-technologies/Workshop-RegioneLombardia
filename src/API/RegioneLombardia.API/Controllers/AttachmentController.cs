using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using RegioneLombardia.Models.Store;

namespace RegioneLombardia.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AttachmentController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public AttachmentController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("AddAttachment")]
        public void AddAttachment(Attachment attachment)
        {
            Attachment.AddAttachment(_context, attachment);
        }

        [HttpPost]
        [Route("RemoveAttachment")]
        public void RemoveAttachment(int id)
        {
            Attachment.RemoveAttachmentById(_context, id);
        }

        [HttpGet]
        [Route("GetAllAttachments")]
        public IEnumerable<Attachment> GetAllAttachments()
        {
            return Attachment.GetAllAttachment(_context);
        }

        [HttpGet]
        [Route("GetAttachment")]
        public Attachment GetAttachment(int id)
        {
            return Attachment.GetAttachmentById(_context, id);
        }
    }
}