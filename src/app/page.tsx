'use client';
import React from 'react';
import '@/styles/home.css';
import Parallax from '@/templates/Home/Parralax';
import Services from '@/templates/Home/Service';
import Industries from '@/templates/Home/Industries';

function Page() {
  return (
    <main className='header-container'>
      <Parallax />
      <div className='home-bottom-background'>
        <div className='uppercase text-white poppins-bold text-4xl text-center py-40'>
          Our Services
        </div>

        <div>
          <Services />
        </div>

        <div className='py-40'>
          <Industries />
        </div>
      </div>
    </main>
  );
}

export default Page;
