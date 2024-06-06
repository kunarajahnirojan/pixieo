import Image from 'next/image';
import Linkedin from '@/assets/images/footer/linkedin.svg';
import Facebook from '@/assets/images/footer/facebook.svg';
import Instagram from '@/assets/images/footer/instagram.svg';

export const LinkedinIcon = () => {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <Image
        width={35}
        height={35}
        src={Linkedin}
        alt='linkedin'
        priority={true}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <svg width='100' height='100'>
        <linearGradient id='linear-1' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#0085FF'></stop>
          <stop offset='100%' stop-color='#00427E'></stop>
        </linearGradient>

        <circle
          r='25'
          cx='50'
          cy='50'
          stroke-width='4'
          fill='none'
          stroke='url(#linear-1)'
        ></circle>
      </svg>
    </div>
  );
};

export const FacebookIcon = () => {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <Image
        width={30}
        height={30}
        src={Facebook}
        alt='facebook'
        priority={true}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <svg width='100' height='100'>
        <linearGradient id='linear-2' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#0066FF'></stop>
          <stop offset='100%' stop-color='#001899'></stop>
        </linearGradient>
        <circle
          r='25'
          cx='50'
          cy='50'
          stroke-width='4'
          fill='none'
          stroke='url(#linear-2)'
        ></circle>
      </svg>
    </div>
  );
};

export const InstagramIcon = () => {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <Image
        width={25}
        height={25}
        src={Instagram}
        alt='instagram'
        priority={true}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
        }}
      />

      <svg width='100' height='100'>
        <linearGradient id='linear-3' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#FF00E7'></stop>
          <stop offset='49%' stop-color='#FF7A00'></stop>
          <stop offset='100%' stop-color='#010CFF'></stop>
        </linearGradient>
        <circle
          r='25'
          cx='50'
          cy='50'
          stroke-width='4'
          fill='none'
          stroke='url(#linear-3)'
        ></circle>
      </svg>
    </div>
  );
};
