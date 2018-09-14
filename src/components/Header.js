import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';


export const Header = (props) => (
  <div>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="linkig" exact={true}>Home</NavLink>
    <NavLink to="/help" activeClassName="linkig" exact={true}>help</NavLink>
    <NavLink to="/add" activeClassName="linkig" exact={true}>Add Expense</NavLink>
    <button onClick={props.startLogOut}>Log out</button>
  </div>
);

const MapDispatchToProps = (dispatch) => {
  return {
    startLogOut: dispatch(startLogOut)
  }
}

export default connect(undefined, MapDispatchToProps)(Header);