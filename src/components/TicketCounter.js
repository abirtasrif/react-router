import React from 'react'
import { useNavigate } from 'react-router-dom';

const TicketCounter = () => {
  
  const navigate = useNavigate();

  const handleHome = () =>{
    navigate("/");
  }

  
  return (
    <div>
      <h1>Welcome to the Ticket Counter !</h1>
      <button onClick={handleHome}>Go to Home</button>
    </div>
  )
}

export default TicketCounter;