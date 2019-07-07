import React from 'react';
import './Togahaku.css';
import SquareButton from './SquareButton';

const Togahaku = () =>{
  return(
    <div className='Togahaku'>
      <div className='txt_wrap'>
        <img className='TogahakuImg' alt='' src='https://togahouse.jp/img/common/bnr_togahaku_title.png'/>
        <p className='TogahakuPara'>
          高気密・高断熱のデザイン住宅、トーガの家。
          <br/>
          泊まれるからこそ体感できる、デザインと快適性能を兼ね備えた、トーガ最上級仕様の機能美。
        </p>
        <SquareButton id='TogaButton'className='TogahakuComp' name='詳しくみる'/>
      </div>
    </div>
  );
}

export default Togahaku;
