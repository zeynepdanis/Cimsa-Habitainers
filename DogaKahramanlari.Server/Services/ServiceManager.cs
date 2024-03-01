using AutoMapper;
using DogaKahramanlari.Server.Models;
using DogaKahramanlari.Server.Repositories.Contracts;
using DogaKahramanlari.Server.Services.Contracts;
using Microsoft.AspNetCore.Identity;

namespace DogaKahramanlari.Server.Services
{
    public class ServiceManager : IServiceManager
    {
        private readonly Lazy<IAuthenticationService> _authencationService;

        public ServiceManager(IRepositoryManager repositoryManager,
            IMapper mapper,
            IConfiguration configuration,
            UserManager<User> userManager)
        {

            _authencationService = new Lazy<IAuthenticationService>(() =>
            new AuthenticationManager(mapper, userManager, configuration));
        }

        public IAuthenticationService AuthenticationService => _authencationService.Value;
    }
}
