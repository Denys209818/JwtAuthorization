using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebHooksApplication.Data.Identity;

namespace WebHooksApplication.Services.Jwt
{
    public class JwtTokenService : IJwtTokenService
    {
        private readonly UserManager<AppUser> _userManager;
        public JwtTokenService(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }
        public string CreateToken(AppUser user)
        {

            List<Claim> claims = new List<Claim>()
            {
                new Claim("id",user.Id.ToString()),
                new Claim("name",user.UserName)
            };

            var signinKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("awdaawdawdklawmdawjdnakwdnawdbhawkjdkcjbhabckauc5"));
            var signinCredentials = new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256);

            var jwt = new JwtSecurityToken(
                signingCredentials: signinCredentials,
                expires: DateTime.Now.AddDays(100),
                claims: claims
                );
            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }
    }
}
