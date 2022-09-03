import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
  const [enteredTitle, seTEnteredTitle] = useState("");
  const [enteredAmount, seTEnteredAmount] = useState("");
  const [enteredDate, seTEnteredDate] = useState("");

  function titlechangeHandler(event) {
    seTEnteredTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    seTEnteredAmount(event.target.value);
  }
  function dateChangeHnadler(event) {
    seTEnteredDate(event.target.value);
  }
  function submitHandler(event){
    event.preventDefault();

    const expenseData={
      title:enteredTitle,
      amount:enteredAmount,
      date: new Date(enteredDate)

    };

    console.log(expenseData);
    seTEnteredAmount('');
    seTEnteredDate('')
    seTEnteredTitle('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titlechangeHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.0" onChange={amountChangeHandler} value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" onChange={dateChangeHnadler} value={enteredDate} />
        </div>
        <div className=".new-expense__actions">
          <button type="submit">add element</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
