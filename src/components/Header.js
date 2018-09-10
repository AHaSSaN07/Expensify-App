import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Link ,NavLink} from 'react-router-dom';




const Header = () => (
  <div>
    <h1>
      Expensify
    </h1>
    <NavLink to="/" activeClassName="linkig" exact={true}>Home</NavLink>
    <br />
   
    <NavLink to="/help" activeClassName="linkig" exact={true}>help</NavLink>
    <br />
    <NavLink to="/add" activeClassName="linkig" exact={true}>Add Expense</NavLink>
    <br />
  </div>
);


export default Header;