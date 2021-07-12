using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SharePoint.Client;

namespace RegioneLombardia.Models.SharePoint
{
    public class DocumentLibraryManager
    {
        private readonly ClientContext _context;
        public DocumentLibraryManager(ClientContext context)
        {
            _context = context;
        }
        public void AddDocument(string documentLibraryTitle, Stream stream)
        {
            List list = _context.Web.Lists.GetByTitle(documentLibraryTitle);
            _context.Load(list);
            _context.ExecuteQuery();
            if(list.BaseType == BaseType.DocumentLibrary)
            {
                FileCreationInformation createFile = new FileCreationInformation();
                createFile.Url = $"{DateTime.Now.ToString("MMddyyyyHHmmss")}.pdf";
                createFile.Content = ((MemoryStream)stream).ToArray();
                list.RootFolder.Files.Add(createFile);
            }
            _context.ExecuteQuery();
        }

        public static void AddDocument(ClientContext context, string documentLibraryTitle, Stream stream)
        {
            List list = context.Web.Lists.GetByTitle(documentLibraryTitle);
            context.Load(list);
            context.ExecuteQuery();
            if (list.BaseType == BaseType.DocumentLibrary)
            {
                FileCreationInformation createFile = new FileCreationInformation();
                createFile.Url = $"{DateTime.Now.ToString("MMddyyyyHHmmss")}.pdf";
                createFile.Content = ((MemoryStream)stream).ToArray();
                list.RootFolder.Files.Add(createFile);
            }
            context.ExecuteQuery();
        }
    }
}
