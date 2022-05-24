using CakeItSo.Models;
namespace CakeItSo.Repos
{
    public interface ICakeRepo
    {
        public List<Cake> GetAllCakes();
        public Cake GetCakeById(int id);
        public List<Cake> GetCakesByUserId(string userId);
        public List<Cake> GetCakesByCustomerId(int customerId);
        public void CreateNewCake(Cake cake);
        public void UpdateCake(Cake cake);
        public void DeleteCake(int id);
    }
}
