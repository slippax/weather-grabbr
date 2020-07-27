import React from "react";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import classes from './styles/styles.module.css';
const country = (props) => {
  
  return (
    <span className={classes.country}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Country</InputLabel>
        <Select
          native
          onChange={props.changed}
          label="Country"
          inputProps={{
            name: 'country',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="CA">Canada</option>
          <option value="US">USA</option>
        </Select>
      </FormControl>
    </span>
  );
};

export default country;
