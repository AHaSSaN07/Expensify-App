import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SetTextFilter, sortByAmount, sortByDate, SetStartDate, SetEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

class ExpenseListFilters extends React.Component {

    state = {
        calenderFoucesd : null
    }

    onDatesChange = ({startDate,endDate})=>{
        this.props.dispatch(SetStartDate(startDate));
        this.props.dispatch(SetEndDate(endDate));
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.Filter.text} onChange={(event) => {
                    this.props.dispatch(SetTextFilter(event.target.value));
                }}>
                </input>
                <select value={this.props.Filter.sortBy} onChange={(event) => {
                    if (event.target.value === "amount") {
                        this.props.dispatch(sortByAmount());
                    }
                    else if (event.target.value === "date") {
                        this.props.dispatch(sortByDate());
                    }

                }}>
                    <option value="date">
                        Date
                    </option>
                    <option value="amount">
                        Amount
                    </option>
                </select>
                <DateRangePicker
                    startDate={this.props.Filter.startDate}
                    endDate={this.props.Filter.endDate}
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calenderFoucesd}
                    onFocusChange={calenderFoucesd => this.setState({ calenderFoucesd })}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates = {true  }
                ></DateRangePicker>

            </div >
        )
    }

}

const MapStateToProps = (state) => {
    return {
        Filter: state.filters,

    }
}


export default connect(MapStateToProps)(ExpenseListFilters);