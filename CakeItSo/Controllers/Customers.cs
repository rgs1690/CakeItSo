using CakeItSo.Models;
using CakeItSo.Repos;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CakeItSo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Customers : Controller
    {

        private readonly ICustomerRepo _customerRepo;
        public Customers(ICustomerRepo customerRepo)
        {
            _customerRepo = customerRepo;
        }

        // GET: api/<Customers>
        [HttpGet]
        public IActionResult GetAllCustomers()
        {
            List<Customer> customers = _customerRepo.GetAllCustomers();
            if (customers == null) return NotFound();
            return Ok(customers);
        }

        // GET api/<Customers>/5
        [HttpGet("{id}")]
        public IActionResult GetCustomerById(int id)
        {
           var match = _customerRepo.GetCustomerById(id);
           
            if (match ==  null)
            {
                return NotFound();
            }
            return Ok(match);
        }

        // GET api/<Customers>/user/id
        [HttpGet("user/{userId}")]
        public IActionResult GetCustomerByUserId(string userId)
        {
            var matches = _customerRepo.GetCustomersByUserId(userId);
            if (matches == null)
            {
                return NotFound();
            }
            return Ok(matches);
        }



        // POST api/<Customers>
        [HttpPost]
        public IActionResult CreateCustomer(Customer newCustomer)
        {
            if (newCustomer == null)
            {
                return NotFound();
            }
            else
            {
                _customerRepo.CreateCustomer(newCustomer);
                return Ok(newCustomer);
            }
        }

        // PUT api/<Customers>/5
        [HttpPut("{id}")]
        public IActionResult UpdateCustomer(Customer customer)
        {
            int id = customer.id;
            var match = _customerRepo.GetCustomerById(id);

            if ( match == null)
            {
                return NotFound();
            }
            else
            {
                _customerRepo.UpdateCustomer(customer);
                return Ok(customer);
            }

        }


    }
}
