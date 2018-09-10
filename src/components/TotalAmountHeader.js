import React from 'react';
import GetVisableExpenses from '../selectores/expenses';
import GetExpensesAmount from '../selectores/expensesAmount';
import { connect } from 'react-redux';
import numeral from 'numeral';


const TotalAmount = (props) => (

    <div>
        {
            props.expenses.length ?

                props.expenses.length === 1 ?
                
                    <h>Viewing {props.expenses.length} expense with total amount : {numeral(GetExpensesAmount(props.expenses) / 100).format('$0,0.00')}</h>
                    : <h>Viewing {props.expenses.length} expenses with total amount : {numeral(GetExpensesAmount(props.expenses) / 100).format('$0,0.00')}</h>


                : null

        }
    </div>
);


const MapStateToProps = (state) => {
    return {
        expenses: GetVisableExpenses(state.expenses, state.filters),
    }
}

export default connect(MapStateToProps)(TotalAmount);