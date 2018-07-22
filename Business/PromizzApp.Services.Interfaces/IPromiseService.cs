using PromizzApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PromizzApp.Services.Interfaces
{
    public interface IPromiseService
    {
        Task CreatePromise(PromiseModel model);

        Task<List<PromiseModel>> LoadPromisesByOwner(int ownerId);

        Task<List<PromiseModel>> LoadPromisesForParticipant(int participantId);
        
        Task<PromiseModel> GetPromiseById(int promiseId);
    }
}
