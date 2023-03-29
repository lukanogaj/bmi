import styles from './AgeHandler.module.css';
import TabsAge from './TabsAge';

const AgeHandler = (props) => {
  // const [isConfirmed, setIsConfirmed] = useState(false);

  // const clickHandler = (event) => {
  //   setIsConfirmed(!isConfirmed);
  //   console.log('Clicked');
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
        <TabsAge />
      </div>
    </div>
  );
};

export default AgeHandler;
