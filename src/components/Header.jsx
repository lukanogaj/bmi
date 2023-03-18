import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='top__head'>BMI healthy weight calculator</h1>
      <p className='top__paragraph'>
        Use this calculator to check your body mass index (BMI) and find out if
        your're healthy weight. Or you can use it to check your child's BMI
      </p>
    </div>
  );
};

export default Header;
