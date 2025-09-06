import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="expense-list">
      <h2>Your Expenses</h2>
      {expenses.length === 0 ? (
        <p className="no-expenses-message">No expenses added yet!</p>
      ) : (
        expenses.map(expense => (
          <ExpenseItem 
            key={expense.id} 
            expense={expense} 
            deleteExpense={deleteExpense} 
          />
        ))
      )}
    </div>
  );
};

export default ExpenseList;