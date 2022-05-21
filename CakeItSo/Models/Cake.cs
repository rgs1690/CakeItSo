namespace CakeItSo.Models
{
    public class Cake
    {
        int id { get; set; }
        string name { get; set; }
        int customerId { get; set; }
        string recipe { get; set; }
        string userId { get; set; }
        decimal foodCostPerServing { get; set; }
        int numOfGuests { get; set; }
        int decorTime {get; set;}
        int bakeTime { get; set; }
        decimal wagePerHour { get; set; }
        decimal supplyCost { get; set; }
        string refImage { get; set; }
        decimal totalCost { get; set; }
    }
}
