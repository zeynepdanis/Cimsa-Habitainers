using DogaKahramanlari.Server.Repositories.Contracts;

namespace DogaKahramanlari.Server.Repositories
{
    public class RepositoryManager : IRepositoryManager
    {

        private readonly RepositoryContext _context;
        private readonly Lazy<IAnimalRepository> _animalRepository;
        private readonly Lazy<IUserKeyRepository> _userKeyRepository;


        public RepositoryManager(RepositoryContext context)
        {
            _context = context;
            _animalRepository = new Lazy<IAnimalRepository>(() => new AnimalRepository(_context));
            _userKeyRepository = new Lazy<IUserKeyRepository>(() => new UserKeyRepository(_context));

        }
        public IAnimalRepository AnimalRepository => _animalRepository.Value;
        public IUserKeyRepository UserKeyRepository => _userKeyRepository.Value;


        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
