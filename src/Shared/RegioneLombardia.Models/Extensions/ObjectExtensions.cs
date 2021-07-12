using System;
using System.Linq;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace RegioneLombardia.Models.Extensions
{
    public static class ObjectExtensions
    {
        public static Dictionary<string, object> ToDictionary(this object myObj)
        {
            return myObj.GetType()
                .GetProperties()
                .Select(pi => new { Name = pi.Name, Value = pi.GetValue(myObj, null) })
                .Union(
                    myObj.GetType()
                    .GetFields()
                    .Select(fi => new { Name = fi.Name, Value = fi.GetValue(myObj) })
                 )
                .ToDictionary(ks => ks.Name, vs => vs.Value);
        }
        public static string ToJson(this object myObj)
        {
            return JsonConvert.SerializeObject(myObj);
        }
    }
}