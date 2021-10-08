import * as Yup from 'yup'

export default Yup.object({
    email: Yup.string().email('Не коректна Електронна пошта!').required('Поле не може бути пустим!'),
    password: Yup.string().matches(/[A-Za-z]/, 'Поле має містити латинські літери!').min(5, 'Поле має містити 5 символів!').required('Поле не може бути пустим!')
});