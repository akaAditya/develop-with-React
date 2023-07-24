import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm(){
    
    const [enteredTitle, setEnteredTitle]= useState('');
    const addTitle = (event)=>{
        setEnteredTitle(event.target.value)
        console.log(enteredTitle);
    }

    const [enteredAmount, setEnteredAmount] = useState('');
    const addPrice = (event)=>{
        setEnteredAmount(event.target.value)
        console.log(enteredAmount);
    }

    const [eneteredDate, setEnteredDate] = useState('')
    const addDate = (event)=>{
        setEnteredDate(event.target.value)
        console.log(eneteredDate)
    }
    
    return(
        <>
            <div className="new-expense__controls">
                <form className="new-expense__control input">
                    <label className="new-expense__control label">Title</label>
                    <input type='text' id="title" onChange={addTitle} />    
                </form> 
            </div> 
            <div className="new-expense__controls">
                <form className="new-expense__control input">
                    <label className="new-expense__control label">Price</label>
                    <input type='number' id='price'onChange={addPrice}/>    
                </form> 
            </div>
            <div className="new-expense__controls">
                <form className="new-expense__control input">
                    <label className="new-expense__control label">Date</label>
                    <input type='date' min='2021-01-01' max='2023-12-31' id="date" onChange={addDate}/>    
                </form> 
            </div>  
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>     
        </>
    )
}

export default ExpenseForm;