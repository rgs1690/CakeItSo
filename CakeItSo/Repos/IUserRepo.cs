
using CakeItSo.Models;
using Microsoft.Data.SqlClient;

namespace CakeItSo.Repos
{
    public interface IUserRepo
    {
        public void CreateUser(User user);
        public User GetUserById(string id);
        public bool CheckUserExists(string id);
    }
}
