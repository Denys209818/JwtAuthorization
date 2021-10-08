using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebHooksApplication.Data.Identity;

namespace WebHooksApplication.Data.Configuration.Identity
{
    public class IdentityConfiguration : IEntityTypeConfiguration<AppUserRole>
    {
        public void Configure(EntityTypeBuilder<AppUserRole> builder)
        {
            builder.HasKey(keys => new { keys.RoleId, keys.UserId });

            builder.HasOne(virtualElementFromUserRoles => virtualElementFromUserRoles.User)
                .WithMany(virtualCollectionFromAppUser => virtualCollectionFromAppUser.UserRoles)
                .HasForeignKey(intElementFromUserRoles => intElementFromUserRoles.UserId)
                .IsRequired();

            builder.HasOne(virtualElementFromUserRoles => virtualElementFromUserRoles.Role)
                .WithMany(virtualCollectionFromAppRole => virtualCollectionFromAppRole.UserRoles)
                .HasForeignKey(intElementFromUserRoles => intElementFromUserRoles.RoleId)
                .IsRequired();
        }
    }
}
