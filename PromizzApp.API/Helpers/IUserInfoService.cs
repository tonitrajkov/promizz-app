using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PromizzApp.API.Helpers
{
    public interface IUserInfoService
    {
        string UserId { get; set; }
        string FirstName { get; set; }
        string LastName { get; set; }
        string Role { get; set; }

    }
}
