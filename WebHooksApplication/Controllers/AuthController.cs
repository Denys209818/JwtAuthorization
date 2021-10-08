using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebHooksApplication.Data.Identity;
using WebHooksApplication.Models;
using WebHooksApplication.Services;
using WebHooksApplication.Services.Jwt;

namespace WebHooksApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private UserManager<AppUser>_userManager { get; set; }
        private SignInManager<AppUser> _signInManager { get; set; }
        private IJwtTokenService _jwtTokenService { get; set; }
        public AuthController(UserManager<AppUser> userManager, 
            SignInManager<AppUser> signInManager,
            IJwtTokenService jwtTokenService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _jwtTokenService = jwtTokenService;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model) 
        {
            return await Task.Run(() => {
                IActionResult res;
                if (ModelState.IsValid)
                {
                    var user = new AppUser { 
                        UserName = model.email,
                        FirstName = model.firstName,
                        LastName = model.secondName,
                        PhoneNumberOwn = model.phone,
                        Email = model.email
                    };

                    var createResult = _userManager.CreateAsync(user, model.password).Result;
                    if (createResult.Succeeded)
                    {
                        res = Ok(new { message= "Успіно зареєстровано!",
                        token=_jwtTokenService.CreateToken(user) });
                        _signInManager.PasswordSignInAsync(user, model.password, false, false).Wait();
                    }
                    else 
                    {
                        res = BadRequest(new { 
                            error = createResult.Errors
                        });
                    }
                   
                }
                else 
                {
                    var result = new MyValidatior().ValidateAsync(model).Result;
                    res = BadRequest(new { 
                        error = result.Errors
                    });
                }
                return res;
            });
        }

        [HttpPost]
        [Route("logout")]
        public async Task<IActionResult> Logout([FromBody] string email)
        {
            return await Task.Run(() => {
                var userClaim = _signInManager.IsSignedIn(_signInManager.CreateUserPrincipalAsync(
                    _userManager.FindByEmailAsync(email).Result).Result);
                if (userClaim) 
                {
                    _signInManager.SignOutAsync().Wait();
                }
                return Ok();
            });
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            return await Task.Run(async() => {
                IActionResult res;
                if (ModelState.IsValid)
                {
                    var user = await _userManager.FindByEmailAsync(model.Email);
                    if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
                    {
                        res = Ok(new
                        {
                            message = "Вхід схвалено!",
                            token = _jwtTokenService.CreateToken(user),
                            firstName = user.FirstName,
                            lastName = user.LastName,
                            phone = user.PhoneNumberOwn,
                            email = user.Email
                        });
                        _signInManager.PasswordSignInAsync(user, model.Password, false, false).Wait();
                    }
                    else 
                    {
                        res = BadRequest(new { 
                            message = "Не правильний логін або пароль!"
                        });
                    }
                }
                else
                {
                    var result = new MyValidatiorLogin().ValidateAsync(model).Result;
                    res = BadRequest(new
                    {
                        error = result.Errors
                    });
                }
                return res;
            });
        }
    }
}
