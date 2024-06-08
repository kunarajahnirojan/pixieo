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
    <div className='text-white px-20 py-96 flex flex-row items-center justify-center'>
      <div>
        <div>
          <ul className='orbit-wrap'>
            <li>
              <ul className='ring'>
                <li>
                  <Image
                    width={50}
                    src={centerImage.url}
                    alt={centerImage.title}
                  />
                </li>

                <li>
                  <Image width={50} src={I1} alt={centerImage.title} />
                </li>
                <li>
                  <Image width={50} src={I2} alt={centerImage.title} />
                </li>
                <li>
                  <Image width={50} src={I3} alt={centerImage.title} />
                </li>
                <li>
                  <Image width={50} src={I4} alt={centerImage.title} />
                </li>
                <li>
                  <Image width={50} src={I5} alt={centerImage.title} />
                </li>
                <li>
                  <Image width={50} src={I6} alt={centerImage.title} />
                </li>
                <li>
                  <Image width={50} src={I7} alt={centerImage.title} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div>Hello Man</div>
    </div>
  );
}

export default Industries;
