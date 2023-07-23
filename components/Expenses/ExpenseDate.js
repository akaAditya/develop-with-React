import React from "react";
import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </>
  );
}

export default ExpenseDate;
