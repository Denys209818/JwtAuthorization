import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axiosService from "../services/axiosService";

const Navbar = () => {

    var history = useHistory();
    var dispatch = useDispatch();

    const {isAuth, firstName, email} = useSelector(redux => redux.account);
    const onLogout = () => {
            axiosService.send('api/auth/logout', email);

            dispatch({ type: 'LOGOUT_USER' });
            history.push('/');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">Web Hooks</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="mainMenu" className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"> 
                            <Link className="nav-link active" to="/">Головна сторінка</Link>
                        </li>
                    </ul>
                    {!isAuth 
                        ? < ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Увійти</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/register">Зареєструватися</Link>
                            </li>
                        </ul> :
                         < ul className="navbar-nav">
                         <li className="nav-item">
                            <span className="nav-link">Привіт, {firstName}</span>
                         </li>
                         <li>
                             <a className="nav-link" onClick={onLogout}>Вийти</a>
                         </li>
                             </ul>
                        }
                    
                </div>
            </div>
        </nav>
    );

};

export default Navbar;