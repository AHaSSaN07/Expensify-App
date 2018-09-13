import React, { Component } from 'react';
import { configStore } from './store/configStore';
import AppRoute from './Routers/AppRouters.js';
import { startSetExpenses } from './actions/expenses';
import { SetStartDate, sortByAmount, SetTextFilter } from './actions/filters';
import GetVisableExpenses from './selectores/expenses';
import { Provider } from 'react-redux';
import './firebase/firebase'

export const store = configStore();




class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppRoute></AppRoute>
      </Provider>
    );

  }
}
export default App;