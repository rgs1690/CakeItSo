using CakeItSo.Models;
using Microsoft.Data.SqlClient;

namespace CakeItSo.Repos
{
    public class CakeRepo : ICakeRepo
    {
        private readonly IConfiguration _config;

        public CakeRepo(IConfiguration config)
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
        public List<Cake> GetAllCakes()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      SELECT 
                                       id, [name], customerId, recipe, userId, foodCostPerServing, numOfGuests, decorTime, bakeTime, wagePerHour, supplyCost, refImage, totalCost
                                      FROM Cake
                                      ";
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Cake> cakes = new List<Cake>();
                    while (reader.Read())
                    {
                        Cake cake = new Cake()
                        {
                            id = reader.GetInt32(reader.GetOrdinal("id")),
                            name = reader.GetString(reader.GetOrdinal("name")),
                            customerId = reader.GetInt32(reader.GetOrdinal("customerId")),
                            userId = reader.GetString(reader.GetOrdinal("userId")),
                            recipe = reader.GetString(reader.GetOrdinal("recipe")),
                            foodCostPerServing = reader.GetDecimal(reader.GetOrdinal("foodCostPerServing")),
                            numOfGuests = reader.GetInt32(reader.GetOrdinal("numOfGuests")),
                            decorTime = reader.GetInt32(reader.GetOrdinal("decorTime")),
                            bakeTime = reader.GetInt32(reader.GetOrdinal("bakeTime")),
                            wagePerHour = reader.GetDecimal(reader.GetOrdinal("wagePerHour")),
                            supplyCost = reader.GetDecimal(reader.GetOrdinal("supplyCost")),
                            refImage = reader.GetString(reader.GetOrdinal("refImage")),
                            totalCost= reader.GetDecimal(reader.GetOrdinal("totalCost"))
                        };

                        cakes.Add(cake);
                    }
                    reader.Close();

