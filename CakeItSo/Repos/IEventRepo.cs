
using CakeItSo.Models;
namespace CakeItSo.Repos
{
    public interface IEventRepo
    {
        public List<Event> GetAllEvents();
        public Event GetEventById(int id);
        public void CreateEvent(Event newEvent);
        public void DeleteEvent(int id);
        public void UpdateEvent(Event eventToUpdate);
        public List<Event> GetEventsByUserId(string userId);
        public List<Event> GetEventsByCustomerId(int customerId);
        public List<Event> GetEventsByCakeId(int cakeId);

    }
}