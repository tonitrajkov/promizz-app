using PromizzApp.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PromizzApp.Models
{
    public static class VmMapper
    {
        #region Promise

        public static PromiseModel ToModel(this Promise domain)
        {
            var model = new PromiseModel
            {
                Id = domain.Id,
                Color = domain.Color,
                Description = domain.Description,
                EndDate = domain.EndDate,
                Title = domain.Title
            };

            if (domain.State != null)
            {
                model.State = new LookupItem<int>
                {
                    Key = domain.State.Id,
                    Value = domain.State.MultiLangKey
                };
            }

            if(domain.Members != null && domain.Members.Count() > 0)
            {
                model.Promisee = domain.Members.Select(m => m.Promisee.ToModel()).FirstOrDefault();
            }

            return model;
        }

        #endregion

        #region User

        public static UserModel ToModel(this User domain)
        {
            var model = new UserModel
            {
                Id = domain.Id,
                Username = domain.Username,
                Email = domain.Email,
                Avatar = domain.Avatar,
                Bio = domain.Bio,
                Firstname = domain.Firstname,
                Lastname = domain.Lastname
            };

            return model;
        }

        #endregion

    }
}
