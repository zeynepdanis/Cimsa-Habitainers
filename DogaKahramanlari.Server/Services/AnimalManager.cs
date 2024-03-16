using DogaKahramanlari.Server.Models;
using DogaKahramanlari.Server.Repositories.Contracts;
using DogaKahramanlari.Server.Services.Contracts;
using DogaKahramanlari.Server.Utilities.DataTransferObjects;
using Microsoft.AspNetCore.Http.HttpResults;

namespace DogaKahramanlari.Server.Services
{
    public class AnimalManager : IAnimalService
    {
        private readonly IRepositoryManager _manager;
        public AnimalManager(IRepositoryManager manager)
        {
            _manager = manager;
        }

  
        public async Task<IEnumerable<Animal>> GetAllAnimalsAsync(bool trackChanges)
        {
            return await _manager
                .AnimalRepository
                .GetAllAnimalsAsync(trackChanges);
        }

        public async Task<Animal> GetOneAnimalByIdAsync(int id, bool trackChanges)
        {

            var category = await _manager
                .AnimalRepository
                .GetOneAnimalByIdAsync(id, trackChanges);

            if (category is null)
                throw new ArgumentNullException(nameof(category), "Category cannot be null.");
            return category;
        }
    }
    }

