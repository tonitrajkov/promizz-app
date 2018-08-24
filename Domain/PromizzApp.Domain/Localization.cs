using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PromizzApp.Domain
{
    public class Localization
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [MaxLength(1000)]
        public string Key { get; set; }

        [Required]
        [MaxLength]
        public string Value { get; set; }

        [Required]
        [MaxLength(15)]
        public string LanguageShortName { get; set; }
    }
}
