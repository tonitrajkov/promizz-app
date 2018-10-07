using System;
using System.Net;
using FluentValidation;
using FluentValidation.AspNetCore;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;

using PromizzApp.API.Helpers;
using PromizzApp.Config.Helpers;
using PromizzApp.Data;
using PromizzApp.Data.Implementations;
using PromizzApp.Data.Interfaces;
using PromizzApp.Models;
using PromizzApp.Models.Validators;
using PromizzApp.Services;
using PromizzApp.Services.Interfaces;

namespace PromizzApp.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddMvc()
                .AddJsonOptions(options => { options.SerializerSettings.ContractResolver = new DefaultContractResolver(); });

            services.AddMvc().AddFluentValidation();

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins",
                    builder =>
                    {
                        builder.AllowAnyOrigin()
                               .AllowAnyHeader()
                               .AllowAnyMethod();
                    });
            });

            // Register fluent validators
            services.RegisterFluentValidators();

            services.AddDbContext<PromizzAppContext>(
               options => options.UseSqlServer(
                    Configuration.GetConnectionString("PromizzAppConnection")));

            // Register Repository and Services
            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            services.AddScoped<IPromiseService, PromiseService>();
            services.AddScoped<ILocalizationService, LocalizationService>();
            services.AddScoped<IUserService, UserService>();

            // Identity Provider
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<IUserInfoService, UserInfoService>();

            services.AddAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme)
                   .AddIdentityServerAuthentication(options =>
                   {
                       options.Authority = "https://localhost:44382";
                       options.ApiName = "promizzappapi";
                   });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            Mappers.Configuration.Initialize();

            app.ConfigureCustomExceptionMiddleware();
            app.UseCors("AllowAllOrigins");
            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
