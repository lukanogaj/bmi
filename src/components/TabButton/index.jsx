import React from "react";
import styles from "../Age/TabsAgeBtn.module.css";

const TabButton = ({ label, handleClick, isConfirmed }) => {
  return (
    <div
      style={{
        backgroundColor: isConfirmed === label ? "blue" : "#778692",
      }}
      className={styles.tabsAgeBtn}
      onClick={() => handleClick(label)}
    >
      {label}
    </div>
  );
};

export default TabButton;
