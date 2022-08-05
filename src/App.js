import ExpenseItem from "./component/ExpenseItem";

function App() {
  const expenses = [
    { item: "car insurence", amount: 234, date: new Date(2021, 3, 4) },
    { item: "work", amount: 1234, date: new Date(2022, 6, 4) },
  ];
  return (
    <div>
      <div Classname="index-heading">
        <h2>THE ACCOUNTANT </h2>
      </div>
      <ExpenseItem
        item={expenses[0].item}
        amount={expenses[0].amount}
        date={expenses[0].date}
     />
      <ExpenseItem
        item={expenses[1].item}
        amount={expenses[1].amount}
        date={expenses[1].date}
     />
    </div>
  );
}

export default App;
