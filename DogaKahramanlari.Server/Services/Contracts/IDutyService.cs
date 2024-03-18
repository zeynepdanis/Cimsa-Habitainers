using DogaKahramanlari.Server.Models;
using DogaKahramanlari.Server.Utilities.DataTransferObjects;

namespace DogaKahramanlari.Server.Services.Contracts
{
    public interface IDutyService
    {
        Task<IEnumerable<Duty>> GetAllDutiesAsync(bool trackChanges);
        Task<Duty> GetOneDutyByIdAsync(int id, bool trackChanges);

        Task<DutyDto> CreateOneDutyAsync(DutyDtoForInsertion dutyDtoForInsertion);

        Task UpdateOneDutyAsync(int id, DutyDtoForUpdate dutyDtoForUpdate, bool trackChanges);

        Task DeleteOneDutyAsync(int id, bool trackChanges);
    }
}
