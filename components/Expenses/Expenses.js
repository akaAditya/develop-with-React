import React, { useState } from "react";
import Cards from "../UI/Cards";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const getFilteredYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Cards className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={getFilteredYear}
        />
        <ExpenseList items= {filteredExpenses}/>
      </Cards>
    </>
  );
};

export default Expenses;

// return React.createElement("div", { className: "expense-item" },
// React.createElement('ExpenseDate', {date:props.date}, ),
// React.createElement('div',{}, React.createElement('h1', {}, 'Expense 1'), React.createElement('h1', {}, 'Expense 1')),
// );
