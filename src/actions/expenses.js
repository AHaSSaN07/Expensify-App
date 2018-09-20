
import database from '../firebase/firebase';


export const AddExpense = (expense) => {
  return {
    type: 'ADDEXPENSE',
    expense
  }
}


export const startAddExpense = (expenseData = {}) => {
  return (dispatch,getState) => {
    const uid = getState().auth.id;
    const {
      description = '', note = '', amount = 0, createdAt = 0
    } = expenseData
    const expense = { description, note, amount, createdAt };
    database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(AddExpense(
        {
          id: ref.key,
          ...expense
        }
      ))
    })
  }
}





export const RemoveExpense = ({ id } = {}) => {
  return {
    type: 'REMOVEEXPENSE',
    id
  }
}

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch,getState) => {
    const uid = getState().auth.id;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(RemoveExpense({id}));
    })

  }
}

export const EditExpense = (id, NewExpense) => {
  return {
    type: 'EDITEXPENSE',
    id,
    NewExpense

  }
}


export const startEditExpense = (id,NewExpense) => {
  return (dispatch,getState) => {
    const uid = getState().auth.id;
    return database.ref(`users/${uid}/expenses/${id}`).update({
      ...NewExpense
    }).then(() => {
      dispatch(EditExpense(id,NewExpense))
    })
  }
}

export const setExpenses = (expenses) => {
  return {
    type: 'SETEXPENSES',
    expenses
  }
}

export const startSetExpenses = () => {
  return (dispatch,getState) => {
    const uid = getState().auth.id;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapShot) => {
      const databaseExpenses = [];
      snapShot.forEach((expense) => {
        databaseExpenses.push({
          id: expense.key,
          ...expense.val()
        })
        dispatch(setExpenses(databaseExpenses))
      })
    })
  }
}