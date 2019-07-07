import React from 'react';
import './RoundButton.css';

const RoundButton = (props) =>{
  return(
    <button className='RoundButton' type='button'>{props.name}</button>
  );
}

export default RoundButton;
