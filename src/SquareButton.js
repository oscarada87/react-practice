import React from 'react';
import './SquareButton.css';

const SquareButton = (props) =>{
  return(
    <button className='SquareButton' id={props.id} type='button'>{props.name}</button>
  );
}

export default SquareButton;
