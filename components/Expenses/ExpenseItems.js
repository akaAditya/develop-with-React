import React from "react";
import Cards from "../UI/Cards.js";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./Expenses";
import './ExpenseItems.css'

const ExpenseItems= (props) => {
  return (
    <>
      <Cards className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          title={props.title}
          price={props.price}
          LocationOfExpenditure={props.LocationOfExpenditure}
        />
      </Cards>
    </>
  );
}
export default ExpenseItems;
