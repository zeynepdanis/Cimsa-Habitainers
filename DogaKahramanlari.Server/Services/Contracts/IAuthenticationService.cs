using DogaKahramanlari.Server.Utilities.DataTransferObjects;
using Microsoft.AspNetCore.Identity;

namespace DogaKahramanlari.Server.Services.Contracts
{
    public interface IAuthenticationService
    {
        Task<IdentityResult> RegisterUser(UserForRegistrationDto userForRegistrationDto);
    }
}
