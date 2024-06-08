import React, { useState, useEffect } from 'react';
import '@/styles/home-industries.css';

const categories = [
  { id: 'fitness', name: 'Fitness', color: '#8A2BE2' },
  { id: 'hospitality', name: 'Hospitality', color: '#32CD32' },
  { id: 'manufacturing', name: 'Manufacturing', color: '#FFA500' },
  { id: 'entertainment', name: 'Entertainment', color: '#FF4500' },
  { id: 'retail', name: 'Retail', color: '#1E90FF' },
  { id: 'banking-finance', name: 'Banking & Finance', color: '#228B22' },
  { id: 'education', name: 'Education', color: '#20B2AA' },
  { id: 'restaurants', name: 'Restaurants', color: '#FFD700' },
];

const Industries: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory(
        (prevCategory) => (prevCategory + 1) % categories.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
      <div
        className='central-image'
        style={{ backgroundColor: categories[activeCategory].color }}
      >
        <img src='path_to_image' alt='Central Character' />
      </div>
      <div className='categories'>
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`category ${index === activeCategory ? 'active' : ''}`}
            id={category.id}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
