namespace DogaKahramanlari.Server.Repositories.Contracts
{
    public interface IRepositoryManager
    {
        IAnimalRepository AnimalRepository { get; }
        IUserKeyRepository UserKeyRepository { get; }
        Task SaveAsync();
    }
}
