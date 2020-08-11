import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import User from "@material-ui/icons/PersonRounded";
import "./Button.css";

const inputField = React.memo(props => {
  let btnTpye = "";
  let btnColor = "";
  let btnText = "";
  let btnSize = "";

  switch (props.type) {
    case "add":
      btnText = "Add";
      btnColor = "primary";
      btnTpye = <AddIcon />;
      break;
    case "delete":
      btnText = "Delete";
      btnColor = "delete";
      btnTpye = <DeleteIcon />;
      break;
    case "save":
      btnText = "Save";
      btnColor = "Secondary";
      btnTpye = <SaveIcon />;
      break;
    case "person":
      btnTpye = <User style={{ fontSize: 40, color: "#e0e0e0" }} />;
      break;
    default:
      break;
  }

  return (
    <Button onClick={props.clicked} color={btnColor} className="button">
      {btnTpye} {btnText}
    </Button>
  );
});

export default inputField;
