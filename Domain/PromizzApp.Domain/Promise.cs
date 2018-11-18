using System;
using System.Collections.Generic;
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

        public int UserId { get; set; }

        [Required]
        [ForeignKey("UserId")]
        public virtual User Owner { get; set; }

        public string Description { get; set; }

        public int StateId { get; set; }

        [Required]
        [ForeignKey("StateId")]
        public virtual PromiseState State { get; set; }

        [MaxLength(10)]
        public string Color { get; set; }

        public DateTime EndDate { get; set; }

        public DateTime DateAdded { get; set; }

        public DateTime DateModified { get; set; }

        public virtual IEnumerable<PromiseMember> Members { get; set; }
    }
}
