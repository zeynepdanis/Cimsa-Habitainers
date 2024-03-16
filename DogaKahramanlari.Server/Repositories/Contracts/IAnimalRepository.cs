using DogaKahramanlari.Server.Models;
using DogaKahramanlari.Server.Utilities.DataTransferObjects;
using System.Linq.Expressions;

namespace DogaKahramanlari.Server.Repositories.Contracts
{
    public interface IAnimalRepository : IRepositoryBase<Animal>
    {
        Task<IEnumerable<Animal>> GetAllAnimalsAsync(bool trackChanges);
        Task<Animal> GetOneAnimalByIdAsync(int id, bool trackChanges);
        void CreateOneAnimal(Animal animal);
        void UpdateOneAnimal(Animal animal);
        void DeleteOneAnimal(Animal animal);

    }
}
