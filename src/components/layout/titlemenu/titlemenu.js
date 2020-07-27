import React from "react";
import classes from "./titlemenu.module.css";
import Slide from 'react-reveal/Slide';
const TitleMenu = () => {
  return (
    <div className={classes.title}>
      <Slide top>
      <p className={classes.text}>Weather Grabbr</p>
      <div className={classes.border}></div>
      <p className={classes.instruction}>Enter your city & country <strong>or</strong> press the location button.</p>
      </Slide>
    </div>
  );
};

export default TitleMenu;
