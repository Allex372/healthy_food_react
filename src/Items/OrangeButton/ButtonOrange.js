import React from "react";
import './ButtonOrange.css';

function ButtonOrange (props) {
  return(
      <div>
        <button
            style={(props.color === 'white'? {backgroundColor: 'white', border: '1px solid #DC780B', color: '#DC780B'}: {backgroundColor: '#DC780B'})}
            className='btn'>
            {props.title}
        </button>
      </div>
  )
}

export default ButtonOrange;
