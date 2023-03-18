import React,{useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

  /*  const [userInput, setUserInput]= useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (e) => {
        setUserInput((prevState)=>{
            return {...prevState, enteredTitle: e.target.value}
        });
    };
    const amountChangeHandler = (e) => {
        setUserInput((prevState)=>{
            return {...prevState, enteredAmount: e.target.value}
        });
    };
    const dateChangeHandler = (e) => {
        setUserInput((prevState)=>{
            return {...prevState, enteredDate: e.target.value}
        });
    }; */

    const[enteredTitle, setEnteredTitle] = useState("")
    const[enteredAmount, setEnteredAmount] = useState("")
    const[enteredDate, setEnteredDate] = useState("")

    const titleChangeHandler = e =>{return setEnteredTitle(e.target.value)}
    const amountChangeHandler = e =>{return setEnteredAmount(e.target.value)}
    const dateChangeHandler = e =>{return setEnteredDate(e.target.value)}

    const submitHandler = (e) =>{
    e.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2023-01-01" max="2026-12-31" />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onStopEditingHandler}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm