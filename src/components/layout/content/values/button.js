import React from "react";
import Button from '@material-ui/core/Button';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import classes from './styles/styles.module.css'
const button = (props) => {
  return (
    <span className={classes.locationButton}>
       <Button className={classes.button} variant="outlined" onClick={props.clicked}><GpsFixedIcon/></Button>
    </span>
  );
};

export default button;
