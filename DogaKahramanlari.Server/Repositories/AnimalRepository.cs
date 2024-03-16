using DogaKahramanlari.Server.Models;
using DogaKahramanlari.Server.Repositories.Contracts;
using Microsoft.EntityFrameworkCore;

namespace DogaKahramanlari.Server.Repositories
{
    public class AnimalRepository : RepositoryBase<Animal>, IAnimalRepository
    {
        public AnimalRepository(RepositoryContext context) : base(context)
        {

        }

        public async Task<IEnumerable<Animal>> GetAllAnimalsAsync(bool trackChanges) =>
             await FindAll(trackChanges)
                .ToListAsync();

        public async Task<Animal> GetOneAnimalByIdAsync(int id, bool trackChanges) =>
            await FindByCondition(c => c.Id.Equals(id), trackChanges)
                .SingleOrDefaultAsync();

        public void CreateOneAnimal(Animal animal) => Create(animal);
        public void DeleteOneAnimal(Animal animal) => Delete(animal);
        public void UpdateOneAnimal(Animal animal)=>Update(animal);
    }
        


}

