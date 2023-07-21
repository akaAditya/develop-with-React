import React from "react";
import ExpenseItems from "./ExpenseItems";
import Cards from "../UI/Cards";

const Expenses = () => {
  const expenses = [
    {
      id: "1",
      title: "Car Insurance",
      price: 299,
      date: new Date(2023, 7, 21),
      LocationOfExpenditure: "PhonePe",
    },
    {
      id: "2",
      title: "Grocery",
      price: 599,
      date: new Date(2023, 7, 21),
      LocationOfExpenditure: "Super Market",
    },
    {
      id: "3",
      title: "Internet Bills",
      price: 199,
      date: new Date(2023, 7, 21),
      LocationOfExpenditure: "Jio",
    },
    {
      id: "4",
      title: "Travel",
      price: 99,
      date: new Date(2023, 7, 21),
      LocationOfExpenditure: "Metro",
    },
    {
      id: "5",
      title: "Electronics",
      price: 89,
      date: new Date(2023, 7, 21),
      LocationOfExpenditure: "Amazon electronics",
    },
  ];

    return (
      <Cards>
        <h1>Expense Items!</h1>
        {Object.keys(expenses).map((expense) => {
          return (
            <ExpenseItems
              title={expenses[expense].title}
              price={expenses[expense].price}
              date={expenses[expense].date}
              LocationOfExpenditure={expenses[expense].LocationOfExpenditure}
            ></ExpenseItems>
          );
        })}
      </Cards>
    );
  
}

export default Expenses;

// return React.createElement("div", { className: "expense-item" },
// React.createElement('ExpenseDate', {date:props.date}, ),
// React.createElement('div',{}, React.createElement('h1', {}, 'Expense 1'), React.createElement('h1', {}, 'Expense 1')),
// );