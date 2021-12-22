import React,{useState} from  'react';
import Expense from './components/expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const Dummy =[ {
  id : 'e1',
  title : "miscellaneous",
  amount : 100,
  date : new Date(2021, 11, 8)},
  { 
    id : 'e2',
    title : "Food",
  amount : 150,
  date : new Date(2021, 1, 30)
},
  {
    id :'e3',
  title :"carinsurance",
  amount : 1000,
  date : new Date(2021, 7, 30)
},
  {
    id :'e4',
 title :"petrol",
  amount : 1500,
date: new Date(2021, 11, 30)
},
{
  id :'e5',
title :"carwash",
amount : 150,
date: new Date(2021, 11, 30)
},
];

function App(props) {

  const [expenses,setExpenses]=useState(Dummy);

  const addExpenseHandler = (expensess) =>{
    

    setExpenses((prevExpense)=>{
      return[expensess,...prevExpense];
    });
    console.log(expenses);


  
  } ;

 
  
  

  

  return (
  <div>

    <NewExpense  onAddExpense={addExpenseHandler}/>
    <Expense setExpenses={setExpenses} expenses={expenses}/>
    </div>
  );
}

export default App;
