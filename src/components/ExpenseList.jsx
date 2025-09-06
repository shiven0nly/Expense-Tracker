import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, deleteExpense, totalExpenses }) => {
  return (
    <div className="expense-list">
      <div className="total-expenses-summary">
        <h2>Total Expenses:</h2>
        <span className="total-amount">₹{totalExpenses.toFixed(2)}</span>
      </div>

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