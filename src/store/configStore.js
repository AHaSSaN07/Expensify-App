import { createStore, combineReducers ,applyMiddleware,compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/fiters';
import thunk from 'redux-thunk';


const ComposeEnhansers =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const configStore = () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ComposeEnhansers(applyMiddleware(thunk))
    );
    return store;
}
