import { useState } from 'react';
import styles from './TabsAge.module.css';
const TabsAge = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const clickHandler = (event) => {
    setIsConfirmed(!isConfirmed);
    console.log('Clicked');
  };
  return (
    <div className={styles.tabsAges}>
      {' '}
      <div
        onClick={clickHandler}
        className={`${styles.tabsAgeBtn} ${
          isConfirmed ? styles.tabsAgeConfirmed : styles.tabsAgeConfirmed
        } `}
      >
        Adult
      </div>
      <div
        onClick={clickHandler}
        className={`${styles.tabsAgeBtn} ${
          isConfirmed ? styles.tabsAgeConfirmed : styles.tabdAgeBtn
        }`}
      >
        Child
      </div>
    </div>
  );
};

export default TabsAge;
