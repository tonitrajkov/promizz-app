using AutoMapper;
using AutoMapper.Configuration;

using PromizzApp.Domain;
using PromizzApp.Models;

namespace PromizzApp.Mappers
{
    public static class Configuration
    {
        public static MapperConfigurationExpression GetMapperConfiguration()
        {
            var cfg = new MapperConfigurationExpression();

            cfg.CreateMap<Promise, PromiseModel>().ReverseMap();
            cfg.CreateMap<User, UserModel>().ReverseMap();

            return cfg;
        }

        public static void Initialize()
        {
            Mapper.Initialize(GetMapperConfiguration());
        }
    }
}
