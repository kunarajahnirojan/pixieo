import React, { useEffect, useRef } from 'react';
import '@/styles/home-services.css';

function Services() {
  useEffect(() => {
    console.clear();

    const cardsContainer: any = document.querySelector('.cards');
    const cards = Array.from(document.querySelectorAll('.card'));
    const overlay: any = document.querySelector('.overlay');

    const applyOverlayMask = (e: any) => {
      const overlayEl = e.currentTarget;
      const x = e.pageX - cardsContainer.offsetLeft;
      const y = e.pageY - cardsContainer.offsetTop;

      overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
    };

    const createOverlayCta = (overlayCard: any, ctaEl: any) => {
      const overlayCta: any = document.createElement('div');
      overlayCta.classList.add('cta');
      overlayCta.textContent = ctaEl.textContent;
      overlayCta.setAttribute('aria-hidden', true);
      overlayCard.append(overlayCta);
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = cards.indexOf(entry.target);
        let width = entry.borderBoxSize[0].inlineSize;
        let height = entry.borderBoxSize[0].blockSize;

        if (cardIndex >= 0) {
          overlay.children[cardIndex].style.width = `${width}px`;
          overlay.children[cardIndex].style.height = `${height}px`;
        }
      });
    });

    const initOverlayCard = (cardEl: any) => {
      const overlayCard = document.createElement('div');
      overlayCard.classList.add('card');
      createOverlayCta(overlayCard, cardEl.lastElementChild);
      overlay.append(overlayCard);
      observer.observe(cardEl);
    };

    cards.forEach(initOverlayCard);
    document.body.addEventListener('pointermove', applyOverlayMask);
  }, []);

  return (
    <main className='main flow'>
      <h1 className='main-heading'>Pricing</h1>
      <div className='main-cards cards'>
        <div className='cards-inner'>
          <div className='cards-card card'>
            <h2 className='card-heading'>Basic</h2>
            <p className='card-price'>$9.99</p>
            <ul role='list' className='card-bullets flow'>
              <li>Access to standard workouts and nutrition plans</li>
              <li>Email support</li>
            </ul>
            <a href='#basic' className='card-cta cta'>
              Get Started
            </a>
          </div>

          <div className='cards-card card'>
            <h2 className='card-heading'>Pro</h2>
            <p className='card-price'>$19.99</p>
            <ul role='list' className='card-bullets flow'>
              <li>Access to advanced workouts and nutrition plans</li>
              <li>Priority Email support</li>
              <li>Exclusive access to live Q&A sessions</li>
            </ul>
            <a href='#pro' className='card-cta cta'>
              Upgrade to Pro
            </a>
          </div>

          <div className='cards-card card'>
            <h2 className='card-heading'>Ultimate</h2>
            <p className='card-price'>$29.99</p>
            <ul role='list' className='card-bullets flow'>
              <li>Access to all premium workouts and nutrition plans</li>
              <li>24/7 Priority support</li>
              <li>1-on-1 virtual coaching session every month</li>
              <li>Exclusive content and early access to new features</li>
            </ul>
            <a href='#ultimate' className='card-cta cta'>
              Go Ultimate
            </a>
          </div>
        </div>

        <div className='overlay cards-inner'></div>
      </div>
    </main>
  );
}

export default Services;
