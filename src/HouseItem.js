import React from 'react';
import RoundButton from './RoundButton';
import './HouseItem.css';

const HouseItem = (props) =>{
  return(
    <div className='HouseItem'>
      <img className='HouseImg' src={`${props.ImgLink}`} alt=''/>
      <div className='HouseLogoContainer'>
        <img className='HouseLogo' src={`${props.LogoLink}`} alt=''/>
      </div>
      <p className='HousePar'>{props.Paragraph}</p>
      <div className='HouseButton'>
        <RoundButton  name = {`${props.ButtonText}`}/>
      </div>
      <hr className='HouseHr'/>
    </div>
  );
}

export default HouseItem;
