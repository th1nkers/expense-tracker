import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import Card from '../UI/Card'

const NewExpense = (props) => {

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
  };

  const [isEditing, setIsEditing] = useState(false)
  const startEditingHandler = () =>{
    setIsEditing(true)
  }
  const stopEditingHandler = () =>{
    setIsEditing(false)
  }

  return (
    <Card className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onStopEditingHandler={stopEditingHandler} onSaveExpenseData={onSaveExpenseDataHandler} />}
    </Card>
  )
}

export default NewExpense
