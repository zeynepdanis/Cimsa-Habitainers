using DogaKahramanlari.Server.Models;
using DogaKahramanlari.Server.Utilities.DataTransferObjects;

namespace DogaKahramanlari.Server.Services.Contracts
{
    public interface IAnimalService
    {
        Task<IEnumerable<Animal>> GetAllAnimalsAsync(bool trackChanges);
        Task<Animal> GetOneAnimalByIdAsync(int id, bool trackChanges);
    
        Task<AnimalDto> CreateOneAnimalAsync(AnimalDtoForInsertion animalDtoForInsertion);
      
        Task UpdateOneAnimalAsync(int id, AnimalDtoForUpdate animalDtoForUpdate, bool trackChanges);
        
        Task DeleteOneAnimalAsync(int id, bool trackChanges);
    }
}
