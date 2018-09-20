import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../actions/expenses'

const AddExpenseFromForm = (props) => (
    <div>
        <h1 className = "total-panel2 ">Add Expense</h1>
        <ExpenseForm 
            onSubmit = {(expense) => {
                props.dispatch(startAddExpense(expense));
                props.history.push("/dashboard");
            }}
        ></ExpenseForm>
    </div>
);


export default connect()(AddExpenseFromForm);