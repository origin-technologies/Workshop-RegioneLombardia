using System;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RegioneLombardia.Models.Store
{
    public class Service
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public static void AddService(ApplicationDbContext context, Service service)
        {
            context.Services.Add(service);
            context.SaveChanges();
        }
        public static Service GetServiceById(ApplicationDbContext context, int id)
        {
            return context.Services.FirstOrDefault((p) => p.Id == id);
        }
        public static List<Service> GetAllService(ApplicationDbContext context)
        {
            return context.Services.ToList();
        }
        public static void RemoveServiceById(ApplicationDbContext context, int id)
        {
            var serviceToRemove = context.Services.FirstOrDefault((p) => p.Id == id);
            context.Services.Remove(serviceToRemove);
            context.SaveChanges();
        }
    }
}
