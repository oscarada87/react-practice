import React from 'react';
import './Header.css';
import SquareButton from './SquareButton';
import HeaderNav from './HeaderNav';
import { HeaderNavLink } from './HeaderNavLink'

const Header = () =>{
  return(
    <header className='header'>
      <div className='header_top clearfix'>
        <h1 className='header_title'>愛知・岐阜・三重「DESIGN × COMFORT」な住まいをつくる 東邦ガスグループの新築・リフォーム総合住宅ブランド「トーガハウス」</h1>
        <div className='header_left'>
          <SquareButton name='お問い合わせ・資料請求' id='header_btn'/>
          <div className='menu_btn'>
            <p>全メニューを表示</p>
          </div>
          <div className='menu_line'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className='header_bot clearfix'>
        <img src='https://togahouse.jp/img/common/logo.svg' alt='' className='header_logo'/>
        <nav className='header_nav'>
          <HeaderNav HeaderNavLink = { HeaderNavLink }/>
        </nav>
      </div>
    </header>
  );
}

export default Header;
