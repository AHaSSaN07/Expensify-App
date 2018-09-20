import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const PuplicRoute = ({ isAuth, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => {

        return isAuth ? (
            <Redirect to="/dashboard"></Redirect> 
            ) : (
                <Component {...props}></Component>
            );
    }}></Route>
)



const mapStateToProps = (state) => ({
    isAuth: state.auth.id ? true : false
}
)

export default connect(mapStateToProps)(PuplicRoute);