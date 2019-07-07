import React from 'react';
import NewsItem from './NewsItem';
import './News.css';

const News = ({ NewsSource }) =>{
  const NewsList = NewsSource.map((user, i) =>{
      return <NewsItem id = { NewsSource[i].id } date = {  NewsSource[i].date } type = { NewsSource[i].type }content = { NewsSource[i].content }/>
  })
  return(
    <div class='NewsOuter'>
      <div class='NewsInner'>
        { NewsList }
      </div>
    </div>
  );
}

export default News;
