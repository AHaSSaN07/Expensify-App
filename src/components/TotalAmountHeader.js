import React from 'react';
import GetVisableExpenses from '../selectores/expenses';
import GetExpensesAmount from '../selectores/expensesAmount';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { NavLink } from 'react-router-dom';

const TotalAmount = (props) => (

    <div class="total-panel">
        {
            props.expenses.length ||! props.expenses.length?

                props.expenses.length === 1 ?
                
                    <h class="font-weight-light">Viewing <span className="font-weight-bold">{props.expenses.length}</span> expense with total amount : {numeral(GetExpensesAmount(props.expenses) / 100).format('$0,0.00')}</h>
                    : <h class="font-weight-light">Viewing <span className="font-weight-bold">{props.expenses.length} </span>expenses with total amount : {numeral(GetExpensesAmount(props.expenses) / 100).format('$0,0.00')}</h>


                : null

        }<br></br>
        <br></br>
        <NavLink to="/add" className="btn btn-primary btn-lg "  aria-disabled="true">Add Expense</NavLink>
    </div>
);


const MapStateToProps = (state) => {
    return {
        expenses: GetVisableExpenses(state.expenses, state.filters),
    }
}

export default connect(MapStateToProps)(TotalAmount);