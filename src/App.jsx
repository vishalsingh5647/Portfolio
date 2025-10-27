import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;