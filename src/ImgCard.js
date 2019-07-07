import React from 'react';
import './ImgCard.css'


const ImgCard = ({id, link}) =>{
  return(
    <img src={`${link}`} alt='house'/>
  )
}

export default ImgCard;
