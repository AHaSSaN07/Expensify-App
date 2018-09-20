import React, { Component } from 'react';
import { configStore } from './store/configStore';
import AppRoute from './Routers/AppRouters.js';
import { Provider } from 'react-redux';
import './firebase/firebase';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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