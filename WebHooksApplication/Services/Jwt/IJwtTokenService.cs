using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebHooksApplication.Data.Identity;

namespace WebHooksApplication.Services.Jwt
{
    public interface IJwtTokenService
    {
        string CreateToken(AppUser user);
    }
}
