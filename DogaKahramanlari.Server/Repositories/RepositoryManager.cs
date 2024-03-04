using DogaKahramanlari.Server.Repositories.Contracts;

namespace DogaKahramanlari.Server.Repositories
{
    public class RepositoryManager : IRepositoryManager
    {

        private readonly RepositoryContext _context;

        public RepositoryManager(RepositoryContext context)
        {
            _context = context;
        }


        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
