import React from 'react'
import ExpenseItem from './ExpenseItem';



function ExpenseList(props) {



   if(props.expense.length === 0){
       return <h2>No expense found</h2>
   }
    
    return(

           <div>
            {props.expense.map((expense)=>(  
            <ExpenseItem 
            key={expense.id} 
            title={expense.title}
             amount={expense.amount} 
             date = {expense.date} />))}
             </div>

    )
    
}

export default ExpenseList;
