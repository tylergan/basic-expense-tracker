import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpenses";
import { initialExpenses } from "./components/Expenses/Data";

export default function App() {
  const [expenses, setExpenses] = useState(initialExpenses)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return ( // Notice that we have a wrapper div with the class App; this is needed because we can only return one element in the "Create Element" world using React (which may have more child elements)
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}
