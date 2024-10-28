import React, { useState, useEffect } from 'react';
import Quote from './Components/Quote';
import ThemeToggle from './Components/ThemeToggle';
import Button from './Components/Button';
import axios from 'axios';
import './global.css'; 
import './theme.css';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      console.log(response.data); // Check the structure of the data
      setQuote(response.data.content); // Update these keys if they differ
      setAuthor(response.data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };
  

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`container ${theme}`}>
      <Quote quote={quote} author={author} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Button onClick={fetchQuote} text="New Quote" />
    </div>
  );
}

export default App;
