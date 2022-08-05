 import "./ExpenseItem.css";

function ExpenseItem() {


  return (
    <div className="expense-item">
      <div>{expensedate.toISOString}</div>
      <div className="expense-item__description">
        <h2>{expensetitle}</h2>
      </div>
      <div className="expense-item__price">${expenseamount}</div>
    </div>
  );
}

export default ExpenseItem;
