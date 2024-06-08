import React from 'react';
import Image from 'next/image';
import '@/styles/home-services.css';
import Icon1 from '@/assets/images/home-services/icon-5.svg';
import Icon2 from '@/assets/images/home-services/icon-9.svg';
import Icon3 from '@/assets/images/home-services/icon-3.svg';
import Icon4 from '@/assets/images/home-services/icon-4.svg';
import Icon5 from '@/assets/images/home-services/icon-1.svg';
import Icon6 from '@/assets/images/home-services/icon-7.svg';
import Icon7 from '@/assets/images/home-services/icon-1.svg';
import Icon8 from '@/assets/images/home-services/icon-6.svg';
function Services() {
  return (
    <main className='flex flex-col gap-10'>
      <div className='grid grid-cols-3 gap-16 px-80'>
        <div className='service-card text-white flex justify-center flex-col items-center px-4 gap-4'>
          <Image alt='web' src={Icon1} />
          <div className='uppercase text-white poppins-semibold text-lg text-center'>
            Web application <br />
            development
          </div>

          <div className='text-white poppins text-xs text-center'>
            Crafting seamless, scalable web applications tailored to meet modern{' '}
            business challenges
          </div>

          <div className='text-white poppins text-md py-10'>Explore</div>
        </div>
        <div className='service-card text-white flex justify-center flex-col items-center px-4 gap-4'>
          <Image alt='mobile' src={Icon2} />
          <div className='uppercase text-white poppins-semibold text-lg text-center'>
            mobile application <br />
            development
          </div>

          <div className='text-white poppins text-xs text-center'>
            Developing intuitive, cross-platform mobile apps designed for
            maximum user engagement
          </div>

          <div className='text-white poppins text-md py-10'>Explore</div>
        </div>
        <div className='service-card text-white flex justify-center flex-col items-center px-4 gap-4'>
          <Image alt='digital' src={Icon3} />
          <div className='uppercase text-white poppins-semibold text-lg text-center'>
            digital marketing <br />& seo
          </div>

          <div className='text-white poppins text-xs text-center'>
            Boosting online presence and engagement through strategic digital
            marketing and SEO
          </div>

          <div className='text-white poppins text-md py-10'>Explore</div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-16 px-40'>
        <div className='service-card text-white flex justify-center flex-col items-center px-4 gap-4'>
          <Image alt='it' src={Icon4} />
          <div className='uppercase text-white poppins-semibold text-lg text-center'>
            it <br />
            consultancy
          </div>

          <div className='text-white poppins text-xs text-center'>
            Driving digital transformations with cutting-edge tech for
            competitive business advantages.
          </div>

          <div className='text-white poppins text-md py-10'>Explore</div>
        </div>
        <div className='service-card text-white flex justify-center flex-col items-center px-4 gap-4'>
          <Image alt='iot' src={Icon5} />
          <div className='uppercase text-white poppins-semibold text-lg text-center'>
            iot <br />
            services
          </div>

          <div className='text-white poppins text-xs text-center'>
            Transforming objects into smart devices for increased efficiency and
            innovative solutions
          </div>

          <div className='text-white poppins text-md py-10'>Explore</div>
        </div>
        <div className='service-card text-white flex justify-center flex-col items-center px-4 gap-4'>
          <Image alt='outsourcing' src={Icon6} />
          <div className='uppercase text-white poppins-semibold text-lg text-center'>
            out sourcing <br />
            services
          </div>

          <div className='text-white poppins text-xs text-center'>
            Delivering project excellence and innovation through top-tier talent
            and technology outsourcing
          </div>

          <div className='text-white poppins text-md py-10'>Explore</div>
        </div>
        <div className='service-card text-white flex justify-center flex-col items-center px-4 gap-4'>
          <Image alt='iot' src={Icon7} />
          <div className='uppercase text-white poppins-semibold text-lg text-center'>
            iot <br />
            services
          </div>

          <div className='text-white poppins text-xs text-center'>
            Transforming objects into smart devices for increased efficiency and
            innovative solutions
          </div>

          <div className='text-white poppins text-md py-10'>Explore</div>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-16 px-100'>
        <div className='service-card text-white flex justify-center flex-col items-center px-4 gap-4'>
          <Image alt='ui/ux' src={Icon8} />
          <div className='uppercase text-white poppins-semibold text-lg text-center'>
            ui/ux <br />
            design
          </div>

          <div className='text-white poppins text-xs text-center'>
            Designing visually stunning, user-friendly interfaces for optimal
            digital interaction and satisfaction
          </div>

          <div className='text-white poppins text-md py-10'>Explore</div>
        </div>
        <div className='service-card text-white flex justify-center flex-col items-center px-4 gap-4'>
          <Image alt='uiux' src={Icon8} />
          <div className='uppercase text-white poppins-semibold text-lg text-center'>
            ui/ux <br />
            design
          </div>

          <div className='text-white poppins text-xs text-center'>
            Designing visually stunning, user-friendly interfaces for optimal
            digital interaction and satisfaction
          </div>

          <div className='text-white poppins text-md py-10'>Explore</div>
        </div>
      </div>
    </main>
  );
}

export default Services;