                    return cakes;
                }
            }
        }
        public Cake GetCakeById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       SELECT 
                                        Cake.id AS CAKEId, Cake.[name] AS CAKEName, customerId, recipe, Cake.userId AS CakeUser, foodCostPerServing, numOfGuests, decorTime, bakeTime, wagePerHour, supplyCost, refImage, totalCost,  Customer.[name] AS customerName
                                      FROM Cake
                                      LEFT JOIN Customer ON Customer.id = Cake.customerId  
                                      WHERE Cake.Id = @Id
                                      ";
                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Cake cake = new Cake()
                        {

                            id = reader.GetInt32(reader.GetOrdinal("CakeId")),
                            name = reader.GetString(reader.GetOrdinal("CAKEName")),
                            customerId = reader.GetInt32(reader.GetOrdinal("customerId")),
                            userId = reader.GetString(reader.GetOrdinal("CakeUser")),
                            recipe = reader.GetString(reader.GetOrdinal("recipe")),
                            foodCostPerServing = reader.GetDecimal(reader.GetOrdinal("foodCostPerServing")),
                            numOfGuests = reader.GetInt32(reader.GetOrdinal("numOfGuests")),
                            decorTime = reader.GetInt32(reader.GetOrdinal("decorTime")),
                            bakeTime = reader.GetInt32(reader.GetOrdinal("bakeTime")),
                            wagePerHour = reader.GetDecimal(reader.GetOrdinal("wagePerHour")),
                            supplyCost = reader.GetDecimal(reader.GetOrdinal("supplyCost")),
                            refImage = reader.GetString(reader.GetOrdinal("refImage")),
                            totalCost = reader.GetDecimal(reader.GetOrdinal("totalCost")),
                            customerName = reader.GetString(reader.GetOrdinal("customerName"))
                        };

                        reader.Close();
                        return cake;
                    }
                    reader.Close();
                    return null;
                }
            }

        }
        public List<Cake> GetCakesByUserId(string userId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
			                        SELECT 
                                       Cake.id AS CAKEId, Cake.[name] AS CAKEName, customerId, recipe, Cake.userId AS CAKEuser, foodCostPerServing, numOfGuests, decorTime, bakeTime, wagePerHour, supplyCost, refImage, totalCost, Customer.[name] AS customerName
                                    FROM Cake
                                    LEFT JOIN Customer ON Customer.id = Cake.customerId  
                                    WHERE Cake.UserId = @userId
			";
                    cmd.Parameters.AddWithValue("@userId", userId);
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Cake> cakes = new List<Cake>();
                    while (reader.Read())
                    {
                        Cake cake = new Cake()
                        {
                            id = reader.GetInt32(reader.GetOrdinal("CAKEId")),
                            name = reader.GetString(reader.GetOrdinal("CAKEName")),
                            customerId = reader.GetInt32(reader.GetOrdinal("customerId")),
                            userId = reader.GetString(reader.GetOrdinal("Cakeuser")),
                            recipe = reader.GetString(reader.GetOrdinal("recipe")),
                            foodCostPerServing = reader.GetDecimal(reader.GetOrdinal("foodCostPerServing")),
                            numOfGuests = reader.GetInt32(reader.GetOrdinal("numOfGuests")),
                            decorTime = reader.GetInt32(reader.GetOrdinal("decorTime")),
                            bakeTime = reader.GetInt32(reader.GetOrdinal("bakeTime")),
                            wagePerHour = reader.GetDecimal(reader.GetOrdinal("wagePerHour")),
                            supplyCost = reader.GetDecimal(reader.GetOrdinal("supplyCost")),
                            refImage = reader.GetString(reader.GetOrdinal("refImage")),
                            totalCost = reader.GetDecimal(reader.GetOrdinal("totalCost")),
                            customerName = reader.GetString(reader.GetOrdinal("customerName"))
                        };
                        cakes.Add(cake);
                    }
                    reader.Close();
                    return cakes;
                }
            }

        }
        public List<Cake> GetCakesByCustomerId(int customerId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
			                        SELECT 
                                       id, [name], customerId, recipe, userId, foodCostPerServing, numOfGuests, decorTime, bakeTime, wagePerHour, supplyCost, refImage, totalCost
                                      FROM Cake
                                    WHERE customerId = @customerId
			";
                    cmd.Parameters.AddWithValue("@customerId", customerId);
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Cake> cakes = new List<Cake>();
                    while (reader.Read())
                    {
                        Cake cake = new Cake()
                        {
                            id = reader.GetInt32(reader.GetOrdinal("id")),
                            name = reader.GetString(reader.GetOrdinal("name")),
                            customerId = reader.GetInt32(reader.GetOrdinal("customerId")),
                            userId = reader.GetString(reader.GetOrdinal("userId")),
                            recipe = reader.GetString(reader.GetOrdinal("recipe")),
                            foodCostPerServing = reader.GetDecimal(reader.GetOrdinal("foodCostPerServing")),
                            numOfGuests = reader.GetInt32(reader.GetOrdinal("numOfGuests")),
                            decorTime = reader.GetInt32(reader.GetOrdinal("decorTime")),
                            bakeTime = reader.GetInt32(reader.GetOrdinal("bakeTime")),
                            wagePerHour = reader.GetDecimal(reader.GetOrdinal("wagePerHour")),
                            supplyCost = reader.GetDecimal(reader.GetOrdinal("supplyCost")),
                            refImage = reader.GetString(reader.GetOrdinal("refImage")),
                            totalCost = reader.GetDecimal(reader.GetOrdinal("totalCost")),
                        };
                        cakes.Add(cake);
                    }
                    reader.Close();
                    return cakes;
                }
            }

        }
        public void CreateNewCake(Cake cake)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                   INSERT INTO Cake ( [name], customerId, recipe, userId, foodCostPerServing, numOfGuests, decorTime, bakeTime, wagePerHour, supplyCost, refImage, totalCost)
                    OUTPUT INSERTED.ID
                    VALUES (@name, @customerId, @recipe, @userId, @foodCostPerServing, @numofGuests, @decorTime, @bakeTime, @wagePerHour, @supplyCost, @refImage, @totalCost);
                    ";

                    cmd.Parameters.AddWithValue("@userId", cake.userId);
                    cmd.Parameters.AddWithValue("@name", cake.name);
                    cmd.Parameters.AddWithValue("@customerId", cake.customerId);
                    cmd.Parameters.AddWithValue("@recipe", cake.recipe);
                    cmd.Parameters.AddWithValue("@foodCostPerServing", cake.foodCostPerServing);
                    cmd.Parameters.AddWithValue("@numOfGuests", cake.numOfGuests);
                    cmd.Parameters.AddWithValue("@decorTime", cake.decorTime);
                    cmd.Parameters.AddWithValue("@bakeTime", cake.bakeTime);
                    cmd.Parameters.AddWithValue("@wagePerHour", cake.wagePerHour);
                    cmd.Parameters.AddWithValue("@supplyCost", cake.supplyCost);
                    cmd.Parameters.AddWithValue("@refImage", cake.refImage);
                    cmd.Parameters.AddWithValue("@totalCost", cake.totalCost);

                    int id = (int)cmd.ExecuteScalar();

                    cake.id = id;
                }
            }
        }
        public void UpdateCake(Cake cake)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    UPDATE Cake
                    SET
                        [name] = @name,
                        customerId = @customerId,
                        recipe = @recipe,
                        userId = @userId,
                        foodCostPerServing = @foodCostPerServing, 
                        numOfGuests = @numOfGuests,
                        decorTime = @decorTime,
                        bakeTime = @bakeTime,
                        wagePerHour = @wagePerHour,
                        supplyCost = @supplyCost,
                        refImage = @refImage,
                        totalCost = @totalCost
                    WHERE id = @id;
                    ";
                    cmd.Parameters.AddWithValue("@id", cake.id);
                    cmd.Parameters.AddWithValue("@userId", cake.userId);
                    cmd.Parameters.AddWithValue("@name", cake.name);
                    cmd.Parameters.AddWithValue("@customerId", cake.customerId);
                    cmd.Parameters.AddWithValue("@recipe", cake.recipe);
                    cmd.Parameters.AddWithValue("@foodCostPerServing", cake.foodCostPerServing);
                    cmd.Parameters.AddWithValue("@numOfGuests", cake.numOfGuests);
                    cmd.Parameters.AddWithValue("@decorTime", cake.decorTime);
                    cmd.Parameters.AddWithValue("@bakeTime", cake.bakeTime);
                    cmd.Parameters.AddWithValue("@wagePerHour", cake.wagePerHour);
                    cmd.Parameters.AddWithValue("@supplyCost", cake.supplyCost);
                    cmd.Parameters.AddWithValue("@refImage", cake.refImage);
                    cmd.Parameters.AddWithValue("@totalCost", cake.totalCost);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteCake(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
				DELETE FROM Cake
				WHERE Id = @id
				";
                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }

            }
        }

        public Cake GetSingleCakeByCustomerId(int customerId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       SELECT 
                                        Cake.id AS CAKEId, Cake.[name] AS CAKEName, customerId, recipe, Cake.userId AS CakeUser, foodCostPerServing, numOfGuests, decorTime, bakeTime, wagePerHour, supplyCost, refImage, totalCost,  Customer.[name] AS customerName
                                      FROM Cake
                                      LEFT JOIN Customer ON Customer.id = Cake.customerId  
                                      WHERE Cake.customerId = @customerId
                                      ";
                    cmd.Parameters.AddWithValue("@customerId", customerId);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Cake cake = new Cake()
                        {

                            id = reader.GetInt32(reader.GetOrdinal("CakeId")),
                            name = reader.GetString(reader.GetOrdinal("CAKEName")),
                            customerId = reader.GetInt32(reader.GetOrdinal("customerId")),
                            userId = reader.GetString(reader.GetOrdinal("CakeUser")),
                            recipe = reader.GetString(reader.GetOrdinal("recipe")),
                            foodCostPerServing = reader.GetDecimal(reader.GetOrdinal("foodCostPerServing")),
                            numOfGuests = reader.GetInt32(reader.GetOrdinal("numOfGuests")),
                            decorTime = reader.GetInt32(reader.GetOrdinal("decorTime")),
                            bakeTime = reader.GetInt32(reader.GetOrdinal("bakeTime")),
                            wagePerHour = reader.GetDecimal(reader.GetOrdinal("wagePerHour")),
                            supplyCost = reader.GetDecimal(reader.GetOrdinal("supplyCost")),
                            refImage = reader.GetString(reader.GetOrdinal("refImage")),
                            totalCost = reader.GetDecimal(reader.GetOrdinal("totalCost")),
                            customerName = reader.GetString(reader.GetOrdinal("customerName"))
                        };

                        reader.Close();
                        return cake;
                    }
                    reader.Close();
                    return null;
                }
            }

        }
    }
}