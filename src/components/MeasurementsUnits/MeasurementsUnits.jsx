import React from 'react';
import styles from './MeasurementsUnits.module.css';
import { useState } from 'react';

const MeasurementsUnits = () => {
  const [metricUnits, imperialUnits] = useState('metric');

  const metricHandler = (value) => {
    imperialUnits(value);
    console.log(value);
  };
  return (
    <div className={styles.measurementsHandler}>
      <p>Enter your details</p>
      <form action=''>
        <label htmlFor=''>Imperial</label>
        <input type='radio' />
        <label htmlFor=''>Metric</label>
        <input type='radio' />
      </form>
    </div>
  );
};

export default MeasurementsUnits;
