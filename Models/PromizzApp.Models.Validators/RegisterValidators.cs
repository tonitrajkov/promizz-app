using FluentValidation;
using Microsoft.Extensions.DependencyInjection;

namespace PromizzApp.Models.Validators
{
    public static class RegisterValidators
    {
        public static void RegisterFluentValidators(this IServiceCollection services)
        {
            services.AddSingleton<IValidator<PromiseModel>, PromiseValidator>();
            services.AddSingleton<IValidator<PromiseAddModel>, PromiseAddValidator>();
        }
    }
}
