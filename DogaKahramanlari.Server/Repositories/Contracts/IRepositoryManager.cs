namespace DogaKahramanlari.Server.Repositories.Contracts
{
    public interface IRepositoryManager
    {
        IAnimalRepository AnimalRepository { get; }
        IUserKeyRepository UserKeyRepository { get; }
        IDutyRepository DutyRepository { get; }
        Task SaveAsync();
    }
}