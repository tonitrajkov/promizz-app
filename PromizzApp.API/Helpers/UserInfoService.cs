using Microsoft.AspNetCore.Http;
using System;
using System.Linq;

namespace PromizzApp.API.Helpers
{
    public class UserInfoService : IUserInfoService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public string UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role { get; set; }

        public UserInfoService(IHttpContextAccessor httpContextAccessor)
        {
            // service is scoped, created once for each request => we only need
            // to fetch the info in the constructor
            _httpContextAccessor = httpContextAccessor
                ?? throw new ArgumentNullException(nameof(httpContextAccessor));

            var currentContext = _httpContextAccessor.HttpContext;
            if (currentContext == null || !currentContext.User.Identity.IsAuthenticated)
            {
                return;
            }

            UserId = currentContext
                .User.Claims.FirstOrDefault(c => c.Type == "sub")?.Value;

            FirstName = currentContext.User
                .Claims.FirstOrDefault(c => c.Type == "name")?.Value;

            LastName = currentContext
                .User.Claims.FirstOrDefault(c => c.Type == "profile")?.Value;

            Role = currentContext
              .User.Claims.FirstOrDefault(c => c.Type == "user_name")?.Value;
        }
    }
}
