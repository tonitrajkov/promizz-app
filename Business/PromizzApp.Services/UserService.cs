using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using PromizzApp.Data;
using PromizzApp.Data.Interfaces;
using PromizzApp.Domain;
using PromizzApp.Models;
using PromizzApp.Services.Interfaces;

namespace PromizzApp.Services
{
    public class UserService : IUserService
    {
        #region Declaration & Ctor

        private readonly PromizzAppContext _promizzAppContext;
        private readonly IRepository<User> _userRepository;
        private readonly IRepository<Friendship> _friendshipRepository;
        private readonly IRepository<FriendshipState> _friendshipStateRepository;

        public UserService(
            PromizzAppContext promizzAppContext,
            IRepository<User> userRepository,
            IRepository<Friendship> friendshipRepository,
            IRepository<FriendshipState> friendshipStateRepository
            )
        {
            _promizzAppContext = promizzAppContext;
            _userRepository = userRepository;
            _friendshipRepository = friendshipRepository;
            _friendshipStateRepository = friendshipStateRepository;
        }

        #endregion

        public async Task<UserModel> GetUserByUserName(string username)
        {
            var user = (await _userRepository.GetAllAsync())
                .FirstOrDefault(u => u.Username.ToLower() == username.Trim().ToLower());
            if (user == null)
                throw new Exception("USER_DOES_NOT_EXIST");

            return Mapper.Map<UserModel>(user);
        }

        public async Task UpdateUser(UserModel model)
        {
            var user = await _userRepository.GetByIdAsync(model.Id);
            if (user == null)
                throw new Exception("USER_DOES_NOT_EXIST");

            user.Bio = model.Bio;
            user.Fullname = model.Fullname;
            user.Username = model.Username;
            user.Email = model.Email;

            await _userRepository.UpdateAsync(user);
        }

        public async Task<IEnumerable<UserModel>> FilterUsers(string filterValue)
        {
            var filterValueLowered = filterValue.ToLower();

            var users = (await _userRepository.GetAllAsync())
                        .Where(u => u.Fullname.ToLower().Contains(filterValueLowered)
                                || u.Email.ToLower().Contains(filterValueLowered)
                                || u.Username.ToLower().Contains(filterValueLowered));

            return users.Select(u => Mapper.Map<UserModel>(u)).ToList();
        }

        #region Friendship

        public async Task AddFriednship(int actionUserId, int relatedUserId)
        {
            var friendship = await GetFriendshipBetweenUsers(actionUserId, relatedUserId);
            if (friendship != null)
                throw new Exception("FRIENDSHIP_ALREADY_EXIST");

            var model = new Friendship
            {
                UserOneId = actionUserId,
                UserTwoId = relatedUserId,
                LastActionByUserId = actionUserId,
                StateId = (int)FriendshipStateEnum.Pending
            };

            await _friendshipRepository.CreateAsync(model);
        }

        public async Task UpdateFriendshipState(int actionUserId, int relatedUserId, int friendshipState)
        {
            var friendship = await GetFriendshipBetweenUsers(actionUserId, relatedUserId);
            if (friendship == null)
                throw new Exception("FRIENDSHIP_DOES_NOT_EXIST");

            friendship.StateId = friendshipState;
            await _friendshipRepository.UpdateAsync(friendship);
        }

        public async Task RemoveFriendship(int actionUserId, int relatedUserId)
        {
            var friendship = await GetFriendshipBetweenUsers(actionUserId, relatedUserId);
            if (friendship == null)
                throw new Exception("FRIENDSHIP_DOES_NOT_EXIST");

            await _friendshipRepository.DeleteAsync(friendship);
        }

        public async Task<int> CountFriends(int userId)
        {
            return (await _friendshipRepository.GetAllAsync())
               .Count(f => (f.UserOneId == userId || f.UserTwoId == userId)
                            && f.StateId == (int)FriendshipStateEnum.Accepted);
        }

        public async Task<IEnumerable<UserModel>> LoadFriends(int userId)
        {
            return await LoadFriendsForUserByState(userId, (int)FriendshipStateEnum.Accepted);
        }

        public async Task<int> CountPendingRequests(int userId)
        {
            return (await _friendshipRepository.GetAllAsync())
              .Count(f => (f.UserOneId == userId || f.UserTwoId == userId)
                           && f.StateId == (int)FriendshipStateEnum.Pending);
        }

        public async Task<IEnumerable<UserModel>> LoadPendingRequests(int userId)
        {
            return await LoadFriendsForUserByState(userId, (int)FriendshipStateEnum.Pending);
        }

        public async Task<int> CountBlockedInvitations(int userId)
        {
            return (await _friendshipRepository.GetAllAsync())
              .Count(f => (f.UserOneId == userId || f.UserTwoId == userId)
                           && f.StateId == (int)FriendshipStateEnum.Blocked);
        }

        public async Task<IEnumerable<UserModel>> LoadBlockedInvitations(int userId)
        {
            return await LoadFriendsForUserByState(userId, (int)FriendshipStateEnum.Blocked);
        }

        private async Task<Friendship> GetFriendshipBetweenUsers(int userOneId, int userTwoId)
        {
            return (await _friendshipRepository.GetAllAsync())
              .FirstOrDefault(f => (f.UserOneId == userOneId && f.UserTwoId == userTwoId)
               || (f.UserOneId == userTwoId && f.UserTwoId == userOneId));
        }

        private async Task<IEnumerable<UserModel>> LoadFriendsForUserByState(int userId, int stateId)
        {
            var parameters = new[] {
                    new SqlParameter("@UserId", userId),
                    new SqlParameter("@StateId", stateId)
                };

            var friends = await _promizzAppContext.Users
                      .FromSql("Exec [dbo].[LoadUserFriendshipConnectionsByState] @UserId, @StateId", parameters)
                      .ToListAsync();

            return friends.Select(f => Mapper.Map<UserModel>(f)).ToList();
        }

        #endregion
    }
}
