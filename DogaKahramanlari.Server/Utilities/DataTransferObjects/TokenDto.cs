namespace DogaKahramanlari.Server.Utilities.DataTransferObjects
{
    public record TokenDto
    {
        public String AccessToken { get; init; }
        public String RefreshToken { get; init; }

        public string UserId { get; init; }
        public string? FirstName { get; init; }
        public string? LastName { get; init; }
        public string UserName { get; init; }
        public ICollection<string>? Roles { get; init; }

    }
}
