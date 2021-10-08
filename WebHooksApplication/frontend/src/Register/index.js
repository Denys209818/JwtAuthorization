import React from "react";
import { Formik, Form } from "formik";
import TextBoxVisual from "../TextBoxVisual";
import validationRegister from "./validationRegister";
import TextBoxPhoneVisual from "../TextBoxVisual/TextBoxPhoneVisual";
import axiosService from "../services/axiosService";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const Register = () => {
    var history = useHistory();
    // REGISTER_USER
    var dispatch = useDispatch();
    var defaultValues = {
        email: '',
        firstName: '',
        secondName: '',
        phone: '',
        password: '',
        confirmPassword: ''
    };

    const onSubmitHandler = (values) => {
        axiosService.send('api/auth/register', values)
        .then(data => {
            dispatch({type: "REGISTER_USER", payload: {
                firstName: values.firstName,
                lastName: values.secondName,
                phone: values.phone,
                email: values.email
            }});
            history.push('/');
        })
        .catch(error => {
            var response = error.response;
            alert(response.data.error[0].description);
        });
    }

    return (<div className="row">
        <div className="offset-md-3 col-md-6">
            <h1 className="text-center mt-4">Реєстрація</h1>
            <Formik
                initialValues = {defaultValues}
                validationSchema={validationRegister}
                onSubmit ={onSubmitHandler}
            >
                <Form>
                    <TextBoxVisual
                        name="firstName"
                        id="firstName"
                        type="text"
                        label = "Ім'я"
                    />
                    <TextBoxVisual
                        name="secondName"
                        id="secondName"
                        type="text"
                        label="Прізвище"
                    />
                    <TextBoxPhoneVisual
                        name="phone"
                        id="phone"
                        type="text"
                        label="Телефон"
                    />
                    <TextBoxVisual
                        name="email"
                        id="email"
                        type="text"
                        label="Електронна пошта"
                    />
                    <TextBoxVisual
                        name="password"
                        id="password"
                        type="password"
                        label="Пароль"
                    />
                    <TextBoxVisual
                        name="confirmPassword"
                        id="confirmPassword"
                        type="password"
                        label="Підтвердження паролю"
                    />

                    <input type="submit" className="btn btn-success" value="Зареєструватися"/>
                </Form>
            </Formik>
        </div>
        </div>);
}

export default Register;