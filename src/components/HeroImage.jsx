import React from 'react';
import iconall from '../assets/iconinall.webp';

const HeroImage = () => {
  return (
    <div className='flex justify-center items-center'>
      <img 
        src={iconall} 
        alt='Just F4R1S' 
      />
    </div>
  );
};

export default HeroImage;