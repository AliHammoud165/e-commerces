// Footer.tsx

import { Logo } from '@/app/assets/icons/logo';
import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-light-green-gray text-white h-[200px] p-4 mt-10 ">
      <div className="max-w-7xl mx-auto xs:flex items-center justify-between">
        <div className="flex items-center xs:w-fit w-full justify-center">
        <div className=' w-fit '><Logo/></div>
        </div>

        <div className='xs:w-fit w-full justify-center mt-10 xs:mt-0'>
          <p>Contact Us: contact@example.com</p>
          <p>Follow us on social media:</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
