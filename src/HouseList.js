import React from 'react';
import HouseItem from './HouseItem';
import './HouseList.css';

const HouseList = ({ HouseLink }) =>{
  const HouseArray = HouseLink.map((user, i) =>{
    return <HouseItem id = { HouseLink[i].id } ImgLink = { HouseLink[i].ImgLink } LogoLink = { HouseLink[i].LogoLink } Paragraph = { HouseLink[i].Paragraph } ButtonText = { HouseLink[i].ButtonText }/>

  })
  return(
    <div>
      <div className='HouseList'>
        { HouseArray }
      </div>
      <div className='AdBackground'>
        <p className='AdText'>土地探しからご検討されているお客さまも、お気軽にご相談ください。最適な土地探しのお手伝いをさせていただきます。</p>
      </div>
    </div>
  )
}

export default HouseList;
