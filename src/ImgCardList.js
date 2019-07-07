import React from 'react';
import ImgCard from './ImgCard';

const ImgCardList = ({ ImgCardLink }) => {
  const ImgCardArray = ImgCardLink.map((user, i) => {
    return <ImgCard id = { ImgCardLink[i].id } link = { ImgCardLink[i].link }/>
  })

  return(
    <div>
      { ImgCardArray }
    </div>
  );
}

export default ImgCardList;
