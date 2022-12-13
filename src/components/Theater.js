import React from 'react'
import { useNavigate } from 'react-router-dom'

const Theater = () => {

  const navigate = useNavigate();

  const handleTicketCounter = () => {
    navigate("/ticket-counter");
  };

  return (
    <div>
      <h1>This is Theater Page</h1>
      <button onClick={handleTicketCounter}>Go To Ticket Counter</button>
      <button onClick={()=> navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Theater;