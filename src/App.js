import Expenses from "./component/Expenses/Expenses";
import NewExpenses from "./component/NewExpense/NewExpense";
function App() {
  const expenses = [
    { name: "car insurence", amount: 234, date: new Date(2021, 3, 4) },
    { name: "work", amount: 1234, date: new Date(2022, 6, 4) },
  ];
  return (
    <div>
      <h2>THE ACCOUNTANT </h2>
        <NewExpenses />
      <Expenses list={expenses} />
    </div>
  );
}

export default App;
