
import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import numeral from 'numeral';
const Expenseitem = ({ dispatch, id, description, amount, createdAt }) => {

    return (
        <Link to={`/edit/${id}`} style = {{textDecoration: "none"}}>
            <div  style = {{display: "flex",justifyContent: "space-between",textDecoration: "none"}}>
            <p className="font-weight-light" style = {{color : "#545B62",fontSize :30}}><p className ="navbar-brand">{description}</p></p>
            {numeral(amount / 100).format('$0,0.00')}
            </div>
             <div style ={{fontSize : 20}} className="font-weight-light">{moment(createdAt).format('MMMM Do, YYYY')}</div>
        </Link>
    )
}


export default Expenseitem;