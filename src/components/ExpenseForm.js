import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

class ExpenseForm extends React.Component {
    state = {
        description: this.props.expense ? this.props.expense.description : "",
        note: this.props.expense ? this.props.expense.note : "",
        amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
        focused: false,
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        error: ''

    }

    onDecChange = (event) => {
        const description = event.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChange = (event) => {
        const note = event.target.value;
        this.setState(() => {
            return {
                note
            }
        })
    }

    onAmountChange = (event) => {
        const amount = event.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("0");
        if (!this.state.description) {
            this.setState(() => ({ error: 'Please provide description ' }));
           
        }
        else if(!this.state.amount){
            this.setState(() => ({ error: 'Please provide amount ' }));
        } 
        else {
            this.setState(() => {
                return {
                    error: ''
                }

            })

            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf()

            })
        }
    }
    render() {
        return (
            <div className="div-wrapper" style = {{marginTop : "30px" ,width: "70%", margin: "0 auto" }}>
            
             
                <form onSubmit={this.onSubmitHandler}>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="description"
                            autoFocus
                            value={this.state.description}
                            onChange={this.onDecChange}
                            className="form-control form-control-lg"
                        ></input>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                            className="form-control form-control-lg"
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <SingleDatePicker
                            style = {{borderRadius : "4px" ,width :"100%"}}
                            date={this.state.createdAt}
                            onDateChange={createdAt => this.setState({ createdAt })}
                            focused={this.state.focused}
                            onFocusChange={({ focused }) => this.setState({ focused })}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        ></SingleDatePicker>
                    </div>
                    <div className="form-group">
                        <textarea 
                            className="form-control"
                            type="text"
                            placeholder="Note"
                            value={this.state.note}
                            onChange={this.onNoteChange}
                            rows = {4}
                        >
                        </textarea>
                    </div>
                    
                    <button className="btn btn-primary" style = {{marginBottom : "15px"}}>{this.state.description||this.state.amount ? "Save Expense" : "Add Expense"}</button>
                    
                    {this.state.error !== '' ?<div><br/><p1 className="alert alert-danger">{this.state.error}</p1><br/><br/></div>: null} 
                </form>

            </div>
        )
    }
}



export default ExpenseForm;