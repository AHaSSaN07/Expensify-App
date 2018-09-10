import uuid from 'uuid';




export const AddExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return {
      type: 'ADDEXPENSE',
      expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
      }
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

