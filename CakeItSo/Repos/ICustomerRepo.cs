using CakeItSo.Models;

namespace CakeItSo.Repos
{
    public interface ICustomerRepo
    {
        public List<Customer> GetAllCustomers();
        public Customer GetCustomerById(int id);
        public List<Customer> GetCustomersByUserId(string userId);
        public void CreateCustomer(Customer customer);
        public void UpdateCustomer(Customer customer);
        public void DeleteCustomer(int id);
    }
}