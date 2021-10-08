import * as Yup from 'yup'

export default Yup.object({
    firstName: Yup.string().required('Поле обов\'язкове!'),
    secondName: Yup.string().required('Поле обов\'язкове!'),
    phone: Yup.string().matches(/^(?=\+?([0-9]{2})\(?([0-9]{3})\)\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})).{18}$/, 'Номер введено не коректно!').required('Поле обов\'язкове!'),
    email: Yup.string().email('Не коректна електронна адреса!').required('Поле обов\'язкове!'),
    password: Yup.string().min(5, 'Пароль має містити не менше 5 символів!').required('Поле обов\'язкове!'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Не коректно введено підтвердження пароля!').required('Поле обов\'язкове!')
});