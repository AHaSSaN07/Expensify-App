import { createStore } from 'redux';


const increment = ({ amount = 1


} = {}) => {
    return {
        type: 'INCREMENT',
        amount
    }
}


const decrement = ({ amount = 1 } = {}) => {
    return {
        type: 'DECIREMENT',
        amount
    }
}


const set = ({ amount } = {}) => {
    return {
        type: 'SET',
        amount: amount
    }
}

const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':

            return {
                count: state.count + action.amount
            }

        case 'DECIREMENT':

            return {
                count: state.count - action.amount
            }
        case 'RESET': return { count: 0 }
        case 'SET': return { count: action.amount }

        default: return state;
    }

}

const store = createStore(countReducer)



console.log(store.getState());


store.dispatch(increment());
store.dispatch(decrement({ amount: 10 }));
store.dispatch(set({ amount: 115 }));





console.log(store.getState());

