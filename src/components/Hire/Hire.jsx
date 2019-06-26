import React from 'react';
import './Hire.css';

function Hire(props) {
  return (
    <div className="Hire">
      <button onClick={() => props.addEmployee()}>Hire</button>
    </div>
  );
}

export default Hire;
