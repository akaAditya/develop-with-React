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

  return (
    <>
      <Cards className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter = {getFilteredYear}/>
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
