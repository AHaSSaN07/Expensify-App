import moment  from "moment";





const GetVisableExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

    return expenses.filter((expense) => {
      const createdat = moment(expense.createdAt);
      const startDateMatch = startDate ?startDate.isSameOrBefore(createdat,'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdat,'day') : true;
      const textToFind = text.toLowerCase();
      const textInExpense = expense.description.toLowerCase();
      const textMatch = textInExpense.includes(textToFind) ? true : false;
  
  
      return startDateMatch && endDateMatch && textMatch;
  
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    })
  
  
  }

  export default GetVisableExpenses;