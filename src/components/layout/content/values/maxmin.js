import React from "react";
import classes from "./styles/styles.module.css";
import {BsArrowUpDown} from 'react-icons/bs';
import {RiCelsiusLine} from 'react-icons/ri';
const maxmin = (props) => {
  return (
    <div className={classes.boxwrapper}>
    <div className={classes.box}>
    <BsArrowUpDown size='2em' className={classes.icon}/>
      <p className={classes.text}>
          <strong>Max & Min:</strong>
        </p>
        <div className={classes.value}>
      <div>Max: {props.max.toFixed(2)} <RiCelsiusLine size="1em"/></div>
      <div>Min: {props.min.toFixed(2)} <RiCelsiusLine size="1em"/></div>
      </div>
    </div>
    </div>
  );
};

export default maxmin;
