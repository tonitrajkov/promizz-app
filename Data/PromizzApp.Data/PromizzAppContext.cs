using Microsoft.EntityFrameworkCore;
using PromizzApp.Domain;

namespace PromizzApp.Data
{
    public class PromizzAppContext : DbContext
    {
        public PromizzAppContext(DbContextOptions<PromizzAppContext> options)
           : base(options)
        { }

        public DbSet<User> Users { get; set; }
        public DbSet<Promise> Promises { get; set; }
        public DbSet<PromiseState> PromiseStates { get; set; }
        public DbSet<History> History { get; set; }
        public DbSet<HistoryActionType> HistoryActionTypes { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<Localization> Localizations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Language>().ToTable("Languages", "loc");
            modelBuilder.Entity<Localization>().ToTable("Localizations", "loc");
        }
    }
}
// https://github.com/dotnet-architecture/eShopOnWeb