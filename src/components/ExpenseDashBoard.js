import React, { Component } from 'react';
import ConnectedExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpenenseListFilters';
import TotalAmount from './TotalAmountHeader';



const ExpenseDashBoard = () => (

    <h1>
        <ExpenseListFilters></ExpenseListFilters>
        <TotalAmount></TotalAmount>
        <ConnectedExpenseList></ConnectedExpenseList>

    </h1>
);

export default ExpenseDashBoard;