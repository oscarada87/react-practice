import React from 'react';
import './Card.css'


const Card = ({id, link}) =>{
  return(
    <img src={`${link}`} alt='house'/>
  )
}

export default Card;
