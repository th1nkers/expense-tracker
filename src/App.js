import './App.css';
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
  { id: 'e1', title: 'Car Insurance', amount: 121, date: new Date(2025, 3, 24) },
  { id: 'e2', title: 'Pen', amount: 1, date: new Date(2023, 2, 24) },
  { id: 'e3', title: 'bike', amount: 11, date: new Date(2024, 3, 24) },
  { id: 'e4', title: 'wallet', amount: 1, date: new Date(2025, 7, 24) },
  { id: 'e5', title: 'wallet', amount: 31, date: new Date(2025, 7, 24) },
  { id: 'e6', title: 'wallet', amount: 31, date: new Date(2025, 7, 24) },
  { id: 'e7', title: 'wallet', amount: 31, date: new Date(2025, 7, 24) }
];

const App = () => {

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
