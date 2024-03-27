using DogaKahramanlari.Server.Models;
using DogaKahramanlari.Server.Repositories.Config;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DogaKahramanlari.Server.Repositories
{
    public class RepositoryContext : IdentityDbContext<User>
    {
        public RepositoryContext(DbContextOptions options) :
            base(options)
        {

        }
        public DbSet<Animal> Animals { get; set; }
        public DbSet<UserKey> UserKeys { get; set; }
        public DbSet<Duty> Duties { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new AnimalConfig());
            modelBuilder.ApplyConfiguration(new DutyConfig());


            //modelBuilder.Entity<UserKey>().HasKey(u => u.UserId);

            modelBuilder.Entity<UserKey>(entity =>
            {
                entity.Property(u => u.Id)
                    .ValueGeneratedNever(); // Otomatik artışı devre dışı bırak

                entity.Property(u => u.Id)
                    .IsRequired(); // Zorunlu alan olarak belirle
            });


        }
    }
}