'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import '@/styles/home.css';
import Layer1 from '@/assets/images/home/layer-1.svg';
import Layer2 from '@/assets/images/home/layer-2.svg';
import Layer3 from '@/assets/images/home/layer-3.svg';
import Layer4 from '@/assets/images/home/layer-4.svg';
import Layer5 from '@/assets/images/home/layer-5.svg';
import Layer6 from '@/assets/images/home/layer-6.svg';

function Page() {
  useEffect(() => {
    const layer1 = document.getElementById('layer-1');
    const layer2 = document.getElementById('layer-2');
    const layer3 = document.getElementById('layer-3');
    const layer4 = document.getElementById('layer-4');
    const layer5 = document.getElementById('layer-5');
    const layer6 = document.getElementById('layer-6');
    const layer7 = document.getElementById('layer-7');
    const heading1: any = document.getElementById('heading-1');
    const heading2: any = document.getElementById('heading-2');
    const heading3: any = document.getElementById('heading-3');

    window.addEventListener('scroll', () => {
      debugger;
      let value = window.scrollY;

      heading1.style.bottom = value * 2.5 + 'px';
      heading2.style.bottom = value * 2.1 + 'px';
      heading3.style.bottom = value * 1.8 + 'px';
    });
  }, []);

  return (
    <main className='header-container'>
      <div className='home-top-background'>
        <div className='parallax-container'>
          <div id='layer-7'>
            <div
              style={{
                width: 200,
                height: 200,

                mixBlendMode: 'color-dodge',
                background:
                  'radial-gradient(100.00% 100.00% at Infinity% Infinity%, #FF8235 0%, #DC702F 10%, #904922 36%, #532B17 58%, #271410 77%, #0C070B 91%, #02020A 100%)',
              }}
            ></div>
          </div>

          <Image width={4000} src={Layer6} id='layer-6' alt={''} />
          <Image width={4000} src={Layer5} id='layer-5' alt={''} />
          <Image width={4000} src={Layer4} id='layer-4' alt={''} />
          <div
            id='heading-1'
            className='tracking-widest uppercase poppins-bold'
          >
            Shaping Tomorrow
          </div>
          <Image width={4000} src={Layer3} id='layer-3' alt={''} />

          <div
            id='heading-2'
            className='uppercase poppins-bold tracking-widest'
          >
            Simple Software, Big Impact
          </div>
          <Image width={4000} src={Layer2} id='layer-2' alt={''} />

          <div
            id='heading-3'
            className='uppercase poppins-bold text-center tracking-wide'
          >
            Join forces with our talented team, accelerating your <br /> amazing
            concept towards global success
          </div>

          <Image width={4000} src={Layer1} id='layer-1' alt={''} />
        </div>
      </div>
      <div className='home-bottom-background'></div>
    </main>
  );
}

export default Page;
