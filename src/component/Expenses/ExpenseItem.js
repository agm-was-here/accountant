import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// import Card from "./Card"
function ExpenseItem(props) {


  var title =props.item;
const clicker=()=>{
  title ="again works";
  console.log(title);
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
