import React from 'react';
import { connect } from 'react-redux';
import { SetTextFilter, sortByAmount, sortByDate, SetStartDate, SetEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

class ExpenseListFilters extends React.Component {

    state = {
        calenderFoucesd: null,
        borderColor : "#CACCCD"
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(SetStartDate(startDate));
        this.props.dispatch(SetEndDate(endDate));
    }
    render() {
        return (
            <div className="content-container" style = { { width: "70%",margin : "0 auto"}}>
                <div className = "input-group" style = { { marginTop : "15px" ,marginLeft :"20px"}}>
                    {/* search */}
                    <div className="input-group__item"  >
                        <input type="text" class="form-control" style = {{height: 62}}  aria-describedby="basic-addon1" type="text" value={this.props.Filter.text} placeholder="Search Expenses" onChange={(event) => {
                            this.props.dispatch(SetTextFilter(event.target.value));
                        }} />
                    </div>




                    {/* sortBy */}

                    <select className="input-group__item" style = {{fontSize:20,borderColor :this.state.borderColor}} value={this.props.Filter.sortBy} onChange={(event) => {
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



                    {/*date Range*/}

                    <DateRangePicker
                    
                        startDate={this.props.Filter.startDate}
                        endDate={this.props.Filter.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calenderFoucesd}
                        onFocusChange={calenderFoucesd => this.setState({ calenderFoucesd })}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        showClearDates={true}
                    ></DateRangePicker>
                </div>
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