import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';
import '../App.css';

export const Header = (props) => (
    <div>
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <NavLink to="/dashboard" className="nav-item nav-link active"><h1 style={{color : "white"}}>Expensify</h1></NavLink>
                {/* //<NavLink to="/help" >help</NavLink>
                <NavLink to="/add">Add Expense</NavLink> */}
                <button onClick={props.startLogOut} class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Log out</button>
            </nav>
            
        </div>

    </div>
);

const MapDispatchToProps = (dispatch) => {
    return {
        startLogOut: dispatch(startLogOut)
    }
}

export default connect(undefined, MapDispatchToProps)(Header);