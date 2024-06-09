'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import '@/styles/home-parallax.css';
import Layer1 from '@/assets/images/home/layer-1.svg';
import Layer2 from '@/assets/images/home/layer-2.svg';
import Layer3 from '@/assets/images/home/layer-3.svg';
import Layer4 from '@/assets/images/home/layer-4.svg';
import Layer5 from '@/assets/images/home/layer-5.svg';
import Layer6 from '@/assets/images/home/layer-6.svg';

function Parallax() {
  useEffect(() => {
    const layer1 = document.getElementById('layer-1');
    const layer2: any = document.getElementById('layer-2');
    const layer3: any = document.getElementById('layer-3');
    const layer4 = document.getElementById('layer-4');
    const layer5 = document.getElementById('layer-5');
    const layer6 = document.getElementById('layer-6');
    const layer7: any = document.getElementById('layer-7');
    const heading1: any = document.getElementById('heading-1');
    const heading2: any = document.getElementById('heading-2');
    const heading3: any = document.getElementById('heading-3');
    const paralContainer: any = document.getElementById('parallax-container');

    window.addEventListener('scroll', () => {
      let value = window.scrollY;
      paralContainer.style.position = 'fixed';
      heading1.style.bottom = value * 2.5 + 'px';
      layer2.style.marginLeft = -value + 'px';
      layer3.style.marginLeft = value + 'px';

      if (value >= 150) {
        heading2.style.bottom = value * 2.2 + 'px';
      } else {
        heading2.style.bottom = 0;
      }

      if (value >= 200) {
        heading3.style.bottom = value * 1.8 + 'px';
      } else {
        heading3.style.bottom = 0;
      }

      if (value >= 350) {
        paralContainer.style.position = 'absolute';
      }
      console.log(value);
    });
  }, []);

  return (
    <div>
      <div className='home-top-background'>
        <div id='parallax-container'>
          <div id='layer-7' />

          <Image width={4000} src={Layer6} id='layer-6' alt={''} />
          <Image width={4000} src={Layer5} id='layer-5' alt={''} />
          <Image width={4000} src={Layer4} id='layer-4' alt={''} />
          <div id='heading-1' className=' uppercase poppins-bold'>
            Shaping Tomorrow
          </div>
          <Image width={4000} src={Layer3} id='layer-3' alt={''} />

          <div id='heading-2' className='uppercase poppins-bold'>
            Simple Software, Big Impact
          </div>
          <Image width={4000} src={Layer2} id='layer-2' alt={''} />

          <div id='heading-3' className='uppercase poppins-bold text-center'>
            Join forces with our talented team, accelerating your <br /> amazing
            concept towards global success
          </div>

          <Image width={4000} src={Layer1} id='layer-1' alt={''} />
        </div>
      </div>
    </div>
  );
}

export default Parallax;
