const initialState = {
    isAuth: false,
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
};

const accountReducer = (state = initialState, action) => 
{
    switch(action.type) 
    {
        case "REGISTER_USER":
        case "LOGIN_USER": {
            var data = action.payload;
            return {
                isAuth: true,
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
                email: data.email
            };
        }
        case 'LOGOUT_USER': {
                return {
                isAuth: false,
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        }

    }
    return state;
}

export default accountReducer;