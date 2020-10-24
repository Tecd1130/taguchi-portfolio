import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  formControl: {
    marginBottom: 16,
    minWidth: 128,
    width: "100%",
  },
  inputLabel: {
    fontSize: "1.6rem",
  },
  selectLabel: {
    fontSize: "1.4rem",
  },
});

const SelectBox = (props) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.inputLabel}>{props.label}</InputLabel>
      <Select
        required={props.required}
        value={props.value}
        onChange={(event) => props.select(event.target.value)}
        className={classes.inputLabel}
      >
        {props.options.map((option) => (
          <MenuItem
            key={option.id}
            value={option.id}
            className={classes.selectLabel}
          >
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
