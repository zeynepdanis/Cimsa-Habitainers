using AutoMapper;
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
        private readonly IMapper _mapper;

        public AnimalManager(IRepositoryManager manager, IMapper mapper)
        {
            _manager = manager;
            _mapper = mapper;

        }

        public async Task<IEnumerable<Animal>> GetAllAnimalsAsync(bool trackChanges)
        {
            return await _manager
                .AnimalRepository
                .GetAllAnimalsAsync(trackChanges);
        }

        public async Task<Animal> GetOneAnimalByIdAsync(int id, bool trackChanges)
        {

            var animal = await _manager
                .AnimalRepository
                .GetOneAnimalByIdAsync(id, trackChanges);

            if (animal is null)
                throw new ArgumentNullException(nameof(animal), "Animal cannot be null.");
            return animal;
        }

        /* public async Task UpdateOneAnimalAsync(int id, AnimalDtoForUpdate animalDtoForUpdate, bool trackChanges)
        {
            // check entity
            var entity = await _manager.AnimalRepository.GetOneAnimalByIdAsync(id, trackChanges);

            if (entity is null)
                throw new ArgumentException("Animal not found.", nameof(id));

            entity = _mapper.Map<Animal>(animalDtoForUpdate);

            _manager.AnimalRepository.Update(entity);
            await _manager.SaveAsync();
        } */

        public async Task UpdateOneAnimalAsync(int id, AnimalDtoForUpdate animalDtoForUpdate, bool trackChanges)
        {
            // check entity
            var entity = await _manager.AnimalRepository.GetOneAnimalByIdAsync(id, trackChanges);

            if (entity is null)
                throw new ArgumentException("Animal not found.", nameof(id));

            _mapper.Map(animalDtoForUpdate, entity);

            _manager.AnimalRepository.Update(entity);
            await _manager.SaveAsync();

        }

        public async Task DeleteOneAnimalAsync(int id, bool trackChanges)
        {
            // check entity 
            var animal = await _manager.AnimalRepository.GetOneAnimalByIdAsync(id, trackChanges);

            if (animal is null)
                throw new ArgumentNullException(nameof(animal), "Animal cannot be null.");

            _manager.AnimalRepository.DeleteOneAnimal(animal);
            await _manager.SaveAsync();
        }

        public async Task<AnimalDto> CreateOneAnimalAsync(AnimalDtoForInsertion animalDtoForInsertion)
        {
            var entity = _mapper.Map<Animal>(animalDtoForInsertion);
            _manager.AnimalRepository.CreateOneAnimal(entity);
            await _manager.SaveAsync();
            return _mapper.Map<AnimalDto>(entity);
        }


    }

}