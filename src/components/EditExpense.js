import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

const EditExpenseFromForm = (props) => {
    //console.log(props.Expense);
    return (
        <div >
            <h1 className="total-panel2 ">Edit Expense</h1>
            <ExpenseForm
                expense={props.Expense}
                onSubmit={(expense) => {
                    props.dispatch(startEditExpense(props.Expense.id, expense));
                    props.history.push("/");
                }}
            >

            </ExpenseForm>
            <div className ="div-wrapper"  style = {{marginTop : "30px" ,width: "70%", margin: "0 auto",marginBottom : "20px"}}>
                <button style={{ margin: "0 auto" }} className="btn btn-secondary" onClick={() => {
                    props.dispatch(startRemoveExpense({ id: props.Expense.id }));
                    props.history.push("/");
                }}> Remove expense</button>
            </div>
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