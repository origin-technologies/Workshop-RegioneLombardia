using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RegioneLombardia.Models.Store
{
    public class Application
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int IdNotice { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public bool Archived { get; set; }

        public static int AddApplication(ApplicationDbContext context, Application application)
        {
            context.Applications.Add(application);
            context.SaveChanges();
            return application.Id;
        }
        public static Application GetApplicationById(ApplicationDbContext context, int id)
        {
            return context.Applications.FirstOrDefault((p) => p.Id == id);
        }
        public static List<Application> GetAllApplication(ApplicationDbContext context)
        {
            return context.Applications.ToList();
        }
        public static void RemoveApplicationById(ApplicationDbContext context, int id)
        {
            var applicationToRemove = context.Applications.FirstOrDefault((p) => p.Id == id);
            context.Applications.Remove(applicationToRemove);
            context.SaveChanges();
        }
    }
}
