import React from "react";
import classes from "./styles/styles.module.css";
import {GrMapLocation} from 'react-icons/gr';
const location = (props) => {
  return (
    <div className={classes.boxwrapper}>
      <div className={classes.box}>
      <GrMapLocation size='2em' className={classes.icon}/>
        <p className={classes.text}>
          <strong>Location:</strong>
        </p>
        <div className={classes.value}>
        {props.city}, {props.country}
        </div>
      </div>
    </div>
  );
};

export default location;
