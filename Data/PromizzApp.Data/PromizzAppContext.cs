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

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer(
        //         "Server = (localdb)\\toni-lt; Database = PromizzApp; Trusted_Connection = True; ");
        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}
