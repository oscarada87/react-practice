import React from 'react';
import './Item.css';

const Item = (props) =>{
  return(
    <div className = 'Item'>
      <h2 className = 'ItemTitle'>{props.title}</h2>
      <h4 className = 'ItemSubtitle'>{props.subtitle}</h4>
    </div>
  );
}

export default Item;
