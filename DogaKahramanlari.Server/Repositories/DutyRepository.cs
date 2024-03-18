using DogaKahramanlari.Server.Models;
using DogaKahramanlari.Server.Repositories.Contracts;
using Microsoft.EntityFrameworkCore;

namespace DogaKahramanlari.Server.Repositories
{
    public class DutyRepository :RepositoryBase<Duty>, IDutyRepository
    {
        public DutyRepository(RepositoryContext context) : base(context)
        {

        }

        public async Task<IEnumerable<Duty>> GetAllDutiesAsync(bool trackChanges) =>
             await FindAll(trackChanges)
                .ToListAsync();

        public async Task<Duty> GetOneDutyByIdAsync(int id, bool trackChanges) =>
            await FindByCondition(c => c.Id.Equals(id), trackChanges)
                .SingleOrDefaultAsync();

        public void CreateOneDuty(Duty duty) => Create(duty);
        public void UpdateOneDuty(Duty duty) => Update(duty);
        public void DeleteOneDuty(Duty duty) => Delete(duty);
    }
}
