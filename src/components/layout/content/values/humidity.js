import React from "react";
import classes from "./styles/styles.module.css";
import {WiHumidity} from 'react-icons/wi';
const humidity = (props) => {
  return (
    <div className={classes.boxwrapper}>
      <div className={classes.box}>
          <WiHumidity size='2em' className={classes.icon}/>
        <p className={classes.text}>
          <strong>Humidity:</strong>
        </p>
        <div className={classes.value}>
        {props.humidity}%
        </div>
      </div>
    </div>
  );
};

export default humidity;
