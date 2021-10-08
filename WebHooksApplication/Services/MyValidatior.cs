using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebHooksApplication.Models;

namespace WebHooksApplication.Services
{
    public class MyValidatior : AbstractValidator<RegisterModel>
    {
        public MyValidatior()
        {
            RuleFor(x => x.firstName).NotEmpty().WithMessage("Поле не може бути пустим!");
            RuleFor(x => x.secondName).NotEmpty().WithMessage("Поле не може бути пустим!");
            RuleFor(x => x.email).EmailAddress().WithMessage("Електронна пошта не коректна")
                .NotEmpty().WithMessage("Поле не може бути пустим!");
            RuleFor(x => x.phone).NotEmpty().WithMessage("Поле не може бути пустим!");
            RuleFor(x => x.password).MinimumLength(5).WithMessage("Має містити 5 символів!")
                .NotEmpty().WithMessage("Поле не може бути пустим!");
            RuleFor(x => x.confirmPassword).MinimumLength(5)
                .WithMessage("Має містити 5 символів!").NotEmpty().WithMessage("Поле не може бути пустим!");
        }
    }

    public class MyValidatiorLogin : AbstractValidator<LoginModel>
    {
        public MyValidatiorLogin()
        {
            RuleFor(x => x.Email).NotEmpty().WithMessage("Поле не може бути пустим!");
            RuleFor(x => x.Password).NotEmpty().WithMessage("Поле не може бути пустим!");
        }
    }
}
