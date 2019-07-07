import React from 'react';
import './NewsItem.css';

const NewsItem = (props) =>{
  return(
    <li className='NewsLi'>
      <span className='NewsDate'>{props.date}</span>
      <span className='NewsDiv'>{props.type}</span>
      <span className='NewsCont'>{props.content}</span>
      <hr className='NewsHr'/>
    </li>
  )
}

export default NewsItem;
