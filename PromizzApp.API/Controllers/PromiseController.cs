using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PromizzApp.API.Helpers;
using PromizzApp.Services.Interfaces;

namespace PromizzApp.API.Controllers
{
    [Route("api/promise")]
    [Authorize]
    public class PromiseController : Controller
    {
        #region Declaration & Ctor

        private readonly IPromiseService _promiseService;
        private readonly IUserInfoService _userInfoService;

        public PromiseController(
            IPromiseService promiseService,
            IUserInfoService userInfoService)
        {
            _promiseService = promiseService;
            _userInfoService = userInfoService;
        }

        #endregion

        [HttpGet]
        public async Task<IActionResult> GetPromises()
        {
            if (!string.IsNullOrEmpty(_userInfoService.UserId))
            {
                var promises = await _promiseService.LoadPromisesByOwner(int.Parse(_userInfoService.UserId));
                return Ok(promises);
            }
            return BadRequest();
        }

        [HttpGet("{promiseId}")]
        public async Task<IActionResult> GetPromise(int promiseId)
        {
            var promise = await _promiseService.GetPromiseById(promiseId);
            return Ok(promise);
        }
    }
}
