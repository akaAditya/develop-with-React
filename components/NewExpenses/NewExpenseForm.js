import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpenseForm.css'

const NewExpenseForm = ()=>{

    return (
        <>
            <div className="new-expense">
                <ExpenseForm />

            </div>
        </>
    );
}

export default NewExpenseForm;