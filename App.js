import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenseForm from "./components/NewExpenses/NewExpenseForm";

const App = () => {
  return (
    <>
      <h1>Expense Items!</h1>
      <NewExpenseForm />
      <Expenses />
    </>
  );
};

export default App;
