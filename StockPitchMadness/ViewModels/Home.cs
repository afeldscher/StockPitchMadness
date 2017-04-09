using StockPitchMadness.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StockPitchMadness.ViewModels
{
    public class Home
    {
        public List<Speaker> Speakers { get; set; }
        public List<string> Sponsors { get; set; }
        public List<Schedule> Schedules { get; set; }
        public Dictionary<string, List<Question>> Questions { get; set; }
    }
}