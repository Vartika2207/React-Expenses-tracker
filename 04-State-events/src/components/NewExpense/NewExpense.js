import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
   const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseDate = {
        ...enteredExpenseData, //it will pull all key-val pair (title, amnt, date)
        id: Math.random().toString()
    };
    props.onAddExpense(expenseDate);
    console.log(expenseDate);
   };


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};


export default NewExpense;