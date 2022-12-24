import React, { useState} from "react";
import './ExpenseForm.css'


const ExpenseForm = () => {

    //Instead we can have one state
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
   //using single state object, when we update this state all three properties
   //are updated
//    const [userInput, setUserInput] = useState({
//     enterTitle: '',
//     enterAmount: '',
//     enterDate: ''
//    });

    //event is a default object which we get automatically
    const titleChangeHandler = (event) =>{
        console.log(event.target.value); //event have many properties which can be used
    
        setEnteredTitle(event.target.value); //since we are using single state

        //since if state gets updated and we never merge with old state
        //will miss other properties, so explicitly mention 
        //...userInpt this spread operator will copy all existing value
        //and will override 
        /*setUserInput({
            ...userInput, //depending on prev state and override
            enterTitle: event.target.value
        });
        */

        //above method is not a good way
        // setUserInput((prevState) => {
        //     return { //new state and prev state snapshot will always be latest
        //         //and better than above method
        //         ...prevState,
        //         enterTitle: event.target.value
        //     };
        // });
    };

    const amountChangeHandler = (event) =>{
        console.log(event.target.value); //event have many properties which can be used
    
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enterAmount: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     return { 
        //         ...prevState,
        //         enterAmount: event.target.value
        //     };
        // });
    };


    const dateChangeHandler = (event) =>{
        console.log(event.target.value); //event have many properties which can be used
    
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value
        // });

        // setUserInput((prevState) => {
        //     return { 
        //         ...prevState,
        //         enterDate: event.target.value
        //     };
        // });
    };

    const submitHandler = (event) => {
        /*since that request is not sent the page will now also not reload
        because we stay on the currently loaded page without sending any 
        request anywhere and we can continue handling this with js*/ 
        event.preventDefault();
        const expenseData = {
            new_title: enteredTitle,
            new_amount: enteredAmount,
            new_date: new Date(enteredDate) //string date is converted to obj
        };
        console.log(expenseData);
        setEnteredTitle(''); //after submit we override what was written
        setEnteredAmount('');
        setEnteredDate('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                    /*adding value attr, 2-way binding, along with listening we
                      also feed state back into input.
                    */
                       type="text" 
                       value={enteredTitle} 
                       onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                       type="number" 
                       min="0.01" step="0.01" 
                       value={enteredAmount} 
                       onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                       type="date" 
                       min="2019-01-01" max="2023-12-31" 
                       value={enteredDate} 
                       onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                {/* with default browser behavious when button of type 
                submit if pressed,emit submit event to which we can listen*/}
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default  ExpenseForm;