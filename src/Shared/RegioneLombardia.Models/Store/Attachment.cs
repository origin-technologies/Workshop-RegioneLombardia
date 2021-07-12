using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RegioneLombardia.Models.Store
{
    public class Attachment
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int IdNotice { get; set; }
        public int Filename { get; set; }
        public int Filesize { get; set; }
        public int Content { get; set; }

        public static void AddAttachment(ApplicationDbContext context, Attachment attachment)
        {
            context.Attachments.Add(attachment);
            context.SaveChanges();
        }
        public static Attachment GetAttachmentById(ApplicationDbContext context, int id)
        {
            return context.Attachments.FirstOrDefault((p) => p.Id == id);
        }
        public static List<Attachment> GetAllAttachment(ApplicationDbContext context)
        {
            return context.Attachments.ToList();
        }
        public static void RemoveAttachmentById(ApplicationDbContext context, int id)
        {
            var attachmentToRemove = context.Attachments.FirstOrDefault((p) => p.Id == id);
            context.Attachments.Remove(attachmentToRemove);
            context.SaveChanges();
        }
    }
}
