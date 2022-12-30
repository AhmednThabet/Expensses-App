import React, { useState } from 'react';
import './ExpenseForm.css';
function ExpenseForm(props) {
  const [enterdTitle, setEnteredTitle] = useState('');
  const [enterdAmount, setEnterdAmount] = useState('');
  const [enterdDate, setEnterdDate] = useState('');
  const enteredTitleHander = (e) => {
    setEnteredTitle(e.target.value);
  };
  const enteredAmountHander = (e) => {
    setEnterdAmount(e.target.value);
  };
  const enteredDateHander = (e) => {
    setEnterdDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expensData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };
    props.onSaveExpenses(expensData);
    setEnterdAmount('');
    setEnterdDate('');
    setEnteredTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={enteredTitleHander}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterdAmount}
            min="0.01"
            step="0.01"
            onChange={enteredAmountHander}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterdDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={enteredDateHander}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
