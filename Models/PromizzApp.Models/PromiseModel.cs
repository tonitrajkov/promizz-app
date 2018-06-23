using System;

namespace PromizzApp.Models
{
    public class PromiseModel
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Creator { get; set; }
    }
}
