import React from 'react';
import './HeaderNav.css';

const HeaderNav = ({ HeaderNavLink }) =>{
  const HeaderNavArray = HeaderNavLink.map((user, i) =>{
    return(
      <li className='header_li'>
        <a className='header_a' href={HeaderNavLink[i].URL}>{HeaderNavLink[i].text}</a>
      </li>
    );
  })
  return(
    <ul className='header_ul'>
      { HeaderNavArray }
    </ul>
  );
}

export default HeaderNav;
