import React, { useState } from "react";
import Cards from "../UI/Cards.js";
import ExpenseDate from "./ExpenseDate";
// import ExpenseDetails from "./ExpenseDetails";
import "./Expenses";
import "./ExpenseItems.css";

const ExpenseItems = (props) => {

  const [title, setTitle] = useState(props.title);
  const deleteBtn = () => {
    console.log(title);
    setTitle('updated');
  };

const [price, setPrice] = useState(props.price);
const changeExpense = () =>{
  setPrice('100');
  console.log(price);
}
  return (
    <>
      <Cards className="expense-item">
        <ExpenseDate date={props.date} />
        
        <div className="expense-item__description" id="items">
            <h2>{title}</h2>
            <div className="expense-item__price">
                <h2>${price}</h2>
            </div>
            <div className="expense-item__price">
                <h2>{props.LocationOfExpenditure}</h2>
            </div>
      </div>
        <button onClick={changeExpense}>$100</button>
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