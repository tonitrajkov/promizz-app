using PromizzApp.Models;
using System;
using System.Collections.Generic;

namespace PromizzApp.Services.Interfaces
{
    public interface IPromiseService
    {
        List<PromiseModel> GetPromisesForUser(string userId);
    }
}
