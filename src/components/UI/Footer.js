import React from 'react';
import image from '../../assets/pc-logo.png'
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-indigo-600 text-white">
  <div>
    <Image src={image} alt='' width={80} height={80}></Image>
    <p className="font-bold">
      PC Builder Ltd.  
    </p> 
    <p>Copyright © 2023 - All right reserved</p>
  </div> 
  <div>
  </div>
</footer>
    );
};

export default Footer;