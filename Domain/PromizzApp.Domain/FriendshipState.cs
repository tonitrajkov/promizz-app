using System.ComponentModel.DataAnnotations;

namespace PromizzApp.Domain
{
    public class FriendshipState
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(250)]
        public string Title { get; set; }

        [Required]
        [MaxLength(250)]
        public string MultiLangKey { get; set; }
    }
}
