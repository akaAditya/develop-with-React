import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpenseForm.css'

const NewExpenseForm = (props)=>{
    const [hiddenForm, setShowForm] = useState(false);

    const addExpenseDataHandler = (addExpenseData)=>{
        const newExpenseGetData = {
            ...addExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(newExpenseGetData);
        setShowForm(false);
    }

    const showExpenseForm = ()=>{
        setShowForm(true);
    }
    const hideExpenseForm = () =>{
        setShowForm(false);
    }

    return (
        <>
            <div className="new-expense">
                {!hiddenForm && <button onClick={showExpenseForm}>Add New Expense</button>}
                {hiddenForm && <ExpenseForm onSubmitExpenseData= {addExpenseDataHandler} onHidingForm={hideExpenseForm}/>}
            </div>
        </>
    );
}

export default NewExpenseForm;