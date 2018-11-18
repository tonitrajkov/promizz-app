using PromizzApp.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace PromizzApp.Models
{
    public static class DomainMapper
    {
        #region Promise 

        public static Promise ToDomain(this PromiseModel model)
        {
            var domain = new Promise
            {
                Id = model.Id,
                Color = model.Color,
                Description = model.Description,
                EndDate = model.EndDate,
                Title = model.Title
            };

            if (model.State != null)
            {
                domain.StateId = model.State.Key;
            }

            return domain;
        }

        public static Promise ToDomain(this PromiseAddModel model)
        {
            var domain = new Promise
            {
                Color = model.Color,
                Description = model.Description,
                EndDate = model.EndDate,
                Title = model.Title
            };

            return domain;
        }

        #endregion

        #region User

        public static User ToDomain(this UserModel model)
        {
            var domain = new User
            {
                Id = model.Id,
                Username = model.Username,
                Email = model.Email,
                Avatar = model.Avatar,
                Bio = model.Bio,
                Firstname = model.Firstname,
                Lastname = model.Lastname
            };

            return domain;
        }

        #endregion
    }
}
