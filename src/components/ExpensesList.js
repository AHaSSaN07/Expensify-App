
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Expenseitem from './ExpenseListItem';
import GetVisableExpenses from '../selectores/expenses';

//component itself 
const ExpenseList = (props) => (
    <div>
        this is expenesess list.
        {props.expenses.map((expense, index) => {
            return (
                <div>
                    <h1>Expense :{index + 1} </h1>
                    <Expenseitem {...expense} index={index} />
                </div>
            )
        })}
    </div>
);


const MapStateToProps = (state) => {
    return {
        expenses: GetVisableExpenses(state.expenses, state.filters)
    }
}
// component connected to store
export default connect(MapStateToProps)(ExpenseList);



