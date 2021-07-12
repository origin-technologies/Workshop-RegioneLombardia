using System;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace RegioneLombardia.Models.Store
{
    public class Notice
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Code { get; set; }
        public string Name { get; set; }
        [ForeignKey("IdType")]
        public Type Type { get; set; }
        public string Description { get; set; }
        [DataType(DataType.DateTime)]
        public System.DateTime AvailablityStartDate { get; set; }
        [DataType(DataType.DateTime)]
        public System.DateTime AvailablityEndDate { get; set; }
        public static void AddNotice(ApplicationDbContext context, Notice notice)
        {
            context.Notices.Add(notice);
            context.SaveChanges();
        }
        public static Notice GetNoticeById(ApplicationDbContext context, int id)
        {
            return context.Notices.FirstOrDefault((p) => p.Id == id);
        }
        public static List<Notice> GetAllNotice(ApplicationDbContext context)
        {
            return context.Notices.ToList();
        }
        public static void RemoveNoticeById(ApplicationDbContext context, int id)
        {
            var noticeToRemove = context.Notices.FirstOrDefault((p) => p.Id == id);
            context.Notices.Remove(noticeToRemove);
            context.SaveChanges();
        }
    }
}
