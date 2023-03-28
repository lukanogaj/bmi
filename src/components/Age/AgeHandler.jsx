import React from 'react';
import styles from './AgeHandler.module.css';

const AgeHandler = () => {
  return (
    <div className={styles.bmi__handler}>
      <div className={styles.age__handler__heading}>
        <h1>BMI calculator</h1>
      </div>
      <div className={styles.age__handler__tabs}>
        <p className={styles.age__paragraph}>
          If you have or think you might have an eating disorder, we <br></br>{' '}
          advise you not to use the BMI Calculator and get further advice{' '}
          <br></br>from your GP.
        </p>
        <div className={styles.tabs__ages}>
          {' '}
          <div className={`${styles.tabs_age} ${styles.adult__btn}`}>Adult</div>
          <div className={`${styles.tabs_age} ${styles.child__btn}`}>Child</div>
        </div>
      </div>
    </div>
  );
};

export default AgeHandler;
