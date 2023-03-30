import { useState } from 'react';
import styles from './TabsAge.module.css';
const TabsAge = () => {
  const [isConfirmed, setIsConfirmed] = useState('Adult');

  const clickHandler = (age) => {
    setIsConfirmed(!isConfirmed);
    console.log('Clicked');
  };
  return (
    <div className={styles.tabsAges}>
      {' '}
      <div
        onClick={clickHandler}
        className={styles.tabsAgeBtn}
        style={{
          backgroundColor: isConfirmed === 'Adult' ? '#778692' : 'blue',
        }}
      >
        Adult
      </div>
      <div
        onClick={clickHandler}
        className={styles.tabsAgeBtn}
        style={{
          backgroundColor: isConfirmed === 'Child ' ? '#778692' : 'blue',
        }}
      >
        {' '}
        Child
      </div>
    </div>
  );
};

export default TabsAge;
