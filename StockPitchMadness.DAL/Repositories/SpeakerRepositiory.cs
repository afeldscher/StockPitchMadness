﻿using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using StockPitchMadness.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StockPitchMadness.DAL.Repositories
{
    public static class SpeakerRepositiory
    {
        public static List<Speaker> GetAll()
        {
            string filePath = AppDomain.CurrentDomain.GetData("DataDirectory").ToString() + "\\Speakers.json";

            using (StreamReader file = File.OpenText(filePath))
            {
                JsonSerializer serializer = new JsonSerializer();
                return (List<Speaker>)serializer.Deserialize(file, typeof(List<Speaker>));
            }
        }
    }
}
