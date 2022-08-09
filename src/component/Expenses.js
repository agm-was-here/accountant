import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
// import Card from "./Card"
function Expenses(props) {
  return (
    <div className="expenses">
 <ExpenseItem
        item={props.list[0].name}
        amount={props.list[0].amount}
        date={props.list[0].date}
      />
      <ExpenseItem
        item={props.list[1].name}
        amount={props.list[1].amount}
        date={props.list[1].date}
      />
</div>
  );
}

export default Expenses;
