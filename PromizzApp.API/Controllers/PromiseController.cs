using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PromizzApp.Services.Interfaces;

namespace PromizzApp.API.Controllers
{
    [Route("api/promise")]
    public class PromiseController : Controller
    {
        #region Declaration & Ctor

        private readonly IPromiseService _promiseService;

        public PromiseController(IPromiseService promiseService)
        {
            _promiseService = promiseService;
        }

        #endregion

        [HttpGet]
        public IActionResult GetPromises()
        {
            var promises = _promiseService.GetPromisesForUser(string.Empty);
            return Ok(promises);
        }
    }
}
