using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DogaKahramanlari.Server.Services.Contracts
{
    public interface IServiceManager
    {
        IAnimalService AnimalService { get; }
        IUserKeyService UserKeyService { get; }
        IAuthenticationService AuthenticationService { get; }
    }
}