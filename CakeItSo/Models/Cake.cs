namespace CakeItSo.Models
{
    public class Cake
    {
       public int id { get; set; }
        public string name { get; set; }
        public int customerId { get; set; }
        public string recipe { get; set; }
        public string userId { get; set; }
        public decimal foodCostPerServing { get; set; }
        public int numOfGuests { get; set; }
        public int decorTime {get; set;}
        public int bakeTime { get; set; }
        public decimal wagePerHour { get; set; }
        public decimal supplyCost { get; set; }
        public string refImage { get; set; }
        public decimal totalCost { get; set; }
        public string customerName { get; set; }
    }
}
