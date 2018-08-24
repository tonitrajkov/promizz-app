using System.ComponentModel.DataAnnotations;

namespace PromizzApp.Domain
{
    public class Language
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(250)]
        public string Name { get; set; }

        [Required]
        [MaxLength(15)]
        public string ShortName { get; set; }

        [Required]
        public bool IsDefault { get; set; }
    }
}
