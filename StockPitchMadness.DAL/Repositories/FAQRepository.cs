using Newtonsoft.Json;
using StockPitchMadness.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace StockPitchMadness.DAL.Repositories
{
    public class FAQRepository
    {
        public static List<Question> GetAll()
        {
            string filePath = AppDomain.CurrentDomain.GetData("DataDirectory").ToString() + "\\FAQ.json";

            using (StreamReader file = File.OpenText(filePath))
            {
                JsonSerializer serializer = new JsonSerializer();
                return (List<Question>)serializer.Deserialize(file, typeof(List<Question>));
            }
        }

        public static Dictionary<string, List<Question>> Get(int start, int quantity = -1)
        {
            string filePath = AppDomain.CurrentDomain.GetData("DataDirectory").ToString() + "\\FAQ.json";

            using (StreamReader file = File.OpenText(filePath))
            {
                JsonSerializer serializer = new JsonSerializer();
                var qs = (List<Question>)serializer.Deserialize(file, typeof(List<Question>));

                quantity = quantity == -1 ? qs.Count : quantity;


                return qs
                        .Skip(start)
                        .Take(quantity)
                        .GroupBy(x => x.Category)
                        .ToDictionary(x => x.Key, x => x.ToList());
            }
        }
    }
}
