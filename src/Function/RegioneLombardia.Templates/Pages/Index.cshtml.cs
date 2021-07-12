using System.Linq;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RegioneLombardia.Models.Store;

namespace RegioneLombardia.Templates.Pages
{
    public class IndexModel : PageModel
    {
        public Application Application { get; set; }
        public Notice Notice { get; set; }
        public void OnPost()
        {
            var applicationJson = Request.Form["application"].First();
            string applicationFormattedJson = FormatJson(applicationJson);
            var noticeJson = Request.Form["notice"].First();
            string noticeFormattedJson = FormatJson(noticeJson);
            Application = JsonSerializer.Deserialize<Application>(applicationFormattedJson);
            Notice = JsonSerializer.Deserialize<Notice>(noticeFormattedJson);
        }
        private string FormatJson(string json)
        {
            return json.Replace("\\\"", "\"");
        }
    }
}