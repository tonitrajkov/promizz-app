using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using PromizzApp.Config.Helpers;
using PromizzApp.Data.Interfaces;
using PromizzApp.Domain;
using PromizzApp.Models;
using PromizzApp.Services.Interfaces;

namespace PromizzApp.Services
{
    public class PromiseService : IPromiseService
    {
        #region Declaration & Ctor

        private readonly IRepository<Promise> _promiseRepository;
        private readonly IRepository<User> _userRepository;
        private readonly IRepository<PromiseState> _promiseStateRepository;
        private readonly IRepository<PromiseMember> _promiseMemberRepository;

        public PromiseService(
            IRepository<Promise> promiseRepository,
            IRepository<User> userRepository,
            IRepository<PromiseState> promiseStateRepository,
            IRepository<PromiseMember> promiseMemberRepository
            )
        {
            _promiseRepository = promiseRepository;
            _promiseStateRepository = promiseStateRepository;
            _userRepository = userRepository;
            _promiseMemberRepository = promiseMemberRepository;
        }

        #endregion

        public async Task AddPromise(PromiseAddModel model, int ownerId)
        {
            var promise = model.ToDomain();
            promise.UserId = ownerId;
            promise.StateId = 1;
            promise.DateAdded = DateTime.Now;
            promise.DateModified = DateTime.Now;

            await _promiseRepository.CreateAsync(promise);

            if(model.Promisees.Count() > 0)
            {
                foreach (var item in model.Promisees)
                {
                    var member = new PromiseMember
                    {
                        PromiseeId = item,
                        PromiseId = promise.Id,
                        UserId = ownerId
                    };

                    await _promiseMemberRepository.CreateAsync(member);
                }
            }
        }

        public async Task UpdatePromise(PromiseModel model)
        {
            var promise = await _promiseRepository.GetByIdAsync(model.Id);
            if (promise == null)
                throw new PromizzObjectNullException("PROMISE_DOESNT_EXIST");

            promise.Title = model.Title;
            promise.Description = model.Description;
            promise.EndDate = model.EndDate;

            await _promiseRepository.UpdateAsync(promise);
        }

        public async Task<PromiseModel> GetPromiseById(int promiseId)
        {
            var promise = await _promiseRepository.GetByIdAsync(promiseId);
            if (promise == null)
                throw new PromizzObjectNotFoundException("PROMISE_IS_NOT_FOUND");

            return promise.ToModel();
        }

        public async Task<List<PromiseModel>> LoadPromises(PromiseSearchModel model)
        {
            if (model == null)
                throw new PromizzObjectNullException("SEARCH_MODEL_NULL");

            if (string.IsNullOrEmpty(model.Assing))
                throw new PromizzGeneralException("PROMISE_BAD_PARAMETERS");

            if(model.Assing.ToLower() == "to")
            {
                return (await _promiseRepository.GetAllAsync())
                                .Where(p => p.Members.Any(m => m.PromiseeId == model.UserId))
                                .Select(p => p.ToModel()).ToList();
            }
            else if(model.Assing.ToLower() == "by")
            {
                return (await _promiseRepository.GetAllAsync())
                            .Where(p => p.UserId == model.UserId)
                            .Select(p => p.ToModel()).ToList();
            }

            return new List<PromiseModel>();
        }
    }
}
