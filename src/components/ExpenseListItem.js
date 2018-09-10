
import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import moment from 'moment';
import numeral from 'numeral';
const Expenseitem = ({ dispatch, id, description, amount ,createdAt}) => {

    return (
        <div>
            <Link to =  {`/edit/${id}`}>
            Describtion : {description}
            </Link>
            <br></br>
            amount : {numeral(amount/100).format('$0,0.00')}
            created at : {moment(createdAt).format('MMMM Do, YYYY')}
        </div>
    )
}


export default Expenseitem;