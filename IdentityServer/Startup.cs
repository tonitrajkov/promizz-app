using IdentityServer4;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace IdentityServer
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
            services.AddMvc();

            services.AddIdentityServer()
              .AddDeveloperSigningCredential()
              .AddTestUsers(Config.GetUsers())
              .AddInMemoryApiResources(Config.GetApiResources())
              .AddInMemoryIdentityResources(Config.GetIdentityResources())
              .AddInMemoryClients(Config.GetClients());

            services.AddAuthentication()
                    .AddGoogle("Google", options =>
                    {
                        options.SignInScheme = IdentityServerConstants.ExternalCookieAuthenticationScheme;

                        options.ClientId = "434483408261-55tc8n0cs4ff1fe21ea8df2o443v2iuc.apps.googleusercontent.com";
                        options.ClientSecret = "3gcoTrEDPPJ0ukn_aYYT6PWo";
                    })
                    .AddFacebook("Facebook", options =>
                    {
                        options.SignInScheme = IdentityServerConstants.ExternalCookieAuthenticationScheme;

                        options.AppId = "781424505350181";
                        options.AppSecret = "806c8f3a1b6e9764a2b16d53dd2ab0e9";
                    });

            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(c => c.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

            app.UseIdentityServer();

            app.UseStaticFiles();
            app.UseMvcWithDefaultRoute();
        }
    }
}
