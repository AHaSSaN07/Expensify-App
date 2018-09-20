import React from 'react';
import ConnectedExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpenenseListFilters';
import TotalAmount from './TotalAmountHeader';



const ExpenseDashBoard = () => (

    <h1>
      
        <TotalAmount></TotalAmount>
        <ExpenseListFilters ></ExpenseListFilters >
        <ConnectedExpenseList></ConnectedExpenseList>
    </h1>
);

export default ExpenseDashBoard;