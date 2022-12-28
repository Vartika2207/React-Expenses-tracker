import React, { useState } from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle(title+'s Updated!'); //cant use title=updated bcz here we are 
    //calling whole function again 
    console.log(title + " button clicked!");
  };

  return (
    <Card className='expense-item'>
     <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>Rs {props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Button</button> */}
    </Card>
  );
}

export default ExpenseItem;
