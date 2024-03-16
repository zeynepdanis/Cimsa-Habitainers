using DogaKahramanlari.Server.Repositories.Contracts;

namespace DogaKahramanlari.Server.Repositories
{
    public class RepositoryManager : IRepositoryManager
    {

        private readonly RepositoryContext _context;
        private readonly Lazy<IAnimalRepository> _animalRepository;

        public RepositoryManager(RepositoryContext context)
        {
            _context = context;
            _animalRepository = new Lazy<IAnimalRepository>(() => new AnimalRepository(_context));
        }
        public IAnimalRepository AnimalRepository => _animalRepository.Value;

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
