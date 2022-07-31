import "./ExpenseItem.css";

function ExpenseItem() {
  const expensedate = new Date(2022, 2, 25);
  const expensetitle = "Car insurance";
  const expenseamount = "286.7";

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
