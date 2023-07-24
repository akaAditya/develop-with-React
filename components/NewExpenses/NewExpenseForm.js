import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpenseForm.css'

const NewExpenseForm = (props)=>{
    const addExpenseDataHandler = (addExpenseData)=>{
        const newExpenseGetData = {
            ...addExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(newExpenseGetData);
    }

    return (
        <>
            <div className="new-expense">
                <ExpenseForm onSubmitExpenseData= {addExpenseDataHandler} />
            </div>
        </>
    );
}

export default NewExpenseForm;