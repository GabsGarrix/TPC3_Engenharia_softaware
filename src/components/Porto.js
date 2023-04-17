import React from 'react'
import Cartao from './Cartao'
import './portos.css'; 

const Porto = ({cards}) => {
  return (
    <div className="grid-container">
      <Cartao cards = {cards} />
      
    </div>
  )
}

export default Porto;
