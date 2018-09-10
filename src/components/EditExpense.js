import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { EditExpense ,RemoveExpense } from '../actions/expenses'

const EditExpenseFromForm = (props) => {
    //console.log(props.Expense);
    return (
        <div>
            <ExpenseForm
                expense={props.Expense}
                onSubmit={(expense) => {
                    props.dispatch(EditExpense(props.Expense.id, expense));
                    props.history.push("/");
                }}
            >

            </ExpenseForm>
            <button onClick={() => {
                props.dispatch(RemoveExpense({ id: props.Expense.id }));
                props.history.push("/");
            }}> Remove expense</button>
            
        </div>
    );
}
const MapStateToProps = (state, props) => {
    return {
        Expense: state.expenses.find((expense) => {
            return props.match.params.id === expense.id;
        })
    }

}
export default connect(MapStateToProps)(EditExpenseFromForm);