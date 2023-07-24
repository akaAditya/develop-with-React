import React from "react";
import ExpenseItems from "./ExpenseItems";
import Cards from "../UI/Cards";
import "./Expense.css";

const Expenses = (props) => {

  return (
    <>
      <Cards className="expenses">
        {Object.keys(props.items).map((expense, key) => {
          return (
            <ExpenseItems
              title={props.items[expense].title}
              price={props.items[expense].price}
              date={props.items[expense].date}
              LocationOfExpenditure={props.items[expense].LocationOfExpenditure}
              ></ExpenseItems>
              );
            })}
            
      </Cards>
    </>
  );
};

export default Expenses;

// return React.createElement("div", { className: "expense-item" },
// React.createElement('ExpenseDate', {date:props.date}, ),
// React.createElement('div',{}, React.createElement('h1', {}, 'Expense 1'), React.createElement('h1', {}, 'Expense 1')),
// );
