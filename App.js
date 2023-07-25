import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenseForm from "./components/NewExpenses/NewExpenseForm";

const dailyExpense = [
  {
    id: "1",
    title: "Car Insurance",
    price: 299,
    date: new Date(2022, 4, 21),
    LocationOfExpenditure: "PhonePe",
  },
  {
    id: "2",
    title: "Grocery",
    price: 599,
    date: new Date(2021, 7, 21),
    LocationOfExpenditure: "Super Market",
  },
  {
    id: "3",
    title: "Internet Bills",
    price: 199,
    date: new Date(2023, 1, 21),
    LocationOfExpenditure: "Jio",
  },
  {
    id: "4",
    title: "Travel",
    price: 99,
    date: new Date(2022, 12, 21),
    LocationOfExpenditure: "Metro",
  },
  {
    id: "5",
    title: "Electronics",
    price: 89,
    date: new Date(2023, 4, 21),
    LocationOfExpenditure: "Amazon electronics",
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dailyExpense);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
    console.log(expense);
  };
  return (
    <>
      <h1>Expense Items!</h1>
      <NewExpenseForm onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
