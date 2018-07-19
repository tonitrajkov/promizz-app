using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PromizzApp.Domain
{
    public class Promise
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(1000)]
        public string Title { get; set; }

        public string Description { get; set; }

        public int StateId { get; set; }

        [Required]
        [ForeignKey("StateId")]
        public PromiseState State { get; set; }

        public int OwnerId { get; set; }

        [Required]
        [ForeignKey("OwnerId")]
        public User Owner { get; set; }

        [MaxLength(10)]
        public string Color { get; set; }
        public DateTime EndDate { get; set; }
    }
}
