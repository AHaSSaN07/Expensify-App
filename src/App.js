import React, { Component } from 'react';
import './components/styles/styles.scss';
import { configStore } from './store/configStore';
import AppRoute from './Routers/AppRouters.js';
import { AddExpense } from './actions/expenses';
import { SetStartDate, sortByAmount, SetTextFilter } from './actions/filters';
import GetVisableExpenses from './selectores/expenses';
import { Provider } from 'react-redux';


const store = configStore();

store.dispatch(AddExpense({ description: "rent1", amount: 100 ,createdAt : 400 }))
store.dispatch(AddExpense({ description: "rent2", amount: 200 ,createdAt : 300}))
store.dispatch(AddExpense({ description: "rent3", amount: 300 ,createdAt : 200}))
store.dispatch(AddExpense({ description: "gas", amount: 400 ,createdAt : 100}))
store.dispatch(sortByAmount());



// // "node scripts/test.js --env=jsdom"

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