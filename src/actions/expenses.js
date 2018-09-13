import uuid from 'uuid';

import database from '../firebase/firebase';


export const AddExpense = (expense) => {
  return {
    type: 'ADDEXPENSE',
    expense
  }
}


export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '', note = '', amount = 0, createdAt = 0
    } = expenseData
    const expense = { description, note, amount, createdAt };
    database.ref("expenses").push(expense).then((ref) => {
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

export const EditExpense = (id, NewExpense) => {
  return {
    type: 'EDITEXPENSE',
    id,
    NewExpense

  }
}

export const setExpenses = (expenses) => {
  return {
    type: 'SETEXPENSES',
    expenses
  }
}

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapShot) => {
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