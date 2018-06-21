using PromizzApp.Models;
using PromizzApp.Services.Interfaces;
using System;
using System.Collections.Generic;

namespace PromizzApp.Services
{
    public class PromiseService : IPromiseService
    {
        public List<PromiseModel> GetPromisesForUser(string userId)
        {
            var promises = new List<PromiseModel>
            {
                new PromiseModel{ Id = Guid.NewGuid(), Creator = "fec0a4d6-5830-4eb8-8024-272bd5d6d2bb", Title = "Pay date", Descrtiption = "Pay date"},
                new PromiseModel{ Id = Guid.NewGuid(), Creator = "fec0a4d6-5830-4eb8-8024-272bd5d6d2bb", Title = "Learn Spanish", Descrtiption = "Learn Spanish"},
                new PromiseModel{ Id = Guid.NewGuid(), Creator = "c3b7f625-c07f-4d7d-9be1-ddff8ff93b4d", Title = "To be a programmer", Descrtiption = "To be a programmer"},
                new PromiseModel{ Id = Guid.NewGuid(), Creator = "c3b7f625-c07f-4d7d-9be1-ddff8ff93b4d", Title = "Keep a secret", Descrtiption = "Keep a secret"},
                new PromiseModel{ Id = Guid.NewGuid(), Creator = "13bcf625-90cf-d74d-19be-aaccaff93b4d", Title = "Be more productive", Descrtiption = "Be more productive"},
                new PromiseModel{ Id = Guid.NewGuid(), Creator = "13bcf625-90cf-d74d-19be-aaccaff93b4d", Title = "No fast food", Descrtiption = "No fast food"}
            };

            return promises;
        }
    }
}
