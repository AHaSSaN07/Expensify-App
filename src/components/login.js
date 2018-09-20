import React from 'react';
import { startLogin } from '../actions/auth';
import { connect } from "react-redux";




const Login = (props) => (
    <div className="box_layout">
        <div className ="white-box">
            <h1 className = "title">Expensify</h1>
            <p>please log in to continue.</p>
            <button onClick={props.startLogin} className = "button">Login with Google</button>
        </div>
    </div>
)


const mapdispatchToProps = (dispatch) => {
    return {
        startLogin: dispatch(startLogin)
    }
}

export default connect(undefined, mapdispatchToProps)(Login);