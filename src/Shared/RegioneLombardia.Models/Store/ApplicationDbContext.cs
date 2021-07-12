using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using RegioneLombardia.Models.DataSeed;
using RegioneLombardia.Models.Interfaces;

namespace RegioneLombardia.Models.Store
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        private readonly string _connectionString;
        public DbSet<Notice> Notices { get; set; }
        public DbSet<Type> Types { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<NoticeCategory> NoticeCategories { get; set; }
        public DbSet<Application> Applications { get; set; }
        public DbSet<Attachment> Attachments { get; set; }
        public DbSet<Service> Services { get; set; }
        public ApplicationDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Notice>().HasKey(n => n.Id);
            builder.Entity<Type>().HasKey(a => a.Id);
            builder.Entity<Category>().HasKey(a => a.Id);
            builder.Entity<NoticeCategory>().HasNoKey();
            builder.Entity<Application>().HasKey(a => a.Id);
            builder.Entity<Attachment>().HasKey(a => a.Id);
            builder.Entity<Service>().HasKey(a => a.Id);

            // Seed data
            // SampleData sampleData = SampleData.ReadDataFromJson();
            // builder.Entity<Type>().HasData(sampleData.Types);
            // builder.Entity<Category>().HasData(sampleData.Categories);
            // builder.Entity<Notice>().HasData(sampleData.Notices);

            base.OnModelCreating(builder);
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!string.IsNullOrWhiteSpace(_connectionString))
            {
                optionsBuilder.UseSqlServer(_connectionString, b => b.MigrationsAssembly("RegioneLombardia.API"));
            }
            else
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder(_connectionString);
                optionsBuilder.UseInMemoryDatabase("ApplicationDbContext");
            }
        }
    }
}