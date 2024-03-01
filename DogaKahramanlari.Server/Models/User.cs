using Microsoft.AspNetCore.Identity;

namespace DogaKahramanlari.Server.Models
{
    public class User : IdentityUser
    {
        public String? FirstName { get; set; }
        public string? LastName { get; set;}
        public String? RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }
    }
}
