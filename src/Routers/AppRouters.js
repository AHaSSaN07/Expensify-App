import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Link ,NavLink} from 'react-router-dom'
import AddExpense from './../components/AddExpense';
import EditExpense from './../components/EditExpense';
import ExpenseDashBoard from './../components/ExpenseDashBoard';
import Header from './../components/Header';
import HelpPage from './../components/HelpPage';
import NotFound from './../components/NotFound';





const AppRoute = () => (
    <BrowserRouter>
    <div>
      <Header></Header>
      <Switch >
        <Route path="/" component={ExpenseDashBoard} exact={true}></Route>
        <Route path="/add" component={AddExpense} exact={true} ></Route>
        <Route path="/edit/:id" component={EditExpense} exact={true} ></Route>
        <Route path="/help" component={HelpPage} exact={true} ></Route>
        <Route component={NotFound}></Route>
      </Switch>

    </div>
  </BrowserRouter>
);

export default AppRoute;