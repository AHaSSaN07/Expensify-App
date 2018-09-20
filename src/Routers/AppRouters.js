import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import AddExpense from './../components/AddExpense';
import EditExpense from './../components/EditExpense';
import ExpenseDashBoard from './../components/ExpenseDashBoard';
import NotFound from './../components/NotFound';
import Login from './../components/login';
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute';
import PuplicRoute from "./puplicRoute";

export const history = createHistory();

const AppRoute = () => (
    <Router history = {history}>
    <div>
      {/* <Header></Header> */}
      <Switch >
        <PuplicRoute path="/" component={Login} exact={true}></PuplicRoute>
        <PrivateRoute path="/dashboard" component={ExpenseDashBoard} exact={true}></PrivateRoute>
        <PrivateRoute path="/add" component={AddExpense} exact={true} ></PrivateRoute>
        <PrivateRoute path="/edit/:id" component={EditExpense} exact={true} ></PrivateRoute>
        
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  </Router>
);

export default AppRoute;