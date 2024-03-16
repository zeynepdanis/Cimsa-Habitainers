namespace DogaKahramanlari.Server.Repositories.Contracts
{
    public interface IRepositoryManager
    {
        IAnimalRepository AnimalRepository { get; }
        Task SaveAsync();
    }
}
