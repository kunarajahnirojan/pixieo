'use client';
import React from 'react';
import '@/styles/home.css';
import Parallax from '@/templates/Home/Parralax';
import Services from '@/templates/Home/Services';
import Industries from '@/templates/Home/Industries';

function Page() {
  return (
    <main className='header-container'>
      <Parallax />
      <div className='home-bottom-background'>
        <div className='flex flex-row justify-center py-40'>
          <div className='uppercase text-white poppins-bold text-4xl'>
            Our Services
          </div>
        </div>
        <div>
          <Services />
        </div>
      </div>
    </main>
  );
}

export default Page;
