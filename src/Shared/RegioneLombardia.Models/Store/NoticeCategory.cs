using System;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RegioneLombardia.Models.Store
{
    public class NoticeCategory
    {
        [Required]
        [ForeignKey("IdNotice")]
        public Notice Notice { get; set; }
        [Required]
        [ForeignKey("IdCategory")]
        public Category Category { get; set; }
    }
}
