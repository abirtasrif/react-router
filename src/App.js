import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Theater from './components/Theater';
import TicketCounter from './components/TicketCounter';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/theater" element={<Theater />}/>
        <Route path="/ticket-counter" element={<TicketCounter />}/>
      </Routes>
    </div>
  )
}

export default App;