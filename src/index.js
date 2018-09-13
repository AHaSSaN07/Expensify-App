import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { startSetExpenses } from './actions/expenses';
import { store } from './App';

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));
store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});



//registerServiceWorker();
