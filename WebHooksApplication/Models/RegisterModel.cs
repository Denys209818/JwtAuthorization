using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebHooksApplication.Models
{
    public class RegisterModel
    {
        public string firstName { get; set; }
        public string secondName { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string confirmPassword { get; set; }
    }
}
