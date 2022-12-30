import React from 'react';
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
  const onSaveExpenseHandler = (expenseData) => {
    const expnseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expnseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenses={onSaveExpenseHandler} />
    </div>
  );
}

export default NewExpense;
