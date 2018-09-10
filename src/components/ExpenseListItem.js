
import React, { Component } from 'react';
import {Link } from 'react-router-dom'

const Expenseitem = ({ dispatch, id, description, amount }) => {

    return (
        <div>
            <Link to =  {`/edit/${id}`}>
            Describtion : {description}
            </Link>
            <br></br>
            amount : {amount}
        </div>
    )
}


export default Expenseitem;