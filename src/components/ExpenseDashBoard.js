import React, { Component } from 'react';
import ConnectedExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpenenseListFilters';




const ExpenseDashBoard = () => (

    <h1>
        <ExpenseListFilters></ExpenseListFilters>
        <ConnectedExpenseList></ConnectedExpenseList>

    </h1>
);

export default ExpenseDashBoard;