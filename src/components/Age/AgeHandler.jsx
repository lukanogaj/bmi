import { useState } from 'react';
import styles from './AgeHandler.module.css';
import TabButton from '../TabButton';

const AgeHandler = (props) => {
  const [isConfirmed, setIsConfirmed] = useState('Adult');

  const clickHandler = (value) => {
    setIsConfirmed(value);
    console.log(value);
  };

  // const calculatorHandler = (value) => {
  //   setIsConfirmed(value);
  // };
  return (
    <div className={styles.bmiHandler}>
      <div className={styles.ageHandlerHeading}>
        <h1>BMI calculator</h1>
      </div>
      <div className={styles.ageHandlerTabs}>
        <p className={styles.ageParagraph}>
          If you have or think you might have an eating disorder, we <br></br>{' '}
          advise you not to use the BMI Calculator and get further advice{' '}
          <br></br>from your GP.
        </p>
        <div className={styles.tabsAges}>
          <TabButton
            label='Adult'
            handleClick={clickHandler}
            isConfirmed={isConfirmed}
          />
          <TabButton
            label='Child'
            handleClick={clickHandler}
            isConfirmed={isConfirmed}
          />
        </div>
      </div>
    </div>
  );
};

export default AgeHandler;
