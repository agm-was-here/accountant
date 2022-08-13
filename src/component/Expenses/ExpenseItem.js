import ExpenseDate from "./ExpenseDate";
import React,{ useState } from "react";
import "./ExpenseItem.css";
// import Card from "./Card" 
function ExpenseItem(props) {

const [title,newTitle]= useState( props.item); 
const clicker=()=>{
 newTitle("updated");
}
  return (
    <div className="expense-item">
    <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        {/* <h2>{props.item}</h2> */}
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clicker}>click</button>
    </div>
  );
}

export default ExpenseItem;
