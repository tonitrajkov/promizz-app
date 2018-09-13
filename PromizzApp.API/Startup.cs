using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;
using PromizzApp.API.Helpers;
using PromizzApp.Data;
using PromizzApp.Data.Implementations;
using PromizzApp.Data.Interfaces;
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
            
            services.AddMvc().AddJsonOptions(options => { options.SerializerSettings.ContractResolver = new DefaultContractResolver(); });
        
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

            services.AddDbContext<PromizzAppContext>(
               options => options.UseSqlServer(
                    Configuration.GetConnectionString("PromizzAppConnection")));


            services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

            services.AddScoped<IPromiseService, PromiseService>();
            services.AddScoped<ILocalizationService, LocalizationService>();

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

            app.UseCors("AllowAllOrigins");
            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
