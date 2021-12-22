import React,{useState} from 'react';

import Card from '../UI/Card';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';




function Expense(props) {
    const [filteredYear,setFilteredYear] = useState('2021');

    console.log(filteredYear)
    
   
    console.log(props.expenses)
    
   
   
  
  const filteredChangeHandler = (year) =>{
      

    setFilteredYear(year);
    }
  console.log(filteredYear);
const filteredExpense = props.expenses.filter(expenses=> {
    
     return expenses.date.getFullYear().toString() === filteredYear;
     
    });
    

  console.log(filteredExpense);

    return (
        <Card className='expenses'>
            <ExpenseFilter filteredYear={filteredYear}
             onChangeFilter = {filteredChangeHandler}/>

            
        <h1>expense tracker</h1>
        <ExpenseChart expense={filteredExpense}/>
       <ExpenseList  filteredYear={filteredYear} expense={filteredExpense}/>

      
  
        </Card>
    
        
    )
}

export default Expense
