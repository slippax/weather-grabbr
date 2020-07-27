import React from "react";
import classes from "./styles/styles.module.css";
import { MdBubbleChart } from "react-icons/md";
import {RiCelsiusLine} from 'react-icons/ri';
const feelslike = (props) => {
  return (
    <div className={classes.boxwrapper}>
      <div className={classes.box}>
        <MdBubbleChart size="2em" className={classes.icon} />
        <p className={classes.text}>
          <strong>Feels Like:</strong>
        </p>
        <div className={classes.value}>{props.feelslike.toFixed(2)} <RiCelsiusLine size="1em"/></div>
      </div>
    </div>
  );
};

export default feelslike;
