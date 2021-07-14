using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Text;
using System.Threading.Tasks;

namespace RegioneLombardia.Models.Extensions
{
    public static class StringExtensions
    {
        public static  SecureString GetSecureString(this string stringToConvert)
        {
            SecureString secureString = new SecureString();
            foreach (var charachter in stringToConvert)
            {
                secureString.AppendChar(charachter);
            }
            return secureString;
        }
    }
}