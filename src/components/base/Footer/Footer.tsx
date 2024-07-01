import '@/styles/footer.css';
import Image from 'next/image';
import BeachMan from '@/assets/images/footer/beach-man.svg';
import LocationMap from '@/assets/images/footer/map.svg';
import PhoneIcon from '@/assets/images/footer/phone.svg';
import MailIcon from '@/assets/images/footer/mail.svg';
import LocationIcon from '@/assets/images/footer/location.svg';
import Button from '@/components/shared/Button';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/constants/icons';

const Footer = () => {
  return (
    <div className='footer flex flex-col'>
      <div className='relative'>
        <div className='wave'></div>
        <div className='wave2'></div>
      </div>

      <div className='footer-container flex flex-row justify-around items-center'>
        <section className='relative flex flex-row'>
          <Image src={BeachMan} alt='relaxation' priority={true} />

          <div
            style={{
              position: 'absolute',
              width: '30vw',
              left: 90,
              right: 0,
              top: -10,
            }}
          >
            <Button color='#1E2F61' name='Schedule a meeting' />
          </div>
        </section>
        <section className='flex flex-col gap-10'>
          <div className='flex flex-row items-center gap-2'>
            <Image src={PhoneIcon} alt='relaxation' priority={true} />

            <text className='text-purple-300 poppins-semibold text-sm'>
              +94 21 2324323121313
            </text>
          </div>

          <div className='flex flex-row items-center gap-2'>
            <Image src={MailIcon} alt='relaxation' priority={true} />

            <text className='text-purple-300 poppins-semibold text-sm'>
              info@pixieo.io
            </text>
          </div>

          <div className='flex flex-row items-center gap-2'>
            <Image src={LocationIcon} alt='relaxation' priority={true} />

            <text className='text-purple-300 poppins-semibold text-sm'>
              Jaffna, Sri Lanka{' '}
            </text>
          </div>
        </section>
        <section className='flex flex-col gap-10'>
          <Image src={LocationMap} alt='relaxation' priority={true} />
        </section>
      </div>

      <section className='flex flex-row justify-around items-center gap-10'>
        <div></div>
        <div className='text-white poppins-semibold text-sm'>
          Copyright © 2024 Pixieo. All Rights Reserved
        </div>
        <div className='flex flex-row items-center gap-6'>
          <LinkedinIcon />

          <FacebookIcon />

          <InstagramIcon />
        </div>
      </section>
    </div>
  );
};

export default Footer;
