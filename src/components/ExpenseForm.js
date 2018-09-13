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
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'please Provide description and amount' }));
            console.log("1");
        } else {
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
            <div>
                <p1>{this.state.error !== '' ? this.state.error : null}</p1>
                <form onSubmit={this.onSubmitHandler}>
                    <input
                        type="text"
                        placeholder="description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDecChange}
                    ></input>
                    <input
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    >
                    </input>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={createdAt => this.setState({ createdAt })}
                        focused={this.state.focused}
                        onFocusChange={({ focused }) => this.setState({ focused })}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    ></SingleDatePicker>
                    <textarea
                        type="text"
                        placeholder="Note"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>{this.state.description?"Edit Expense":"Add Expense"}</button>
                </form>

            </div>
        )
    }
}



export default ExpenseForm;