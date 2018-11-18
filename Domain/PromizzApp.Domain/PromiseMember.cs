using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PromizzApp.Domain
{
    public class PromiseMember
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        public int PromiseId { get; set; }

        [Required]
        [ForeignKey("PromiseId")]
        public virtual Promise Promise { get; set; }

        public int? PromiseeId { get; set; }
        [ForeignKey("PromiseeId")]
        public virtual User Promisee { get; set; }

        public int? GroupId { get; set; }
        [ForeignKey("GroupId")]
        public virtual Group PromiseeGroup { get; set; }

        public bool? Accept { get; set; }
    }
}
