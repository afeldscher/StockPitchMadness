using Newtonsoft.Json;
using StockPitchMadness.DAL.Repositories;
using StockPitchMadness.ViewModels;
using System.Collections.Generic;
using System.Web.Mvc;

namespace StockPitchMadness.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View(new Home()
            {
                Speakers = SpeakerRepositiory.GetAll(),
                Sponsors = new List<string>( new string[] { "sponsor1.png", "sponsor1.png", "sponsor1.png", "sponsor1.png" }),
                Schedules = ScheduleRepository.GetAll(),
                Questions = FAQRepository.Get(0, 4)
            });
        }

        public JsonResult RestQuestions()
        {
            return Json(FAQRepository.Get(4));
        }
    }
}