using Microsoft.AspNetCore.Mvc;
using CakeItSo.Repos;
using CakeItSo.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CakeItSo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Events : Controller
    {

        private readonly IEventRepo _eventRepo;
        public Events(IEventRepo eventRepo)
        {
            _eventRepo = eventRepo;
        }

        // GET: api/<Events>
        [HttpGet]
        public IActionResult GetAllEvents()
        {
            List<Event> events = _eventRepo.GetAllEvents();
            if (events == null) return NotFound();
            return Ok(events);
        }

        // GET api/<Events>/5
        [HttpGet("{id}")]
        public IActionResult GetEventById(int id)
        {
            var match = _eventRepo.GetEventById(id);

            if (match == null)
            {
                return NotFound();
            }
            return Ok(match);
        }

        // GET api/<Events>/user/id
        [HttpGet("user/{userId}")]
        public IActionResult GetEventsByUserId(string userId)
        {
            var matches = _eventRepo.GetEventsByUserId(userId);
            if (matches == null)
            {
                return NotFound();
            }
            return Ok(matches);
        }
        // GET api/<Events>/customer/id
        [HttpGet("customer/{customerId}")]
        public IActionResult GetEventsByCustomerId(int customerId)
        {
            var matches = _eventRepo.GetEventsByCustomerId(customerId);
            if (matches == null)
            {
                return NotFound();
            }
            return Ok(matches);
        }
        // GET api/<Events>/cake/id
        [HttpGet("cake/{cakeId}")]
        public IActionResult GetEventsByCakeId(int cakeId)
        {
            var matches = _eventRepo.GetEventsByCakeId(cakeId);
            if (matches == null)
            {
                return NotFound();
            }
            return Ok(matches);
        }

        // POST api/<Events>
        [HttpPost]
        public IActionResult CreateEvent(Event newEvent)
        {
            if (newEvent == null)
            {
                return NotFound();
            }
            else
            {
                _eventRepo.CreateEvent(newEvent);
                return Ok(newEvent);
            }
        }

        // PUT api/<Events>/5
        [HttpPut("{id}")]
        public IActionResult UpdateEvent(Event selectedEvent)
        {
            int id = selectedEvent.id;
            var match = _eventRepo.GetEventById(id);

            if (match == null)
            {
                return NotFound();
            }
            else
            {
                _eventRepo.UpdateEvent(selectedEvent);
                return Ok(selectedEvent);
            }

        }

        [HttpDelete("{id}")]
        public void DeleteEvent(int id)
        {
            _eventRepo.DeleteEvent(id);
        }

        [HttpGet("singleEvent/{customerId}")]
        public IActionResult GetSingleCakeByCustomerId(int customerId)
        {
            var match = _eventRepo.GetSingleEventByCustomerId(customerId);

            if (match == null)
            {
                return NotFound();
            }
            return Ok(match);
        }
    }
}
