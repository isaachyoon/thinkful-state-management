import React from 'react';
import './Card.css';

function Card(props) {
  console.log(props)
  return (
    <div className="card-container">
      <strong>{props.info.name}</strong>
      <label>{props.info.occupation}</label>
      <label>{props.info.work}</label>
      <button type="button" onClick={() => props.fireProp(props.info.id)}>Fire</button>
    </div>
  );
}

export default Card;
