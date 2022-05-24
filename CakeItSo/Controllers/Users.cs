using Microsoft.AspNetCore.Mvc;
using CakeItSo.Models;
using CakeItSo.Repos;

namespace CakeItSo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Users : Controller
    {
        private readonly IUserRepo _userRepo;

        public Users(IUserRepo userRepo)
        {
            _userRepo = userRepo;
        }

        // POST api/<Users>
        [HttpPost]
        public IActionResult CreateUser(User user)
        {
            if (user == null)
            {
                return NotFound();
            }
            else
            {
                _userRepo.CreateUser(user);
                return Ok(user);
            }
        }

    }
}
