using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Microsoft.Extensions.Caching.Memory;
using RegioneLombardia.Models.Store;
using RegioneLombardia.Models.Interfaces;

namespace RegioneLombardia.API
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(c =>  
            {  
                c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin());  
            }); 
            var sqlConnectionString = Configuration[ConfigurationPath.Combine("ConnectionStrings", "DefaultConnectionString")];
            var useInMemoryDatabase = string.IsNullOrWhiteSpace(sqlConnectionString);
            if (useInMemoryDatabase)
            {
                sqlConnectionString = "";
            }
            services.AddDbContext<ApplicationDbContext>();
            services.AddTransient<IApplicationDbContext>(x => new ApplicationDbContext(sqlConnectionString));
            services.AddTransient(x => new ApplicationDbContext(sqlConnectionString));
            services.AddSingleton<IMemoryCache, MemoryCache>();
            services.AddControllers();
            services.AddApplicationInsightsTelemetry();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "RegioneLombardia.API", Version = "v1" });
            });
        }      
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(x => x
                .AllowAnyMethod()
                .AllowAnyHeader()
                .SetIsOriginAllowed(origin => true)
                .AllowCredentials());
            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "RegioneLombardia.API v1"));        
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}