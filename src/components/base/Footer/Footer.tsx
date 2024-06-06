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
    <div className='footer'>
      <div className='footer-top-container'>
        <div className='wave'></div>
        <div className='wave2'></div>
      </div>

      <div className='footer-container'>
        <section className='footer-left-container'>
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
        <section className='footer-center-container'>
          <div className='footer-contact-info'>
            <Image src={PhoneIcon} alt='relaxation' priority={true} />

            <text className='text-purple-300 poppins-semibold text-sm tracking-wide'>
              +94 21 2324323121313
            </text>
          </div>

          <div className='footer-contact-info'>
            <Image src={MailIcon} alt='relaxation' priority={true} />

            <text className='text-purple-300 poppins-semibold text-sm tracking-wide'>
              info@piratehub.io
            </text>
          </div>

          <div className='footer-contact-info'>
            <Image src={LocationIcon} alt='relaxation' priority={true} />

            <text className='text-purple-300 poppins-semibold text-sm tracking-wide'>
              Jaffna, Sri Lanka{' '}
            </text>
          </div>
        </section>
        <section className='footer-right-container'>
          <Image src={LocationMap} alt='relaxation' priority={true} />
        </section>
      </div>

      <section className='footer-bottom-container'>
        <div></div>
        <div className='text-white poppins-semibold text-sm tracking-wide'>
          Copyright © 2024 Piratehub. All Rights Reserved
        </div>
        <div className='footer-social-media-info'>
          <LinkedinIcon />

          <FacebookIcon />

          <InstagramIcon />
        </div>
      </section>
    </div>
  );
};

export default Footer;
