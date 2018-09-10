import React, { Component } from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {AddExpense} from '../actions/expenses'

const AddExpenseFromForm = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit = {(expense) => {
                props.dispatch(AddExpense(expense));
                props.history.push("/");
            }}
        ></ExpenseForm>
    </div>
);


export default connect()(AddExpenseFromForm);