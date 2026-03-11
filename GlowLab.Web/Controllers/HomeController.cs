using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using GlowLab.Web.Models;

namespace GlowLab.Web.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    [Route("burn-in")]
    public IActionResult BurnIn()
    {
        return View();
    }

    [Route("dead-pixel")]
    public IActionResult DeadPixel()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
