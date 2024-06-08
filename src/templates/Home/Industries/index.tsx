import React from 'react';
import '@/styles/home-industries.css';
import CenterImage from '@/assets/images/home-industries/industries-man.svg';
import I1 from '@/assets/images/home-industries/ind1.svg';
import I2 from '@/assets/images/home-industries/ind2.svg';
import I3 from '@/assets/images/home-industries/ind3.svg';
import I4 from '@/assets/images/home-industries/ind4.svg';
import I5 from '@/assets/images/home-industries/ind5.svg';
import I6 from '@/assets/images/home-industries/ind6.svg';
import I7 from '@/assets/images/home-industries/ind7.svg';
import I8 from '@/assets/images/home-industries/ind8.svg';
import Image from 'next/image';

function Industries() {
  const centerImage = {
    url: CenterImage,
    title: 'Center Image',
  };

  return (
    <div className='text-white px-20 py-96 flex flex-row items-center justify-around'>
      <div>
        <ul className='orbit-wrap tracking-wider poppins-medium'>
          <li>
            <div className='card flex flex-row justify-around items-center p-2'>
              <Image width={50} src={I1} alt={centerImage.title} />
              <p className='text-sm'>Fitness</p>
            </div>
          </li>

          <li>
            <div className='card flex flex-row justify-around items-center p-2'>
              <Image width={50} src={I2} alt={centerImage.title} />
              <p className='text-sm'>Hospitality</p>
            </div>
          </li>

          <li>
            <div className='card flex flex-row justify-around items-center p-2'>
              <Image width={50} src={I3} alt={centerImage.title} />
              <p className='text-sm'>Manufacturing</p>
            </div>
          </li>

          <li>
            <div className='card flex flex-row justify-around items-center p-2'>
              <Image width={50} src={I4} alt={centerImage.title} />
              <p className='text-sm'>Entertainment</p>
            </div>
          </li>

          <li>
            <div className='card flex flex-row justify-around items-center p-2'>
              <Image width={50} src={I5} alt={centerImage.title} />
              <p className='text-sm'>Retail</p>
            </div>
          </li>

          <li>
            <div className='card flex flex-row justify-around items-center p-2'>
              <Image width={50} src={I6} alt={centerImage.title} />
              <p className='text-sm'>Banking & Finance</p>
            </div>
          </li>

          <li>
            <div className='card flex flex-row justify-around items-center p-2'>
              <Image width={50} src={I7} alt={centerImage.title} />
              <p className='text-sm'>Education</p>
            </div>
          </li>

          <li>
            <div className='card flex flex-row justify-around items-center p-2'>
              <Image width={50} src={I8} alt={centerImage.title} />
              <p className='text-sm'>Restaurants</p>
            </div>
          </li>
        </ul>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <p className='poppins-bold text-3xl uppercase'>
          Versatile Proficiency In Multiple
        </p>

        <div className='industries-card text-4xl poppins-bold uppercase flex flex-col justify-center text-center p-3'>
          <p> Industries</p>
        </div>

        <div
          style={{ width: 80, height: 30, borderBottom: '1px #00FF0A solid' }}
        />

        <div className='text-sm poppins-semibold text-center tracking-wide p-3 text-justify'>
          <p>
            We deliver cutting-edge software that transforms manufacturing
            processes, driving efficiency, and innovation for industry leaders
          </p>
        </div>

        <div
          style={{ width: 500, height: 30, borderBottom: '1px #00FF0A solid' }}
        />
      </div>
    </div>
  );
}

export default Industries;
