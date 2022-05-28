using Microsoft.AspNetCore.Mvc;
using CakeItSo.Models;
using CakeItSo.Repos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;

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
    
        [Authorize]
        [HttpGet("Auth")]
        public async Task<IActionResult> GetUserAuthStatus()
        {
            string userId = User.FindFirst(claim => claim.Type == "user_id").Value;
            bool userexists = _userRepo.CheckUserExists(userId);
            if (!userexists)
            {
                User userFromToken = new User()
                {
                    
                    id = userId,
                   
                };

                _userRepo.CreateUser(userFromToken);
                return Ok();
            }
            User existingUser = _userRepo.GetUserById(userId);
            return Ok(existingUser);
        }

    }
}
