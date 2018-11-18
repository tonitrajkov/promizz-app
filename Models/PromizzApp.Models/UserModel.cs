
namespace PromizzApp.Models
{
    public class UserModel
    {
        public int Id { get; set; }

        public string Firstname { get; set; }

        public string Lastname { get; set; }

        public string Username { get; set; }

        public string Fullname
        {
            get => Firstname + " " + Lastname;
        }

        public string Initials
        {
            get => Config.Utils.GetFirstLettersFromStrings(Firstname, Lastname).ToUpper();
        }
    
        public string Email { get; set; }

        public string Bio { get; set; }

        public string Avatar { get; set; }
    }
}
