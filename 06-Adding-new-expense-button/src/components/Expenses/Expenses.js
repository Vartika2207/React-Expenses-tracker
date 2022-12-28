// import App from './App';
import React, { useState }  from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022'); //2020 will be visible by default
    const filterChangeHandler = (selectedYear) => {
      //console.log("inside expenses " + selectedYear);
      setFilteredYear(selectedYear);
    };

    //filter returns a new array based on the filter condition
    const filteredExpenses = props.items.filter((expense) => {
      return (
        //expense.date is string, but other is date object, hence make this same
        expense.date.getFullYear().toString() === filteredYear
      );
    });


    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter 
             selected={filteredYear} 
             onChangeFilter={filterChangeHandler}
          />
          {/* to get dynamic expression in jsx code  */}
          {/*function which is passed as argument is passed for all items in array using map
          will run for all  i.e array of elements 
          here we are returning ExpenseItem to which we want to map */}
          <ExpensesList items={filteredExpenses}/>   {/* {expensesContent} */}
        </Card>
      </div>
    );
};

export default Expenses;