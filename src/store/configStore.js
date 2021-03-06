import { createStore, combineReducers ,applyMiddleware,compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/fiters';
import authReducer from '../reducers/auth'
import thunk from 'redux-thunk';


const ComposeEnhansers = compose;

export const configStore = () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            auth : authReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        ComposeEnhansers(applyMiddleware(thunk))
    );
    return store;
}
