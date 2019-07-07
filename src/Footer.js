import React from 'react';
import './Footer.css';
import FooterNav from './FooterNav';
import { FooterNavLink1 } from './FooterNavLink1';
import { FooterNavLink2 } from './FooterNavLink2';
import { FooterNavLink3 } from './FooterNavLink3';

const Footer = () => {
  return(
    <footer className='footer'>
      <div className='footer_inner'>
        <div className='footer_l'>
          <div className='footer_l_t'>
            <img className='footerLogo' src='https://togahouse.jp/img/common/logo.svg' alt=''/><br/>
          </div>
          <div className='footer_l_b'>
            <img className='footerName' src='https://togahouse.jp/img/common/tgl_company.svg'alt=''/><br/>
            <span id='address'>愛知県名古屋市熱田区桜田町19-18</span><br/>
            <span id='TEL'>TEL.052-882-6283</span><br/>
            <span id='copyright'>© 2018 TOHO GAS LIVING co.,ltd.</span><br/>
          </div>
        </div>

        <div className='footer_r'>
          <nav>
            <FooterNav FooterNavLink = { FooterNavLink1 }/>
            <FooterNav FooterNavLink = { FooterNavLink2 }/>
            <FooterNav FooterNavLink = { FooterNavLink3 }/>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
