namespace DogaKahramanlari.Server.Utilities.DataTransferObjects
{
    public class DutyDtoForUpdate
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public byte DutyStatus { get; set; }
        public byte DateStatus { get; set; }
    }
}
