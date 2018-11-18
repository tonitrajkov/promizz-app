using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PromizzApp.Models;
using PromizzApp.Services.Interfaces;

namespace PromizzApp.API.Controllers
{
    [Route("api/profile")]
    [Authorize]
    public class ProfileController : Controller
    {
        #region Declaration & Ctor

        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IUserService _userService;

        public ProfileController(
                   IHttpContextAccessor httpContextAccessor,
                   IUserService userService)
        {
            this._httpContextAccessor = httpContextAccessor;
            _userService = userService;
        }

        #endregion

        [Route("{username}")]
        [HttpGet]
        public async Task<IActionResult> GetUserProfile(string username)
        {
            var profile = await _userService.GetUserByUserName(username);
            return Ok(profile);
        }

        [HttpPut]
        public async Task<IActionResult> PutUser([FromBody] UserModel model)
        {
            if (model == null)
            {
                return BadRequest();
            }

            await _userService.UpdateUser(model);
            return Ok();
        }

        [Route("loadfriends")]
        [HttpGet]
        public async Task<ActionResult> LoadFriends()
        {
            var currentUser = 1;
            var friends = await _userService.LoadFriends(currentUser);

            return Ok(friends);
        }

        [Route("filterusers/{filterValue}")]
        [HttpGet]
        public async Task<ActionResult> GetUsersFiltered(string filterValue)
        {
            var users = await _userService.FilterUsers(filterValue);
            return Ok(users);
        }
    }
}