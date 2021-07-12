using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic;
using RegioneLombardia.Models.Store;

namespace RegioneLombardia.Models.DataSeed
{
    public class SampleData
    {
        [JsonPropertyName("types")]
        public List<Type> Types { get; set; }

        [JsonPropertyName("noticecategories")]
        public List<NoticeCategory> NoticeCategories { get; set; }

        [JsonPropertyName("categories")]
        public List<Category> Categories { get; set; }

        [JsonPropertyName("notices")]
        public List<Notice> Notices { get; set; }
        public static SampleData ReadDataFromJson()
        {
            var tests = new SampleData();
            string jsonString = File.ReadAllText(@"C:\Users\ivanp\Desktop\Workshop-RegioneLombardia\src\Shared\RegioneLombardia.Models\DataSeed\sampledata.json");
            return JsonSerializer.Deserialize<SampleData>(jsonString);
        }
    }
}
