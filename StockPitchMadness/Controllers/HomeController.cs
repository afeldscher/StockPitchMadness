using StockPitchMadness.DAL.Repositories;
using StockPitchMadness.ViewModels;
using System.Web.Mvc;

namespace StockPitchMadness.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View(new Home()
            {
                Speakers = SpeakerRepositiory.GetAll()
            });
        }
    }
}