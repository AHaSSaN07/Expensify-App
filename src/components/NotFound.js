import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Link ,NavLink} from 'react-router-dom';




const NotFound = () => (
    <h1>404 - <Link to="/">back home</Link> </h1>
);

export default NotFound;