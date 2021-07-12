using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RegioneLombardia.Models.Store;

namespace RegioneLombardia.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NoticeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public NoticeController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("AddNotice")]
        public void AddNotice(Notice notice)
        {
            Notice.AddNotice(_context, notice);
        }

        [HttpPost]
        [Route("RemoveNotice")]
        public void RemoveNotice(int id)
        {
            Notice.RemoveNoticeById(_context, id);
        }

        [HttpGet]
        [Route("GetAllNotices")]
        public IEnumerable<Notice> GetAllNotices()
        {
            return Notice.GetAllNotice(_context);
        }

        [HttpGet]
        [Route("GetNotice")]
        public Notice GetNotice(int id)
        {
            return Notice.GetNoticeById(_context, id);
        }
    }
}
