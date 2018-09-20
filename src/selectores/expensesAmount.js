


const GetExpensesAmount =(expenses) => {
    let sum = 0;
    expenses.map((exp) => {
         sum = sum + exp.amount;
    })
    return sum;
    
}



export default GetExpensesAmount;
