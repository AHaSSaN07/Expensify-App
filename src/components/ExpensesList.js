
import React from 'react';
import { connect } from 'react-redux';
import Expenseitem from './ExpenseListItem';
import GetVisableExpenses from '../selectores/expenses';
//import GetExpensesAmount from '../selectores/expensesAmount';
//component itself 
const ExpenseList = (props) => (
    <div>
        <div className="card" style={{ width: "60%",margin: "0 auto" ,marginBottom :"100px"}} >
            <div class="card-header" style={{ display: "flex", justifyContent: "space-between" }} ><div className="font-weight-light">Expense</div><div className="font-weight-light">Amount</div> </div>

            <div class="card-body" style={{height: " auto"}}>
                {props.expenses.map((expense, index) => {
                    return (
                        <div className="card-body">
                            <Expenseitem {...expense} index={index} />
                            {props.expenses.length-1 !== index? <hr></hr>:null}
                   
                        </div>
                    )
                })}
            </div>
        </div>

        {/* {props.expenses.map((expense, index) => {
            return (
                <div>


                    <h1>Expense :{index + 1} </h1>
                    <Expenseitem {...expense} index={index} />

                </div>
            )
        })} */}
    </div>
);


const MapStateToProps = (state) => {
    return {
        expenses: GetVisableExpenses(state.expenses, state.filters),

    }
}
// component connected to store
export default connect(MapStateToProps)(ExpenseList);



