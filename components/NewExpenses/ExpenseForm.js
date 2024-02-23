import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () =>{
    const [enteredTitle,setEnteredTitle]= useState('');
    const [enteredAmount,setEnteredAmount]= useState('');
    const [enteredDate,setEnteredDate]= useState('');

    const titleChange = (event) =>{
        setEnteredTitle(event.target.value)
    };
    const amountChange = (event) =>{
        setEnteredAmount(event.target.value)
    };
    const dateChange = (event) =>{
        setEnteredDate(event.target.value)
    };

    const submitHandaler = (event)=>{
        event.preventDefault();

        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
    };

    return <form onSubmit={submitHandaler}>
        <div className='new-expense_controls'>
            <div className='new-expense_control'>
                <label>Title</label>
                <input type='text' onChange={titleChange}></input>
            </div>
            <div className='new-expense_control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChange}></input>
            </div>
            <div className='new-expense_control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChange}></input>
            </div>
        </div>
        <div className='new-expense_action'>
            <button type='submit'>Add Expenses</button>
        </div>
    </form>
}

export default ExpenseForm;
