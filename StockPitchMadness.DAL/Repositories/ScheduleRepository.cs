using Newtonsoft.Json;
using StockPitchMadness.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StockPitchMadness.DAL.Repositories
{
    public static class ScheduleRepository
    {
        public static List<Schedule> GetAll()
        {
            string filePath = AppDomain.CurrentDomain.GetData("DataDirectory").ToString() + "\\Schedule.json";

            using (StreamReader file = File.OpenText(filePath))
            {
                JsonSerializer serializer = new JsonSerializer();
                return (List<Schedule>)serializer.Deserialize(file, typeof(List<Schedule>));
            }
        }
    }
}
