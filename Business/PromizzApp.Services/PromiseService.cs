using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

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

        public PromiseService(
            IRepository<Promise> promiseRepository,
            IRepository<User> userRepository,
            IRepository<PromiseState> promiseStateRepository
            )
        {
            _promiseRepository = promiseRepository;
            _promiseStateRepository = promiseStateRepository;
            _userRepository = userRepository;
        }

        #endregion

        public async Task AddPromise(PromiseModel model)
        {
            var promise = Mapper.Map<Promise>(model);
            promise.Color = "#AAA";
            promise.StateId = 1;

            await _promiseRepository.CreateAsync(promise);
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

            return Mapper.Map<PromiseModel>(promise);
        }

        public async Task<List<PromiseModel>> LoadPromisesByOwner(int ownerId)
        {
            var promises = (await _promiseRepository.GetAllAsync()).Where(p => p.OwnerId == ownerId);

            return promises.Select(p => Mapper.Map<PromiseModel>(p)).ToList();
        }

        public async Task<List<PromiseModel>> LoadPromisesForParticipant(int participantId)
        {
            var user = await _userRepository.GetByIdAsync(participantId);

            return  new List<PromiseModel>
            {
                new PromiseModel{ Id = 22, OwnerId = 44, Title = "Pay date (In memory)", Description = "Pay date Description something", EndDate = DateTime.Now.AddDays(10), Color = "#010", StateId = 1},
                new PromiseModel{ Id = 23, OwnerId = 10, Title = "Learn Spanish (in memory)", Description = "Learn Spanish Description something",  EndDate = DateTime.Now.AddDays(5), Color = "#010", StateId = 1}
            };
        }
    }
}
