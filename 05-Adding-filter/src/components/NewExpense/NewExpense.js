import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
   const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData, //it will pull all key-val pair (title, amnt, date)
        id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    console.log("NewExpense " + expenseData);
   };


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};


export default NewExpense;