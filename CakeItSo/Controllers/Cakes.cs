using CakeItSo.Models;
using CakeItSo.Repos;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CakeItSo.Controllers
{
    
[Route("api/[controller]")]
[ApiController]
public class Cakes : Controller
{

    private readonly ICakeRepo _cakeRepo;
    public Cakes(ICakeRepo cakeRepo)
    {
        _cakeRepo = cakeRepo;
    }

    // GET: api/<Cakes>
    [HttpGet]
    public IActionResult GetAllCustomers()
    {
        List<Cake> cakes = _cakeRepo.GetAllCakes();
        if (cakes == null) return NotFound();
        return Ok(cakes);
    }

    // GET api/<Cakes>/5
    [HttpGet("{id}")]
    public IActionResult GetCakeById(int id)
    {
        var match = _cakeRepo.GetCakeById(id);

        if (match == null)
        {
            return NotFound();
        }
        return Ok(match);
    }

    // GET api/<Cakes>/user/id
    [HttpGet("user/{userId}")]
    public IActionResult GetCakesByUserId(string userId)
    {
        var matches = _cakeRepo.GetCakesByUserId(userId);
        if (matches == null)
        {
            return NotFound();
        }
        return Ok(matches);
    }
    // GET api/<Cakes>/customer/id
    [HttpGet("customer/{customerId}")]
    public IActionResult GetCakesByCustomerId(int customerId)
    {
        var matches = _cakeRepo.GetCakesByCustomerId(customerId);
        if (matches == null)
        {
            return NotFound();
        }
        return Ok(matches);
    }

    // POST api/<Cakes>
    [HttpPost]
    public IActionResult CreateCake(Cake newCake)
    {
        if (newCake == null)
        {
            return NotFound();
        }
        else
        {
            _cakeRepo.CreateNewCake(newCake);
            return Ok(newCake);
        }
    }

    // PUT api/<Cakes>/5
    [HttpPut("{id}")]
    public IActionResult UpdateCake(Cake cake)
    {
        int id = cake.id;
        var match = _cakeRepo.GetCakeById(id);

        if (match == null)
        {
            return NotFound();
        }
        else
        {
            _cakeRepo.UpdateCake(cake);
            return Ok(cake);
        }

    }

    [HttpDelete("{id}")]
    public void DeleteCake(int id)
    {
        _cakeRepo.DeleteCake(id);
    }

    [HttpGet("singleCake/{customerId}")]
    public IActionResult GetSingleCakeByCustomerId(int customerId)
    {
        var match = _cakeRepo.GetSingleCakeByCustomerId(customerId);

        if (match == null)
        {
            return NotFound();
        }
        return Ok(match);
    }
}

}