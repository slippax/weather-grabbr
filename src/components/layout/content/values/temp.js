import React from "react";
import classes from "./styles/styles.module.css";
import {FaThermometerHalf} from 'react-icons/fa';
import {RiCelsiusLine} from 'react-icons/ri';
const temp = (props) => {
  return (
    
    <div className={classes.boxwrapper}>
    <div className={classes.box}>
    <FaThermometerHalf size='2em' className={classes.icon}/>
      <p className={classes.text}>
        <strong>Current Temperature:</strong>
      </p>
      <div className={classes.value}>
      {props.temp.toFixed(2)} <RiCelsiusLine size="1em"/>
      </div>
    </div>
    </div>
  );
};

export default temp;
