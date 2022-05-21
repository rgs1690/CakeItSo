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



    }
}
