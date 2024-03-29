﻿using System.ComponentModel.DataAnnotations;

namespace DogaKahramanlari.Server.Utilities.DataTransferObjects
{
    public record UserForRegistrationDto
    {
        public string? FirstName { get; init; }
        public string? LastName { get; init; }

        [Required(ErrorMessage = "Username is required.")]
        public string? UserName { get; init; }

        [Required(ErrorMessage = "Password is required.")]
        public string? Password { get; init; }
        public ICollection<string>? Roles { get; init; }

    }
}
