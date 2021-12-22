import React, {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) =>{

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const titleChangeHandler = (e) =>{
        setEnteredTitle(e.target.value);

    }
    const AmountChangeHandler = (e) =>{
        setEnteredAmount(e.target.value);

    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);

    }
    const submitHandler = (e) =>{
        e.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount: + enteredAmount,
            date: new Date(enteredDate)
            
        };
    
    console.log(expenseData);
   props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    }



    
    
    return (
        
       <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>title</label>
                <input onChange={titleChangeHandler}value={enteredTitle} type="text"/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input onChange = {AmountChangeHandler} value={enteredAmount} type="number" min="10" step="10"/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input onChange = {dateChangeHandler}  value={enteredDate} type="date" min="2019-01-01" max="2024-12-31"/>
            </div>
        </div>
        <div className='new-expense__action'>
            <button type="submit">Add Expense</button>
        </div>
        </form>
    )
 
    }
export default ExpenseForm;