import "./ExpenseForm.css";

function ExpenseForm() {

  function titlechangeHandler(event){
    console.log(event.target.value)
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
          <input type="number" min ='0.0'/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" />
        </div>
        <div className=".new-expense__actions">
       <button type="submit">add element</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
