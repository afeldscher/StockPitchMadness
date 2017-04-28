using Newtonsoft.Json;
using StockPitchMadness.DAL.Repositories;
using StockPitchMadness.ViewModels;
using System.Collections.Generic;
using System.Web.Mvc;

namespace StockPitchMadness.Controllers
{
    public class HomeController : Controller
    {
        private const int NUM_FAQ = 4;

        [OutputCache(Duration = 86400, VaryByParam = "none")] //1 day
        public ActionResult Index()
        {
            return View(new Home()
            {
                Speakers = SpeakerRepositiory.GetAll(),
                Sponsors = new List<string>(new string[] { "sponsor1.png", "sponsor1.png", "sponsor1.png", "sponsor1.png" }),
                Schedules = ScheduleRepository.GetAll(),
                Questions = FAQRepository.Get(0, NUM_FAQ)
            });
        }

        [OutputCache(Duration = 86400, VaryByParam = "none")]  //1 day
        public ActionResult RestQuestions()
        {
            return PartialView("QuestionsPartial", FAQRepository.Get(NUM_FAQ));
        }
    }
}