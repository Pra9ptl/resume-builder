import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import User from "@material-ui/icons/PersonRounded";
import Pdf from "@material-ui/icons/PictureAsPdf";
import Save from "@material-ui/icons/CloudUpload";
import Signout from "@material-ui/icons/LocalGasStation";
import "./Button.css";

const InputField = props => {
  let btnType = "";
  let btnText = "";
  let btnStyle = {};


  switch (props.actiontype) {
    case "add":
      btnText = "Add";
      btnStyle = {
        color: "#2196f3",
        backgroundColor: "#bbdefb"
      };
      btnType = <AddIcon style={{ padding: "10px !important" }} />;
      break;
    case "delete":
      btnText = "Delete";
      btnStyle = {
        color: "#607d8b",
        backgroundColor: "#cfd8dc"
      };
      btnType = <DeleteIcon style={{ padding: "10px !important" }} />;
      break;
    case "save":
      btnText = "Save";
      btnStyle = {
        color: "#4caf50",
        backgroundColor: "#c8e6c9"
      };
      btnType = <SaveIcon style={{ padding: "10px !important" }} />;
      break;
    case "signOut":
      btnText = "Sign-out";
      btnStyle = {
        color: "white",
        backgroundColor: "blue"
      };
      btnType = <Signout />;
      break;
    case "pdf":
      btnText = "Download PDF";
      btnStyle = {
        color: "#f44336",
        backgroundColor: "#ffcdd2"
      };
      btnType = <Pdf style={{ padding: "10px !important" }} />;
      break;
    case "cloud":
      btnText = "Save to Cloud";
      btnStyle = {
        color: "#3f51b5",
        backgroundColor: "#c5cae9"
      };
      btnType = <Save style={{ padding: "10px !important" }} />;
      break;
    case "person":
      btnText = "";
      btnStyle = {
        color: "white",
        backgroundColor: "#4CAF50"
      };
      btnType = <User />;
      break;
    default:
      break;
  }

  return (
    <Button
      onClick={props.click}
      style={btnStyle}
      className="button"
      {...props}
    >
      {btnType} {btnText}
    </Button>
  );
};

export default InputField;
