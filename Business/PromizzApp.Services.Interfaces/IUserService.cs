using PromizzApp.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PromizzApp.Services.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<UserModel>> FilterUsers(string filterValue);

        #region Friendship

        Task AddFriednship(int actionUserId, int relatedUserId);
        Task UpdateFriendshipState(int actionUserId, int relatedUserId, int friendshipState);
        Task RemoveFriendship(int actionUserId, int relatedUserId);
        Task<int> CountFriends(int userId);
        Task<IEnumerable<UserModel>> LoadFriends(int userId);
        Task<int> CountPendingRequests(int userId);
        Task<IEnumerable<UserModel>> LoadPendingRequests(int userId);
        Task<int> CountBlockedInvitations(int userId);
        Task<IEnumerable<UserModel>> LoadBlockedInvitations(int userId);

        #endregion
    }
}
