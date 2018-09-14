import React, { Component } from 'react';
import { startLogin } from '../actions/auth';
import { connect } from "react-redux";




const Login = (props) => (
    <div>
        <h1>
            Login Page
        </h1>
        <button onClick = {props.startLogin}>Login</button>
    </div>
)


const mapdispatchToProps = (dispatch) => {
    return {
        startLogin: dispatch(startLogin)
    }
}

export default connect(undefined,mapdispatchToProps)(Login);