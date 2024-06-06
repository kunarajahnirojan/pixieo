import React from 'react';
import '@/styles/components.css';
import Image from 'next/image';
import Logo from '@/assets/images/logo.svg';
import Button from '@/components/shared/Button';

function Header() {
  return (
    <header className='header'>
      <div className='header-left-container'>
        <Image src={Logo} alt='Pirate Hub' priority={true} />
      </div>
      <div className='header-center-container'>
        <h1 className='text-sm poppins-semibold text-white uppercase'>Home</h1>
        <h1 className='text-sm poppins-semibold text-white uppercase'>
          About Us
        </h1>
        <h1 className='text-sm poppins-semibold text-white uppercase'>
          Services
        </h1>
        <h1 className='text-sm poppins-semibold text-white uppercase'>Blogs</h1>
      </div>

      <div className='header-right-container'>
        <Button name='Careers' color='#1E2F61' />
        <Button name='Contact Us' color='#1E2F61' />
      </div>
    </header>
  );
}

export default Header;
