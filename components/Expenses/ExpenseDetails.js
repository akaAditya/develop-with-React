import React from "react";

const ExpenseDetails = (props) => {
  return (
    <>
      <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">
                <h2>${props.price}</h2>
            </div>
            <div className="expense-item__price">
                <h2>{props.LocationOfExpenditure}</h2>
            </div>
      </div>
    </>
  );
}
export default ExpenseDetails;
