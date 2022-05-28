using CakeItSo.Models;
using Microsoft.Data.SqlClient;

namespace CakeItSo.Repos
{
    public class UserRepo : IUserRepo
    {
        private readonly IConfiguration _config;

        public UserRepo(IConfiguration config)
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

        public List<User> GetAllUsers(SqlDataReader read)
            {
                using (SqlConnection conn = Connection)
                {
                    conn.Open();
                    using (SqlCommand cmd = conn.CreateCommand())
                { 
                    cmd.CommandText = @"
                                      SELECT 
                                        id
                                      FROM User
                                      ";
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<User> users = new List<User>();
                    while (reader.Read())
                    {
                        User user = new User()
                        {
                            id = reader.GetString(reader.GetOrdinal("id"))
                        };

                    users.Add(user);
                    }
                    reader.Close();

                    return users;
                }
            }
        }



        public void CreateUser(User user)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       INSERT INTO [User] (id)
                                       VALUES (@id);
                                    ";
                    cmd.Parameters.AddWithValue("@id", user.id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
        public bool CheckUserExists(string id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT id
                                        FROM [User]
										WHERE id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        return true;
                    }
                    else
                    {
                        reader.Close();
                        return false;
                    }
                }
            }
        }
        public User GetUserById(string id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM [User]
                        WHERE id = @id
                    ";

                    cmd.Parameters.AddWithValue("@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var user = GetAllUsers(reader).FirstOrDefault();
                        return user;
                    }
                }
            }
        }


    }
}
