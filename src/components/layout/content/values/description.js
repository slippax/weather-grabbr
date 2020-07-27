import React from "react";
import classes from "./styles/styles.module.css";
import {GiLookAt} from 'react-icons/gi';
const description = (props) => {
  return (
    <div className={classes.boxwrapper}>
      <div className={classes.box}>
      <GiLookAt size='2em' className={classes.icon}/>
        <p className={classes.text}>
          <strong>Looks:</strong>
        </p>
        <div className={classes.value}>
        {props.description}
        </div>
      </div>
    </div>
  );
};

export default description;
