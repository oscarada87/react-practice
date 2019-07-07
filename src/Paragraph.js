import React from 'react';
import './Paragraph.css';

const Paragraph = () =>{
  return(
    <div className = 'background'>
      <div className = 'toptext container'>
        <h2>デザイン性と快適性が融合する住まいづくり</h2>
        <h6 id = 'slogan'>DESIGN x COMFORT</h6>
      </div>
      <div className = 'paragraph container'>
        <p>「
          トーガハウス」は東邦ガスのグループ会社である東邦ガスリビングが展開する住宅ブランドです。新築住宅からリフォーム・リノベーションまで、お客さまのご要望を最大限に実現する住まいづくりをしております。ガス機器を取り扱う会社ならではの快適性能はもちろん、デザイン性でも妥協をしないご提案をさせていただきます。
        </p>
        <p>
          新築住宅ブランドでは、最上級ブランドの「トーガ」をはじめ、4ラインを取り揃えております。また、お客さまとは一生のお付き合いをしていきたいと考え、アフターフォロー体制も整えておりますので、建てた後も安心して暮らしていただけます。一生に一度の大きな買い物であるからこそ、よりよいパートナーとして、お客さまとともに歩んでいける会社を目指しています。
        </p>
      </div>
    </div>
  );
}

export default Paragraph;
