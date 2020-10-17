import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  input: {
    fontSize: 16,
  },
});

const TextInput = (props) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      fullWidth={props.fullWidth}
      label={props.label}
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
    />
  );
};

export default TextInput;
