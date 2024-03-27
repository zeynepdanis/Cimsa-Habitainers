using AutoMapper;
using DogaKahramanlari.Server.Models;
using DogaKahramanlari.Server.Repositories.Contracts;
using DogaKahramanlari.Server.Services.Contracts;
using DogaKahramanlari.Server.Utilities.DataTransferObjects;

namespace DogaKahramanlari.Server.Services
{
    public class DutyManager : IDutyService
    {
        private readonly IRepositoryManager _manager;
        private readonly IMapper _mapper;

        public DutyManager(IRepositoryManager manager, IMapper mapper)
        {
            _manager = manager;
            _mapper = mapper;

        }

        public async Task<IEnumerable<Duty>> GetAllDutiesAsync(bool trackChanges)
        {
            return await _manager
                .DutyRepository
                .GetAllDutiesAsync(trackChanges);
        }

        public async Task<Duty> GetOneDutyByIdAsync(int id, bool trackChanges)
        {

            var duty = await _manager
                .DutyRepository
                .GetOneDutyByIdAsync(id, trackChanges);

            if (duty is null)
                throw new ArgumentNullException(nameof(duty), "Duty cannot be null.");
            return duty;
        }

        public async Task UpdateOneDutyAsync(int id, DutyDtoForUpdate dutyDtoForUpdate, bool trackChanges)
        {
            // check entity
            var entity = await _manager.DutyRepository.GetOneDutyByIdAsync(id, trackChanges);

            if (entity is null)
                throw new ArgumentException("Duty not found.", nameof(id));

            _mapper.Map(dutyDtoForUpdate, entity);

            _manager.DutyRepository.UpdateOneDuty(entity);
            await _manager.SaveAsync();

        }
        public async Task DeleteOneDutyAsync(int id, bool trackChanges)
        {
            // check entity 
            var duty = await _manager.DutyRepository.GetOneDutyByIdAsync(id, trackChanges);

            if (duty is null)
                throw new ArgumentNullException(nameof(duty), "Duty cannot be null.");

            _manager.DutyRepository.DeleteOneDuty(duty);
            await _manager.SaveAsync();
        }

        public async Task<DutyDto> CreateOneDutyAsync(DutyDtoForInsertion dutyDtoForInsertion)
        {
            var entity = _mapper.Map<Duty>(dutyDtoForInsertion);
            _manager.DutyRepository.CreateOneDuty(entity);
            await _manager.SaveAsync();
            return _mapper.Map<DutyDto>(entity);
        }
    }
}
