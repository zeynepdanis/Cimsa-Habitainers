using DogaKahramanlari.Server.Services.Contracts;
using DogaKahramanlari.Server.Utilities.DataTransferObjects;
using Microsoft.AspNetCore.Mvc;

namespace DogaKahramanlari.Server.Controllers
{
    [ApiController]
    [Route("api/duties")]
    public class DutiesController : ControllerBase
    {
        private readonly IServiceManager _services;
        public DutiesController(IServiceManager services)
        {
            _services = services;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllDutiesAsync()
        {
            return Ok(await _services
                .DutyService
                .GetAllDutiesAsync(false));
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetAllDutiesAsync([FromRoute] int id)
        {
            return Ok(await _services
                .DutyService
                .GetOneDutyByIdAsync(id, false));
        }
        [HttpPost]
        public async Task<IActionResult> CreateOneDutyAsync([FromBody] DutyDtoForInsertion dutyDto)
        {
            if (dutyDto is null)
                return BadRequest(); // 400 

            if (!ModelState.IsValid)
                return UnprocessableEntity(ModelState);
            var duty = await _services.DutyService.CreateOneDutyAsync(dutyDto);

            return StatusCode(201, duty); // CreatedAtRoute()
        }



        [HttpPut("{id:int}")]

        public async Task<IActionResult> UpdateOneDutyAsync([FromRoute(Name = "id")] int id,
            [FromBody] DutyDtoForUpdate dutyDto)
        {
            if (dutyDto is null)
                return BadRequest(); // 400 

            if (!ModelState.IsValid)
                return UnprocessableEntity(ModelState);

            await _services.DutyService.UpdateOneDutyAsync(id, dutyDto, false);
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteOneDutyAsync([FromRoute(Name = "id")] int id)
        {
            await _services.DutyService.DeleteOneDutyAsync(id, false);
            return NoContent();
        }


    }
}
