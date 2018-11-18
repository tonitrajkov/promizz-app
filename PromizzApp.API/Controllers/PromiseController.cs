using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using PromizzApp.API.Helpers;
using PromizzApp.Config.Helpers;
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
        public async Task<IActionResult> AddPromise([FromBody] PromiseAddModel model)
        {
            if (model == null)
                return BadRequest();

            if (!ModelState.IsValid)
                throw new InvalidModelStateException(ModelState);

            if (!string.IsNullOrEmpty(_userInfoService.UserId))
            {
                await _promiseService.AddPromise(model, int.Parse(_userInfoService.UserId));
                return Ok(true);
            }

            return BadRequest();
        }

        [Route("loadpromises")]
        [HttpPost]
        public async Task<IActionResult> GetPromises([FromBody] PromiseSearchModel model)
        {
            if (!string.IsNullOrEmpty(_userInfoService.UserId))
            {
                model.UserId = int.Parse(_userInfoService.UserId);
                var promises = await _promiseService.LoadPromises(model);
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
                return BadRequest();

            if (!ModelState.IsValid)
                throw new InvalidModelStateException(ModelState);

            await _promiseService.UpdatePromise(model);
            return Ok();
        }
    }
}
