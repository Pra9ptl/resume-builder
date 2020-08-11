import React from "react";
import TextField from "@material-ui/core/TextField";
import "./InputField.css";

const InputField = props => {
  return (
    <TextField
      variant="standard"
      label={props.label}
      type={props.type}
      {...props}
      value={props.value}
      className="inputField"
    />
  );
};

export default InputField;
