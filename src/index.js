import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import ImgCardList from './ImgCardList';
import FirstMainImg from './FirstMainImg';
import Paragraph from './Paragraph';
import Item from './Item';
import registerServiceWorker from './registerServiceWorker';
import { ImgCardLink } from './ImgCardLink';
import Togahaku from './Togahaku';
import SquareButton from './SquareButton';
import News from './News';
import { NewsSource } from './NewsSource';
import HouseList from './HouseList';
import { HouseLink } from './HouseLink';
import Footer from './Footer';

ReactDOM.render(
  <div>
    <Header />
    <FirstMainImg />
    <Paragraph />
    <Item title = '施工事例' subtitle = 'WORKS'/>
    <ImgCardList ImgCardLink = { ImgCardLink }/>
    <SquareButton name = '施工事例一覧へ'/>
    <Item title = '新築住宅シリーズ紹介' subtitle = 'SERIES OF TOGA HOUSE'/>
    <HouseList HouseLink = { HouseLink }/>
    <Togahaku />
    <Item title = 'お知らせ' subtitle = 'NEWS'/>
    <News NewsSource = { NewsSource }/>
    <SquareButton name = '過去のお知らせをみる'/>
    <Footer />
  </div>
, document.getElementById('root'));
registerServiceWorker();
