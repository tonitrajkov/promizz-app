using PromizzApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PromizzApp.Services.Interfaces
{
    public interface IPromiseService
    {
        Task AddPromise(PromiseAddModel model, int ownerId);

        Task UpdatePromise(PromiseModel model);

        Task<List<PromiseModel>> LoadPromises(PromiseSearchModel model);
        
        Task<PromiseModel> GetPromiseById(int promiseId);
    }
}
