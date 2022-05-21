namespace CakeItSo.Models
{
    public class Event
    {
        int id { get; set; }
        string name { get; set; }
        string userId { get; set; }
        int customerId { get; set; }
        int cakeId { get; set; }
        string typeOfEvent { get; set; }
        string venu { get; set; }
        string venpuPhone { get; set; }
        string venuAddress { get; set; }
        string date { get; set; }
        string time { get; set; }
        int miles { get; set; }
        decimal pricePerMile { get; set; }
        string notes { get; set; }
        decimal totalPrice {get; set;}
}
}
