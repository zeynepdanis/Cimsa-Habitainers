using DogaKahramanlari.Server.Services.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace DogaKahramanlari.Server.Controllers
{
    [ApiController]
    [Route("api/animals")]
    public class AnimalsController : ControllerBase
    {
        private readonly IServiceManager _services;
        public AnimalsController(IServiceManager services)
        {
            _services = services;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllAnimalsAsync()
        {
            return Ok(await _services
                .AnimalService
                .GetAllAnimalsAsync(false));
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetAllAnimalsAsync([FromRoute] int id)
        {
            return Ok(await _services
                .AnimalService
                .GetOneAnimalByIdAsync(id, false));
        }


    }
}
