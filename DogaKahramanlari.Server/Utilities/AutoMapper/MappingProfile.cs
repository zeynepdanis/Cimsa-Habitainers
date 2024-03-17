using AutoMapper;
using DogaKahramanlari.Server.Models;
using DogaKahramanlari.Server.Services.Contracts;
using DogaKahramanlari.Server.Utilities.DataTransferObjects;

namespace DogaKahramanlari.Server.Utilities.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<UserForRegistrationDto, User>();

            CreateMap<AnimalDtoForUpdate, Animal>().ReverseMap();
            CreateMap<Animal, AnimalDto>();
            CreateMap<AnimalDtoForInsertion, Animal>();

            
            CreateMap<UserKeyDtoForUpdate, UserKey>().ReverseMap();
            CreateMap<UserKey, UserKeyDto>();
            CreateMap<UserKeyDtoForInsertion, UserKey>();

        }
    }
}
