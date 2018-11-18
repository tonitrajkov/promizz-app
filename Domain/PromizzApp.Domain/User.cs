using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PromizzApp.Domain
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(200)]
        public string Firstname { get; set; }

        [Required]
        [MaxLength(200)]
        public string Lastname { get; set; }

        [Required]
        [MaxLength(500)]
        public string Username { get; set; }

        [Required]
        [MaxLength(500)]
        public string Email { get; set; }

        public string Bio { get; set; }

        public string Avatar { get; set; }
    }
}
