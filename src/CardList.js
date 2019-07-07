import React from 'react';
import Card from './Card';


const CardList = ({ CardImgLink }) => {
  const CardArray = CardImgLink.map((user, i) => {
    return <Card id = { CardImgLink[i].id } link = { CardImgLink[i].link }/>
  })

  return(
    <div>
      {CardArray}
    </div>
  );
}

export default CardList;
