import { useState } from "react";
import TabButton from "../TabButton";
import styles from "./TabsAgeBtn.module.css";
const TabsAgeBtn = () => {
  const [isConfirmed, setIsConfirmed] = useState("Adult");

  const clickHandler = (value) => {
    setIsConfirmed(value);
    console.log(value);
  };

  return (
    <div className={styles.tabsAges}>
      <TabButton
        label="Adult"
        handleClick={clickHandler}
        isConfirmed={isConfirmed}
      />
      <TabButton
        label="Child"
        handleClick={clickHandler}
        isConfirmed={isConfirmed}
      />
      {/* <div */}
      {/*   onClick={() => clickHandler("Adult")} */}
      {/*   className={styles.tabsAgeBtn} */}
      {/*   style={{ */}
      {/*     backgroundColor: isConfirmed === "Adult" ? "#778692" : "blue", */}
      {/*   }} */}
      {/* > */}
      {/*   Adult */}
      {/* </div> */}
      {/* <div */}
      {/*   onClick={() => clickHandler("Child")} */}
      {/*   className={styles.tabsAgeBtn} */}
      {/*   style={{ */}
      {/*     backgroundColor: isConfirmed === "Child " ? "#778692" : "blue", */}
      {/*   }} */}
      {/* > */}
      {/*   Child */}
      {/* </div> */}
    </div>
  );
};

export default TabsAgeBtn;
