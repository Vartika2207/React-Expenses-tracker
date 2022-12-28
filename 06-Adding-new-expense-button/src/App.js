import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


//function App() { or
const App = () => {

  //format is (wrapper element, argument passed, 0-n txt passes)
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h3', {}, "Hello React"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("app.js expenses " + expense)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; //we are adding new expense with the existing one
    }); //and storing it in prevExpenses which will receive lastest snapshot
  };

  return (
    <div>
      <h3>Hello React</h3>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      
    </div>
  );
};

export default App;
