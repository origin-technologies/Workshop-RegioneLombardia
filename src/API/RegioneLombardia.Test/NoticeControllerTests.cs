// using System;
// using System.Net;
// using System.Text.Json;
// using System.Threading.Tasks;
// using System.Collections.Generic;
// using Microsoft.AspNetCore.Hosting;
// using Microsoft.AspNetCore.Mvc.Testing;
// using Microsoft.EntityFrameworkCore;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.VisualStudio.TestTools.UnitTesting;
// using RegioneLombardia.API;
// using RegioneLombardia.Models.Store;
// using RegioneLombardia.API.Controllers;

// namespace RegioneLombardia.Test
// {
//     [TestClass]
//     public class NoticeControllerTests
//     {
//         protected ApplicationDbContext _dbContext { get; private set; }
        
//         [TestInitialize()]
//         public void Setup()
//         {
//             var options = new DbContextOptionsBuilder<ApplicationDbContext>()
//                 .UseInMemoryDatabase("ApplicationDbContext")
//                 .Options;

//             _dbContext = new ApplicationDbContext(options);
//             List<Notice> testNotices = GetTestNotices();
//             for (int i = 0; i < testNotices.Count; i++)
//             {
//                 _dbContext.Notices.Add(testNotices[i]);
//             }
//             _dbContext.SaveChanges();
//         }

//         [TestCleanup]
//         public void Cleanup()
//         {
//             _dbContext.Database.EnsureDeleted();
//             _dbContext.Dispose();
//         }

//         [TestMethod]
//         public void GetAllNotices_ShouldReturnAllNotices()
//         {
//             var controller = new NoticeController(_dbContext);

//             List<Notice> result = controller.GetAllNotices() as List<Notice>;
//             List<Notice> testNotices = GetTestNotices();
//             Assert.AreEqual(testNotices.Count, result.Count);
//         }

//         [TestMethod]
//         public void GetNotice_ShouldReturnCorrectNotice()
//         {
//             var controller = new NoticeController(_dbContext);

//             List<Notice> testNotices = GetTestNotices();
//             Notice result = controller.GetNotice(4) as Notice;
//             Assert.IsNotNull(result);
//             Assert.AreEqual(testNotices[3].Name, result.Name);
//         }

//         [TestMethod]
//         public void RemoveNotice_ShouldReturnAllNoticesExceptTheRemoved()
//         {
//             var controller = new NoticeController(_dbContext);

//             List<Notice> testNotices = GetTestNotices();
//             controller.RemoveNotice(4);
//             List<Notice> result = controller.GetAllNotices() as List<Notice>;
//             Assert.AreNotEqual(testNotices.Count, result.Count);
//         }

//         [TestMethod]
//         public void AddNotice_ShouldAddNotice()
//         {
//             var controller = new NoticeController(_dbContext);

//             Notice testNotice = new Notice { Id = 5, Name = "Demo5", Price = 18.09M };
//             controller.AddNotice(testNotice);
//             Notice result = controller.GetNotice(5) as Notice;
//             Assert.AreEqual(testNotice.Name, result.Name);
//         }

//         [TestMethod]
//         public void GetNotice_ShouldNotFindNotice()
//         {
//             var controller = new NoticeController(_dbContext);

//             var result = controller.GetNotice(999);
//             Assert.IsNull(result);
//         }

//         private List<Notice> GetTestNotices()
//         {
//             var testNotices = new List<Notice>();
//             testNotices.Add(new Notice { Id = 1, Name = "Demo1", Price = 1 });
//             testNotices.Add(new Notice { Id = 2, Name = "Demo2", Price = 3.75M });
//             testNotices.Add(new Notice { Id = 3, Name = "Demo3", Price = 16.99M });
//             testNotices.Add(new Notice { Id = 4, Name = "Demo4", Price = 11.00M });

//             return testNotices;
//         }
//     }
// }

