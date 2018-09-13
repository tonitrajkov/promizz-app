using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PromizzApp.Services.Interfaces;

namespace PromizzApp.API.Controllers
{
    [Route("api/localization")]
    public class LocalizationController : Controller
    {
        #region Declaration & Ctor

        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ILocalizationService _localizationService;

        public LocalizationController(
                   IHttpContextAccessor httpContextAccessor,
                   ILocalizationService localizationService)
        {
            this._httpContextAccessor = httpContextAccessor;
            _localizationService = localizationService;
        }

        #endregion
        
        [HttpGet]
        public IActionResult GetLocalization()
        {
            var language = _httpContextAccessor.HttpContext.Request.Cookies["currentLanguage"];
            var result = _localizationService.LoadLocalization(language);

            return Ok(result);
        }

        [Route("changelanguage")]
        [HttpPost]
        public IActionResult ChangeLanguage(string langName)
        {
            var language = _httpContextAccessor.HttpContext.Request.Cookies["currentLanguage"];
            if (language != langName)
            {
                Response.Cookies.Delete("currentLanguage");
            }

            Response.Cookies.Append("currentLanguage", langName);
            return Ok();
        }
    }
}