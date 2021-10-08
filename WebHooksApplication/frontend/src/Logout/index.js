import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const Logout = () => {
    var dispatch = useDispatch();
    var history = useHistory();
        dispatch({type: 'LOGOUT_USER'});
        history.push('/');
    

    return;
}

export default Logout;

