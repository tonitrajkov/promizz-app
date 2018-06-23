using PromizzApp.Models;
using PromizzApp.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PromizzApp.Services
{
    public class PromiseService : IPromiseService
    {
        private static List<PromiseModel> promises = new List<PromiseModel>
            {
                new PromiseModel{ Id = Guid.NewGuid(), Creator = "fec0a4d6-5830-4eb8-8024-272bd5d6d2bb", Title = "Pay date", Description = "Pay date Description something"},
                new PromiseModel{ Id = Guid.NewGuid(), Creator = "fec0a4d6-5830-4eb8-8024-272bd5d6d2bb", Title = "Learn Spanish", Description = "Learn Spanish Description something"},
                new PromiseModel{ Id = Guid.NewGuid(), Creator = "c3b7f625-c07f-4d7d-9be1-ddff8ff93b4d", Title = "To be a programmer", Description = "To be a programmer Description something"},
                new PromiseModel{ Id = Guid.NewGuid(), Creator = "c3b7f625-c07f-4d7d-9be1-ddff8ff93b4d", Title = "Keep a secret", Description = "Keep a secret Description something"},
                new PromiseModel{ Id = Guid.NewGuid(), Creator = "13bcf625-90cf-d74d-19be-aaccaff93b4d", Title = "Be more productive", Description = "Be more productive Description something"},
                new PromiseModel{ Id = Guid.NewGuid(), Creator = "13bcf625-90cf-d74d-19be-aaccaff93b4d", Title = "No fast food", Description = "No fast food Description something"}
            };

        public List<PromiseModel> GetPromisesForUser(string userId)
        {
            return promises;
        }

        public PromiseModel GetSpecificPromise(Guid promiseId)
        {
            return promises.FirstOrDefault(p => p.Id == promiseId);
        }
    }
}
