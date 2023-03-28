import React from 'react';
import './Layout.css';
import Header from '../Header/Header';
import AgeHandler from '../Age/AgeHandler';

/* Main conatiner with the childrens */

const Layout = () => {
  return (
    <div className='container'>
      <Header />
      <AgeHandler />
    </div>
  );
};

export default Layout;
