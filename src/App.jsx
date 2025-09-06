import './App.css'
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';


const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Save expenses to local storage whenever they change
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    // Set the theme class on the body element
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

  return (
    <div className="container">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      </main>
    </div>
  );
};

export default App;