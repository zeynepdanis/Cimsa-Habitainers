using DogaKahramanlari.Server.Models;

namespace DogaKahramanlari.Server.Repositories.Contracts
{
    public interface IDutyRepository
    {
        Task<IEnumerable<Duty>> GetAllDutiesAsync(bool trackChanges);
        Task<Duty> GetOneDutyByIdAsync(int id, bool trackChanges);
        void CreateOneDuty(Duty duty);
        void UpdateOneDuty(Duty duty);
        void DeleteOneDuty(Duty duty);
    }
}
