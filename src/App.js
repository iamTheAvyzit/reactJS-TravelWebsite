import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Planner from './components/pages/Planner';
import Hosting from './components/pages/Hosting';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/planner' element={<Planner/>} />
          <Route path='/hosting' element={<Hosting/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
