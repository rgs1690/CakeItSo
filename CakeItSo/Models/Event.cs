namespace CakeItSo.Models
{
    public class Event
    {
       public int id { get; set; }
        public string name { get; set; }
        public string userId { get; set; }
        public int customerId { get; set; }
        public int cakeId { get; set; }
        public string typeOfEvent { get; set; }
        public string venu { get; set; }
        public string venuPhone { get; set; }
        public string venuAddress { get; set; }
        public string date { get; set; }
        public string time { get; set; }
        public int miles { get; set; }
        public decimal pricePerMile { get; set; }
        public string notes { get; set; }
        public decimal totalPrice {get; set;}
        public string customerName { get; set; }
}
}
