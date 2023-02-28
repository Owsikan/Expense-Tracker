import React from "react";
import Expensedate from "../expense-date/Expensedate";
import '../expense-item/ExpenseItem.css';

const ExpenseItem=(props)=>{
     let{
         Title="hiii",
         amount=0,
         date=new Date()
        }=props;
        
     
    return(
        <div className="expense-item">
          <Expensedate 
           date={props.date}/>
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
           </div>
        </div>
    );
}

export default ExpenseItem;  