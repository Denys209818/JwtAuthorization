import React from "react";
import { Formik, Form } from "formik";
import TextBoxVisual from "../TextBoxVisual";
import validationLogin from "./validationLogin";
import axiosService from "../services/axiosService";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const Login = () => {
    var history = useHistory();
    var dispatch = useDispatch();

    var defaultInitials = {
        email: '',
        password: ''
      };

    const onSubmitHandler = (values) => {
        
        axiosService.send('api/auth/login', {
            email: values.email,
            password: values.password
        }).then(data => {
            var elements = data.data;
            dispatch({type: "LOGIN_USER", payload: {
                firstName: elements.firstName,
                lastName: elements.secondName,
                phone: elements.phone,
                email: elements.email
            }});
            history.push('/');
        })
        .catch(error => {
            var response = error.response;
           alert(response.data.message);
        });
    }
    return (<div className="row">
        <div className="offset-md-3 col-md-6">
            <h1 className="text-center mt-4">Вхід</h1>
        <Formik
        initialValues={defaultInitials}
        validationSchema={validationLogin}
        onSubmit={onSubmitHandler}>
                <Form>
                    <TextBoxVisual 
                        label = "Електронна пошта"
                        id="email"
                        name="email"
                        type="text"
                    />
                     <TextBoxVisual 
                        label="Пароль"
                        id="password"
                        name="password"
                        type="password"
                    />

                    <input type="submit" className="btn btn-success" value="Війти"/>
                </Form>
        </Formik>
        </div>
    </div>);
}

export default Login;