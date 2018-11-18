using System;
using System.Collections.Generic;

namespace PromizzApp.Models
{
    public class PromiseModel
    {
        public int Id { get; set; }
        
        public string Title { get; set; }

        public string Description { get; set; }

        public LookupItem<int> State { get; set; }

        public int OwnerId { get; set; }

        public string Color { get; set; }

        public DateTime EndDate { get; set; }

        public UserModel Promisee { get; set; }
    }

    public class PromiseAddModel
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public string Color { get; set; }

        public List<int> Promisees { get; set; }

        public DateTime EndDate { get; set; }
    }
}
