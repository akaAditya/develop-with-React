import React from "react";
import Cards from "../UI/Cards.js";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./Expenses";
import './ExpenseItems.css'

const ExpenseItems= (props) => {

  const deleteBtn = () => {
    console.log('Delete Expense');
    }
  return (
    <>
      <Cards className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          title={props.title}
          price={props.price}
          LocationOfExpenditure={props.LocationOfExpenditure}
        />
            <button onClick={deleteBtn}>Delete</button>

      </Cards>
    </>
  );
}
export default ExpenseItems;
