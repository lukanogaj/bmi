import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.top__head}>
        BMI healthy weight <br></br> calculator
      </h1>
      <p className={styles.top__paragraph}>
        Use this calculator to check your body mass index (BMI) and find out{' '}
        <br></br> if your're healthy weight. Or you can use it to check your
        child's BMI
      </p>
    </div>
  );
};

export default Header;
