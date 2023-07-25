import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import Cards from "../UI/Cards";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const getFilteredYear = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear
  });

  let expenseContent = <p>No expenses present</p>
  if(filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItems
          key = {expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
          LocationOfExpenditure={expense.LocationOfExpenditure}
          ></ExpenseItems>
          );
        })
  }

  return (
    <>
      <Cards className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter = {getFilteredYear}/>
        {expenseContent} 
      </Cards>
    </>
  );
};

export default Expenses;

// return React.createElement("div", { className: "expense-item" },
// React.createElement('ExpenseDate', {date:props.date}, ),
// React.createElement('div',{}, React.createElement('h1', {}, 'Expense 1'), React.createElement('h1', {}, 'Expense 1')),
// );
