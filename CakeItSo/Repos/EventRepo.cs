using CakeItSo.Models;
using Microsoft.Data.SqlClient;

namespace CakeItSo.Repos
{
    public class EventRepo : IEventRepo
    {
        private readonly IConfiguration _config;

        public EventRepo(IConfiguration config)
        {
            _config = config;
        }

        public SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            }
        }
        public List<Event> GetAllEvents()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      SELECT 
                                      id, [name], userId, customerId, cakeId, typeOfEvent, venu, venuPhone, venuAddress, date, time, miles,pricePerMile, notes, totalPrice
                                      FROM Event
                                      ";
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Event> events = new List<Event>();
                    while (reader.Read())
                    {
                        Event newEvent = new Event()
                        {
                            id = reader.GetInt32(reader.GetOrdinal("id")),
                            name = reader.GetString(reader.GetOrdinal("name")),
                            userId = reader.GetString(reader.GetOrdinal("userId")),
                            customerId = reader.GetInt32(reader.GetOrdinal("customerId")),
                            cakeId = reader.GetInt32(reader.GetOrdinal("cakeId")),
                            typeOfEvent = reader.GetString(reader.GetOrdinal("typeOfEvent")),
                            venu = reader.GetString(reader.GetOrdinal("venu")),
                            venuPhone = reader.GetString(reader.GetOrdinal("venuPhone")),
                            venuAddress = reader.GetString(reader.GetOrdinal("venuAddress")),
                            date = reader.GetString(reader.GetOrdinal("date")),
                            time = reader.GetString(reader.GetOrdinal("time")),
                            miles = reader.GetInt32(reader.GetOrdinal("miles")),
                            pricePerMile = reader.GetDecimal(reader.GetOrdinal("pricePerMile")),
                            notes = reader.GetString(reader.GetOrdinal("notes")),
                            totalPrice = reader.GetDecimal(reader.GetOrdinal("totalPrice")),
                        };

                        events.Add(newEvent);
                    }
                    reader.Close();

                    return events;
                }
            }
        }
        public Event GetEventById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       SELECT 
                                      id, [name], userId, customerId, cakeId, typeOfEvent, venu, venuPhone, venuAddress, date, time, miles,pricePerMile, notes, totalPrice
                                      FROM Event
                                        WHERE Id = @Id
                                      ";

                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Event selectedEvent = new Event()
                        {
                            id = reader.GetInt32(reader.GetOrdinal("id")),
                            name = reader.GetString(reader.GetOrdinal("name")),
                            userId = reader.GetString(reader.GetOrdinal("userId")),
                            customerId = reader.GetInt32(reader.GetOrdinal("customerId")),
                            cakeId = reader.GetInt32(reader.GetOrdinal("cakeId")),
                            typeOfEvent = reader.GetString(reader.GetOrdinal("typeOfEvent")),
                            venu = reader.GetString(reader.GetOrdinal("venu")),
                            venuPhone = reader.GetString(reader.GetOrdinal("venuPhone")),
                            venuAddress = reader.GetString(reader.GetOrdinal("venuAddress")),
                            date = reader.GetString(reader.GetOrdinal("date")),
                            time = reader.GetString(reader.GetOrdinal("time")),
                            miles = reader.GetInt32(reader.GetOrdinal("miles")),
                            pricePerMile = reader.GetDecimal(reader.GetOrdinal("pricePerMile")),
                            notes = reader.GetString(reader.GetOrdinal("notes")),
                            totalPrice = reader.GetDecimal(reader.GetOrdinal("totalPrice")),
                        };

                        reader.Close();
                        return selectedEvent;
                    }
                    reader.Close();
                    return null;
                }
            }

        }
        public List<Event> GetEventsByUserId(string userId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
			                       SELECT 
                                      id, [name], userId, customerId, cakeId, typeOfEvent, venu, venuPhone, venuAddress, date, time, miles,pricePerMile, notes, totalPrice
                                      FROM Event
                                    WHERE UserId = @userId
			";
                    cmd.Parameters.AddWithValue("@userId", userId);
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Event> events = new List<Event>();
                    while (reader.Read())
                    {
                        Event selectedEvent = new Event()
                        {
                            id = reader.GetInt32(reader.GetOrdinal("id")),
                            name = reader.GetString(reader.GetOrdinal("name")),
                            userId = reader.GetString(reader.GetOrdinal("userId")),
                            customerId = reader.GetInt32(reader.GetOrdinal("customerId")),
                            cakeId = reader.GetInt32(reader.GetOrdinal("cakeId")),
                            typeOfEvent = reader.GetString(reader.GetOrdinal("typeOfEvent")),
                            venu = reader.GetString(reader.GetOrdinal("venu")),
                            venuPhone = reader.GetString(reader.GetOrdinal("venuPhone")),
                            venuAddress = reader.GetString(reader.GetOrdinal("venuAddress")),
                            date = reader.GetString(reader.GetOrdinal("date")),
                            time = reader.GetString(reader.GetOrdinal("time")),
                            miles = reader.GetInt32(reader.GetOrdinal("miles")),
                            pricePerMile = reader.GetDecimal(reader.GetOrdinal("pricePerMile")),
                            notes = reader.GetString(reader.GetOrdinal("notes")),
                            totalPrice = reader.GetDecimal(reader.GetOrdinal("totalPrice")),
                        };
                        events.Add(selectedEvent);
                    }
                    reader.Close();
                    return events;
                }
            }

        }
        public List<Event> GetEventsByCustomerId(int customerId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
			                       SELECT 
                                      id, [name], userId, customerId, cakeId, typeOfEvent, venu, venuPhone, venuAddress, date, time, miles,pricePerMile, notes, totalPrice
                                      FROM Event
                                    WHERE customerId = @customerId
			";
                    cmd.Parameters.AddWithValue("@customerId", customerId);
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Event> events = new List<Event>();
                    while (reader.Read())
                    {
                        Event selectedEvent = new Event()
                        {
                            id = reader.GetInt32(reader.GetOrdinal("id")),
                            name = reader.GetString(reader.GetOrdinal("name")),
                            userId = reader.GetString(reader.GetOrdinal("userId")),
                            customerId = reader.GetInt32(reader.GetOrdinal("customerId")),
                            cakeId = reader.GetInt32(reader.GetOrdinal("cakeId")),
                            typeOfEvent = reader.GetString(reader.GetOrdinal("typeOfEvent")),
                            venu = reader.GetString(reader.GetOrdinal("venu")),
                            venuPhone = reader.GetString(reader.GetOrdinal("venuPhone")),
                            venuAddress = reader.GetString(reader.GetOrdinal("venuAddress")),
                            date = reader.GetString(reader.GetOrdinal("date")),
                            time = reader.GetString(reader.GetOrdinal("time")),
                            miles = reader.GetInt32(reader.GetOrdinal("miles")),
                            pricePerMile = reader.GetDecimal(reader.GetOrdinal("pricePerMile")),
                            notes = reader.GetString(reader.GetOrdinal("notes")),
                            totalPrice = reader.GetDecimal(reader.GetOrdinal("totalPrice")),
                        };
                        events.Add(selectedEvent);
                    }
                    reader.Close();
                    return events;
                }
            }

        }
        public List<Event> GetEventsByCakeId(int cakeId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
			                       SELECT 
                                      id, [name], userId, customerId, cakeId, typeOfEvent, venu, venuPhone, venuAddress, date, time, miles,pricePerMile, notes, totalPrice
                                      FROM Event
                                    WHERE cakeId = @cakeId
			";
                    cmd.Parameters.AddWithValue("@cakeId", cakeId);
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Event> events = new List<Event>();
                    while (reader.Read())
                    {
                        Event selectedEvent = new Event()
                        {
                            id = reader.GetInt32(reader.GetOrdinal("id")),
                            name = reader.GetString(reader.GetOrdinal("name")),
                            userId = reader.GetString(reader.GetOrdinal("userId")),
                            customerId = reader.GetInt32(reader.GetOrdinal("customerId")),
                            cakeId = reader.GetInt32(reader.GetOrdinal("cakeId")),
                            typeOfEvent = reader.GetString(reader.GetOrdinal("typeOfEvent")),
                            venu = reader.GetString(reader.GetOrdinal("venu")),
                            venuPhone = reader.GetString(reader.GetOrdinal("venuPhone")),
                            venuAddress = reader.GetString(reader.GetOrdinal("venuAddress")),
                            date = reader.GetString(reader.GetOrdinal("date")),
                            time = reader.GetString(reader.GetOrdinal("time")),
                            miles = reader.GetInt32(reader.GetOrdinal("miles")),
                            pricePerMile = reader.GetDecimal(reader.GetOrdinal("pricePerMile")),
                            notes = reader.GetString(reader.GetOrdinal("notes")),
                            totalPrice = reader.GetDecimal(reader.GetOrdinal("totalPrice")),
                        };
                        events.Add(selectedEvent);
                    }
                    reader.Close();
                    return events;
                }
            }

        }

        public void CreateEvent(Event newEvent)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                   INSERT INTO Event ([name], userId, customerId, cakeId, typeOfEvent, venu, venuPhone, venuAddress, date, time, miles,pricePerMile, notes, totalPrice)
                    OUTPUT INSERTED.ID
                    VALUES (@name, @userId, @customerId, @cakeId, @typeOfEvent, @venu, @venuPhone, @venuAddress, @date, @time, @miles,@pricePerMile, @notes, @totalPrice);
                    ";

                    cmd.Parameters.AddWithValue("@userId", newEvent.userId);
                    cmd.Parameters.AddWithValue("@name", newEvent.name);
                    cmd.Parameters.AddWithValue("@customerId", newEvent.customerId);
                    cmd.Parameters.AddWithValue("@cakeId", newEvent.cakeId);
                    cmd.Parameters.AddWithValue("@typeOfEvent", newEvent.typeOfEvent);
                    cmd.Parameters.AddWithValue("@venu", newEvent.venu);
                    cmd.Parameters.AddWithValue("@venuPhone", newEvent.venuPhone);
                    cmd.Parameters.AddWithValue("@venuAddress", newEvent.venuAddress);
                    cmd.Parameters.AddWithValue("@date", newEvent.date);
                    cmd.Parameters.AddWithValue("@time", newEvent.time);
                    cmd.Parameters.AddWithValue("@miles", newEvent.miles);
                    cmd.Parameters.AddWithValue("@pricePerMile", newEvent.pricePerMile);
                    cmd.Parameters.AddWithValue("@notes", newEvent.notes);
                    cmd.Parameters.AddWithValue("@totalPrice", newEvent.totalPrice);
                    int id = (int)cmd.ExecuteScalar();

                    newEvent.id = id;
                }
            }
        }
        public void UpdateEvent(Event newEvent)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    UPDATE Event
                    SET
                       [name] = @name, 
                       userId = @userId, 
                       customerId = @customerId, 
                       cakeId = @cakeId, 
                       typeOfEvent = @typeOfEvent, 
                        venu = @venu, 
                        venuPhone = @venuPhone, 
                        venuAddress = @venuAddress, 
                        date = @date, 
                        time = @time, 
                        miles = @miles,
                        pricePerMile = @pricePerMile, 
                        notes = @notes, 
                        totalPrice = @totalPrice
                    WHERE id = @id;
                    ";
                    cmd.Parameters.AddWithValue("@id", newEvent.id);
                    cmd.Parameters.AddWithValue("@userId", newEvent.userId);
                    cmd.Parameters.AddWithValue("@name", newEvent.name);
                    cmd.Parameters.AddWithValue("@customerId", newEvent.customerId);
                    cmd.Parameters.AddWithValue("@cakeId", newEvent.cakeId);
                    cmd.Parameters.AddWithValue("@typeOfEvent", newEvent.typeOfEvent);
                    cmd.Parameters.AddWithValue("@venu", newEvent.venu);
                    cmd.Parameters.AddWithValue("@venuPhone", newEvent.venuPhone);
                    cmd.Parameters.AddWithValue("@venuAddress", newEvent.venuAddress);
                    cmd.Parameters.AddWithValue("@date", newEvent.date);
                    cmd.Parameters.AddWithValue("@time", newEvent.time);
                    cmd.Parameters.AddWithValue("@miles", newEvent.miles);
                    cmd.Parameters.AddWithValue("@pricePerMile", newEvent.pricePerMile);
                    cmd.Parameters.AddWithValue("@notes", newEvent.notes);
                    cmd.Parameters.AddWithValue("@totalPrice", newEvent.totalPrice);

                    cmd.ExecuteNonQuery();
                }
            }
        }
        public void DeleteEvent(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
				DELETE FROM Event
				WHERE Id = @id
				";
                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }

            }
        }


    }
}