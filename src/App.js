import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Expense from './components/Expense';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/" element={<SignUp/>} />
        <Route exact path="/expense" element={<Expense/>}/>
        </Routes>     
    </Router>
  );
};

export default App;

