import React from "react";
import TextField from '@material-ui/core/TextField';
import classes from './styles/styles.module.css'
const city = (props) => {
  return (
    <span className={classes.city}>
      <TextField id="outlined-basic" label="City" variant="outlined" onChange={props.changed} />
    </span>
  );
};

export default city;
