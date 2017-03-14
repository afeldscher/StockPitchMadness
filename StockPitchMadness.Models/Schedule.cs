using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StockPitchMadness.Models
{
    public class Schedule
    {
        public string Date { get; set; }
        public List<Event> Events { get; set; }
    }
}
