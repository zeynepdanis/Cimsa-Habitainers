using DogaKahramanlari.Server.Models;
using DogaKahramanlari.Server.Repositories;
using DogaKahramanlari.Server.Repositories.Contracts;
using DogaKahramanlari.Server.Services;
using DogaKahramanlari.Server.Services.Contracts;
using Microsoft.AspNetCore.Identity;

namespace DogaKahramanlari.Server.Extensions
{
    public static class ServicesExtensions
    {
        public static void ConfigureRepositoryManager(this IServiceCollection services) =>
            services.AddScoped<IRepositoryManager, RepositoryManager>();

        public static void ConfigureServiceManager(this IServiceCollection services) =>
            services.AddScoped<IServiceManager, ServiceManager>();

        public static void ConfigureIdentity(this IServiceCollection services)
        {
            var builder = services.AddIdentity<User, IdentityRole>(opts =>
            {
                opts.Password.RequireDigit = true;
                opts.Password.RequireLowercase = false;
                opts.Password.RequireUppercase = false;
                opts.Password.RequireNonAlphanumeric = false;
                opts.Password.RequiredLength = 6;
                //opts.User.RequireUniqueEmail = true;
            })
                .AddEntityFrameworkStores<RepositoryContext>()
                .AddDefaultTokenProviders();
        }


    }
}
