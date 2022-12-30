import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './NewCompoExpense.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
function NewCompoExpenses(props) {
  const [selectedYer, setSelectedYer] = useState('2020');
  const dropdownHandler = (year) => {
    setSelectedYer(year);
    console.log(year);
    console.log('NewCompoExpenses');
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYer}
          onChangeFilter={dropdownHandler}
        />
        {props.expenses.map((expens) => { 
          // console.log(expens);
         return <ExpenseItem
            title={expens.title}
            amount={expens.amount}
            date={expens.date}
          />
        })}
      </Card>
    </div>
  );
}

export default NewCompoExpenses;
