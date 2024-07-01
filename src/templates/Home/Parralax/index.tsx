import React, { useEffect } from 'react';
import Image from 'next/image';
import Layer1 from '@/assets/images/home/layer-1.svg';
import Layer2 from '@/assets/images/home/layer-2.svg';
import Layer3 from '@/assets/images/home/layer-3.svg';
import Layer4 from '@/assets/images/home/layer-4.svg';
import Layer5 from '@/assets/images/home/layer-5.svg';
import Layer6 from '@/assets/images/home/layer-6.svg';
import '@/styles/home-parallax.css';

function Parallax() {
  useEffect(() => {
    const layer1: any = document.getElementById('layer-1');
    const layer2: any = document.getElementById('layer-2');
    const layer3: any = document.getElementById('layer-3');
    const layer4: any = document.getElementById('layer-4');
    const layer5: any = document.getElementById('layer-5');
    const layer6: any = document.getElementById('layer-6');
    const layer7: any = document.getElementById('layer-7');
    const heading1: any = document.getElementById('heading-1');
    const heading2: any = document.getElementById('heading-2');
    const heading3: any = document.getElementById('heading-3');
    const paralContainer: any = document.getElementById('parallax-container');

    let latestKnownScrollY = 0;
    let ticking = false;
    let speed = 0.1;

    function updateElements(scrollY: any) {
      if (layer2 && layer3) {
        layer2.style.transform = `translateX(${-scrollY * speed}px)`;
        layer3.style.transform = `translateX(${scrollY * speed}px)`;
      }

      if (scrollY >= 150) {
        heading1.classList.add('visible');
        layer1.classList.add('zoom-effect');
      } else {
        heading1.classList.remove('visible');
        layer1.classList.remove('zoom-effect');
      }

      if (scrollY >= 300) {
        heading2.classList.add('visible');
        layer4.style.transform = `translateX(${-scrollY * speed}px)`;
        layer5.style.transform = `translateX(${scrollY * speed}px)`;
        layer1.classList.add('zoom-effect');
      } else {
        heading2.classList.remove('visible');
        layer1.classList.remove('zoom-effect');
      }

      if (scrollY >= 450) {
        heading3.classList.add('visible');
        layer1.classList.add('zoom-effect');
        layer6.classList.add('zoom-effect');
      } else {
        heading3.classList.remove('visible');
        layer1.classList.remove('zoom-effect');
        layer6.classList.remove('zoom-effect');
      }

      if (scrollY >= 1200) {
        paralContainer.classList.add('absolute');
      } else {
        paralContainer.classList.remove('absolute');
      }

      if (scrollY >= 600 && scrollY < 1000) {
        speed = 0.05;
      } else {
        speed = 0.1;
      }

      if (layer7) {
        const moonScrollFactor = 0.1;
        const initialRight = 100;
        const finalRight = 8;
        const initialTop = 200;
        const finalTop = 10;
        const moonRightPosition = Math.max(
          initialRight - scrollY * moonScrollFactor,
          finalRight
        );
        const moonTopPosition = Math.max(
          initialTop - scrollY * moonScrollFactor,
          finalTop
        );
        layer7.style.transform = `translateX(-${
          initialRight - moonRightPosition
        }%) translateY(-${initialTop - moonTopPosition}%)`;
      }
    }

    function onScroll() {
      latestKnownScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          updateElements(latestKnownScrollY);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div>
      <div className='home-top-background'>
        <div id='parallax-container'>
          <div id='layer-7'></div>

          <Image width={4000} src={Layer6} id='layer-6' alt='' />
          <Image width={4000} src={Layer5} id='layer-5' alt='' />
          <Image width={4000} src={Layer4} id='layer-4' alt='' />
          <div id='heading-1' className='heading uppercase poppins-bold'>
            Shaping Tomorrow
          </div>
          <Image width={4000} src={Layer3} id='layer-3' alt='' />

          <div id='heading-2' className='heading uppercase poppins-bold'>
            Simple Software, Big Impact
          </div>

          <div
            id='heading-3'
            className='description uppercase poppins-bold text-center text-white text-xs absolute'
          >
            Join forces with our talented team, accelerating your <br /> amazing
            concept towards global success
          </div>

          <Image width={4000} src={Layer2} id='layer-2' alt='' />
          <Image width={4000} src={Layer1} id='layer-1' alt='' />
        </div>
      </div>
    </div>
  );
}

export default Parallax;
