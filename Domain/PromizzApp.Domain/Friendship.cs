using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PromizzApp.Domain
{
    public class Friendship
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public int UserOneId { get; set; }

        [Required]
        public int UserTwoId { get; set; }

        public int StateId { get; set; }

        [Required]
        [ForeignKey("StateId")]
        public FriendshipState State { get; set; }

        [Required]
        public int LastActionByUserId { get; set; }
    }
}
