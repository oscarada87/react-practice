import React from 'react';
import './FooterNav.css';

const FooterNav = ({ FooterNavLink }) =>{
  const FooterNavArray = FooterNavLink.map((user,i) =>{
    return (
      <li className='footer_li'>
        <a className={FooterNavLink[i].classname}href={FooterNavLink[i].URL}>{ FooterNavLink[i].text }</a>
      </li>
    );
  })

  return(
    <ul className='footer_ul'>
      { FooterNavArray }
    </ul>
  );
}

export default FooterNav;
