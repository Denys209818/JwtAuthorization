using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebHooksApplication.Data.Identity
{
    public class AppUser : IdentityUser<long>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumberOwn { get; set; }
        public virtual ICollection<AppUserRole> UserRoles { get; set; }
    }
}
