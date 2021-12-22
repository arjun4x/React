import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';



function ExpenseItem(props){

     console.log(props.amount);
    

    return(
       

         <Card className="expense-item">
                <ExpenseDate date={props.date}/>
           <div className='.expense-item__description'>
                <h2>{props.title}</h2> 
           </div>
            <div className="expense-item__price">{props.amount}</div>
            
            </Card>
           
    )
    }

 export default ExpenseItem;