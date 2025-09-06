import React from 'react';

const ExpenseItem = ({ expense, deleteExpense }) => {
  return (
    <div className="expense-item">
      <div className="expense-info">
        <span className="description">{expense.description}</span>
        <span className="amount">₹{expense.amount.toFixed(2)}</span>
      </div>
      <button onClick={() => deleteExpense(expense.id)} className="delete-btn">
        &times;
      </button>
    </div>
  );
};

export default ExpenseItem;