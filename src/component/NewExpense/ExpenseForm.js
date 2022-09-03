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
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titlechangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.0" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" onChange={dateChangeHnadler} />
        </div>
        <div className=".new-expense__actions">
          <button type="submit">add element</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
