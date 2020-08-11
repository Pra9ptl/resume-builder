import React from "react";
import TextField from "@material-ui/core/TextField";
import "./MultiLinedField.css";

const multiLinedField = React.memo(props => {
  return (
    <TextField
      className="MultiLinedField"
      label={props.label}
      type={props.type}
      {...props}
      multiline
      rows={4}
      value={props.value}
      variant="standard"
    />
  );
});

export default multiLinedField;
