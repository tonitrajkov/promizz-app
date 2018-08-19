using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PromizzApp.API.Helpers;
using PromizzApp.Models;
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

        [HttpPost]
        public async Task<IActionResult> AddPromise([FromBody] PromiseModel model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            //if (!ModelState.IsValid)
            //{
            //    return new UnprocessableEntityObjectResult(ModelState);
            //}

            if (!string.IsNullOrEmpty(_userInfoService.UserId))
            {
                model.OwnerId = int.Parse(_userInfoService.UserId);
                await _promiseService.AddPromise(model);
                return Ok();
            }

            return BadRequest();
        }

        [HttpGet]
        public async Task<IActionResult> GetPromises()
        {
            if (!string.IsNullOrEmpty(_userInfoService.UserId))
            {
                //var promise = new PromiseModel
                //{
                //    EndDate = DateTime.Now,
                //    OwnerId = int.Parse(_userInfoService.UserId),
                //    Title = "Tell you a story",
                //    Description = "Dec"
                //};

                //await _promiseService.CreatePromise(promise);

                var promises = await _promiseService.LoadPromisesByOwner(int.Parse(_userInfoService.UserId));
                return Ok(promises);
            }
            return BadRequest();
        }

        [Route("{promiseId}")]
        [HttpGet]
        public async Task<IActionResult> GetPromise(int promiseId)
        {
            var promise = await _promiseService.GetPromiseById(promiseId);
            return Ok(promise);
        }
        
        [HttpPut]
        public async Task<IActionResult> PutPromise([FromBody] PromiseModel model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            await _promiseService.UpdatePromise(model);
            return Ok();
        }

    }
}
