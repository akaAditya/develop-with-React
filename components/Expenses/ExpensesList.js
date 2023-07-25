import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No more contents</p>;
  } else if (props.items.length === 1) {
    return (
      <>
        {props.items.map((expense) => {
          return (
            <ExpenseItems
              key={expense.id}
              title={expense.title}
              price={expense.price}
              date={expense.date}
              LocationOfExpenditure={expense.LocationOfExpenditure}
            />
          );
        })}
        <p className="expenses-list__fallback">
          Only single Expense here. Please add more...
        </p>
      </>
    );
  } else if (props.items.length > 1) {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => {
          return (
            <ExpenseItems
              key={expense.id}
              title={expense.title}
              price={expense.price}
              date={expense.date}
              LocationOfExpenditure={expense.LocationOfExpenditure}
            />
          );
        })}
      </ul>
    );
  }
};

export default ExpenseList;
