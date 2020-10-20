import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  button: {
    display: "block",
    backgroundColor: "#4dd0e1",
    color: "#000",
    fontSize: 14,
    height: 36,
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "center",
    width: 200,
  },
});

const PrimaryButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      onClick={props.onClick}
      variant="contained"
      color="primary"
      className={classes.button}
    >
      {props.label}
    </Button>
  );
};

export default PrimaryButton;
