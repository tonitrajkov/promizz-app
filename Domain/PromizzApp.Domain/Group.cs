namespace PromizzApp.Domain
{
    public class Group
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public User Owner { get; set; }
    }
}
