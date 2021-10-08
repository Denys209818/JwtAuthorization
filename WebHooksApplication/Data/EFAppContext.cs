using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebHooksApplication.Data.Configuration.Identity;
using WebHooksApplication.Data.Identity;

namespace WebHooksApplication.Data
{
    public class EFAppContext : IdentityDbContext<AppUser, AppRole, long, IdentityUserClaim<long>, AppUserRole, IdentityUserLogin<long>,
        IdentityRoleClaim<long>, IdentityUserToken<long>>
    {

        public EFAppContext(DbContextOptions opt) : base(opt)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            #region Identity
            builder.ApplyConfiguration(new IdentityConfiguration());
            #endregion
        }
    }
}
