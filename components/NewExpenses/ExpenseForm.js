import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [eneteredDate, setEnteredDate] = useState("");

  // Using useState() function multiple to single:
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     eneteredDate: "",
  //   });

  // 1st way
  // const addTitle = (event)=>setUserInput({
  //     ...userInput,
  //     enteredTitle : event.target.value
  // })

  // 2nd way
  //   const addTitle = (event) =>
  //     setUserInput((previous) => {
  //       return {
  //         ...previous,
  //         eneteredTitle: event.target.value,
  //       };
  //     });

  // 3rd way
  const addTitle = (event) => {
    setEnteredTitle(event.target.value);
    //   console.log(enteredTitle);
  };

  const addPrice = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(enteredAmount);
  };

  const addDate = (event) => {
    setEnteredDate(event.target.value);
    // console.log(eneteredDate);
  };

  const submitHandler = (event)=>{
    event.preventDefault();
    
    const expenseData = {
            title : enteredTitle,
            price : enteredAmount,
            date : new Date(eneteredDate)
    };
    props.onSubmitExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label className="new-expense__control label">Title</label>
            <input
              className="new-expense__control input"
              type="text"
              id="title"
              value={enteredTitle}
              onChange={addTitle}
            />
          </div>
          <div className="new-expense__control">
            <label className="new-expense__control label">Price</label>
            <input
              className="new-expense__control input"
              type="number"
              id="price"
              value={enteredAmount}
              onChange={addPrice}
            />
          </div>
          <div className="new-expense__control">
            <label className="new-expense__control label">Date</label>
            <input
              className="new-expense__control input"
              type="date"
              min="2021-01-01"
              max="2023-12-31"
              id="date"
              value={eneteredDate}
              onChange={addDate}
            />
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;
