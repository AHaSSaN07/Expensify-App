import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { router, fastest } from "sw-toolbox";
import Header from './../components/Header';


const PrivateRoute = ({ isAuth, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => {
        
        return isAuth ? (
           <div>
               <Header ></Header>
                <Component {...props}></Component> 
                
           </div>
        ) : (
                <Redirect to="/"></Redirect>
            );
    }}></Route>
)



const mapStateToProps = (state) => ({
    isAuth: state.auth.id ? true : false
}
)

export default connect(mapStateToProps)(PrivateRoute);