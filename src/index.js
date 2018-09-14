import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { startSetExpenses } from './actions/expenses';
import { store } from './App';
import { firebase } from './firebase/firebase';
import { history } from "./Routers/AppRouters";
import { LogIn, LogOut } from "./actions/auth";
ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));
store.dispatch(startSetExpenses()).then(() => {

});


let hasRenderd = false;

const renderApp = () => {
    if (!hasRenderd) {
        ReactDOM.render(<App />, document.getElementById('root'));
        hasRenderd = true;
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(LogIn(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
        });
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
    }
    else {
        store.dispatch(LogOut());
        renderApp();
        history.push('/')
    }
})
//registerServiceWorker();
