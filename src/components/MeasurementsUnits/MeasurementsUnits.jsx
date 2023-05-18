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
      <div className={styles.measurementsUnitsHandler}>
        <p>Enter your details</p>
        <form action=''>
          {/* Inputs for units metric */}
          <div>
            <h4>Height</h4>
            <input type='text' />
            <label htmlFor=''>cm</label>
          </div>
          <div>
            <h4>Weight</h4>
            <input type='text' />
            <label htmlFor=''>kgs</label>
          </div>
          {/* Radio buttons for changing units */}
          <div className={styles.metricKindOf} onClick={metricHandler}>
            <label htmlFor=''>Imperial</label>
            <input type='radio' />
            <label htmlFor=''>Metric</label>
            <input type='radio' />
          </div>
        </form>
      </div>
      <div className={styles.bmiParagraph}>
        <p>
          What's yours BMI,
          <br /> enter the details and found out
        </p>
      </div>
    </div>
  );
};

export default MeasurementsUnits;
