using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RegioneLombardia.ViewModels.Store
{
    public class Application
    {
        public int IdNotice { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public bool Archived { get; set; }
    }
}
