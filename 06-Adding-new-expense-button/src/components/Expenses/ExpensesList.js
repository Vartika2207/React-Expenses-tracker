import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';


const ExpensesList = (props) => {
    if(props.items.length === 0){
       return (
          <h2 className='expenses-list__fallback'>Found no expenses!!</h2>
        );
    }

    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => (
                <ExpenseItem 
                key={expense.id} //unique identifier
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
                />
            ))};
        </ul>
    );
};

export default ExpensesList;