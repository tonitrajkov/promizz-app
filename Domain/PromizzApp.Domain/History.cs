using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PromizzApp.Domain
{
    public class History
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int ActionTypeId { get; set; }

        [Required]
        [ForeignKey("ActionTypeId")]
        public virtual HistoryActionType ActionType { get; set; }

        public int ActionById { get; set; }

        [Required]
        [ForeignKey("ActionById")]
        public virtual User ActionBy { get; set; }

        [Required]
        public DateTime ActionOn { get; set; }
    }
}
