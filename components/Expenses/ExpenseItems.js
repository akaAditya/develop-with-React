import React, { useState } from "react";
import Cards from "../UI/Cards.js";
import ExpenseDate from "./ExpenseDate";
import "./Expenses";
import "./ExpenseItems.css";

const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);
  const updateTitle = () => {
    setTitle("updated");
    console.log(title);
  };
  const deleteBtn = () => {
    console.log("delete");
  };

  const [price, setPrice] = useState(props.price);
  const changeExpense = () => {
    setPrice("100");
    console.log(price);
  };
  return (
    <>
        <Cards className="expense-item">
          <ExpenseDate date={props.date} />

          <div className="expense-item__description" id="items">
            <h2>{props.title}</h2>
            <div className="expense-item__price">
              <h2>${props.price}</h2>
            </div>
            <div className="expense-item__price">
              <h2>{props.LocationOfExpenditure}</h2>
            </div>
          </div>
          <button onClick={changeExpense}>$100</button>
          <button onClick={updateTitle}>Update Title</button>
          <button onClick={deleteBtn}>Delete</button>
        </Cards>
    </>
  );
};
export default ExpenseItems;

/*      <ExpenseDetails
          title={props.title}
          price={props.price}
          LocationOfExpenditure={props.LocationOfExpenditure}
        /> 
*/
