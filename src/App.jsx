import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // You can add logic to load expenses from local storage here
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  // Calculate the total expenses here
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="container">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList 
          expenses={expenses} 
          deleteExpense={deleteExpense} 
          totalExpenses={totalExpenses} 
        />
      </main>
    </div>
  );
};

export default App;