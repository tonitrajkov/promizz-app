using System;

namespace PromizzApp.Models
{
    public class PromiseModel
    {
        public int Id { get; set; }
        
        public string Title { get; set; }

        public string Description { get; set; }

        public int StateId { get; set; }

        public int OwnerId { get; set; }

        public string Color { get; set; }

        public DateTime EndDate { get; set; }
    }
}
