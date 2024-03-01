using Microsoft.AspNetCore.Identity;

namespace DogaKahramanlari.Server.Models
{
    public class User : IdentityUser
    {
        public String? FirstName { get; set; }
        public string? LastName { get; set;}
    }
}
