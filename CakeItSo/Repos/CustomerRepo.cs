


using CakeItSo.Models;
using Microsoft.Data.SqlClient;

namespace CakeItSo.Repos
{
    public class CustomerRepo : ICustomerRepo
    {
        private readonly IConfiguration _config;

        public CustomerRepo(IConfiguration config)
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
        public List<Customer> GetAllCustomers()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      SELECT 
                                      id, [name], userId, phone, email
                                      FROM Customer
                                      ";
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Customer> customers = new List<Customer>();
                    while (reader.Read())
                    {
                        Customer customer = new Customer()
                        {
                            id = reader.GetInt32(reader.GetOrdinal("id")),
                            name = reader.GetString(reader.GetOrdinal("name")),
                            userId = reader.GetString(reader.GetOrdinal("userId")),
                            phone = reader.GetString(reader.GetOrdinal("phone")),
                            email = reader.GetString(reader.GetOrdinal("email"))
                        };

                        customers.Add(customer);
                    }
                    reader.Close();

                    return customers;
                }
            }
        }
        public Customer GetCustomerById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                      SELECT 
                                      id, [name], userId, phone, email
                                      FROM Customer
                                        WHERE Id = @Id
                                      ";
                                      
                    cmd.Parameters.AddWithValue("@id", id);

                    SqlDataReader reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Customer customer = new Customer()
                        {
                            id = reader.GetInt32(reader.GetOrdinal("id")),
                            name = reader.GetString(reader.GetOrdinal("name")),
                            userId = reader.GetString(reader.GetOrdinal("userId")),
                            phone = reader.GetString(reader.GetOrdinal("phone")),
                            email = reader.GetString(reader.GetOrdinal("email"))
                        };

                        reader.Close();
                        return customer;
                    }
                    reader.Close();
                    return null;
                }
            }

        }
        public List<Customer> GetCustomersByUserId(string userId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
			                       SELECT 
                                      id, [name], userId, phone, email
                                      FROM Customer
                                    WHERE UserId = @userId
			";
                    cmd.Parameters.AddWithValue("@userId", userId);
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Customer> customers = new List<Customer>();
                    while (reader.Read())
                    {
                        Customer customer = new Customer()
                        {
                            id = reader.GetInt32(reader.GetOrdinal("id")),
                            name = reader.GetString(reader.GetOrdinal("name")),
                            userId = reader.GetString(reader.GetOrdinal("userId")),
                            phone = reader.GetString(reader.GetOrdinal("phone")),
                            email = reader.GetString(reader.GetOrdinal("email"))
                        };
                        customers.Add(customer);
                    }
                    reader.Close();
                    return customers;
                }
            }

        }
        public void CreateCustomer(Customer customer)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                   INSERT INTO Customer ([name], userId, phone, email)
                    OUTPUT INSERTED.ID
                    VALUES (@name, @userId, @phone, @email);
                    ";

                    cmd.Parameters.AddWithValue("@userId", customer.userId);
                    cmd.Parameters.AddWithValue("@name", customer.name);
                    cmd.Parameters.AddWithValue("@phone", customer.phone);
                    cmd.Parameters.AddWithValue("@email", customer.email);

                    int id = (int)cmd.ExecuteScalar();

                    customer.id = id;
                }
            }
        }
        public void UpdateCustomer(Customer customer)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    UPDATE Customer
                    SET
                        [name] = @name,
                        userId = @userId,
                        phone = @phone, 
                        email = @email
                    WHERE id = @id;
                    ";
                    cmd.Parameters.AddWithValue("@id", customer.id);
                    cmd.Parameters.AddWithValue("@userId", customer.userId);
                    cmd.Parameters.AddWithValue("@name", customer.name);
                    cmd.Parameters.AddWithValue("@phone", customer.phone);
                    cmd.Parameters.AddWithValue("@email", customer.email);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteCustomer(int id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
				DELETE FROM CUSTOMER
				WHERE Id = @id
				";
                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }

            }
        }

    }
}