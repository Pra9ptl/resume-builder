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

const inputField = React.memo(props => {
  let btnTpye = "";
  let btnColor = "";
  let btnText = "";

  switch (props.type) {
    case "add":
      btnText = "Add";
      btnColor = "primary";
      btnTpye = <AddIcon style={{ padding: "10px !important" }} />;
      break;
    case "delete":
      btnText = "Delete";
      btnColor = "delete";
      btnTpye = <DeleteIcon style={{ padding: "10px !important" }} />;
      break;
    case "save":
      btnText = "Save";
      btnColor = "Secondary";
      btnTpye = <SaveIcon style={{ padding: "10px !important" }} />;
      break;
    case "signOut":
      btnText = "Sign-out";
      btnColor = "delete";
      btnTpye = <Signout />;
      break;
    case "pdf":
      btnText = "Download PDF";
      btnColor = "Secondary";
      btnTpye = <Pdf style={{ padding: "10px !important" }} />;
      break;
    case "cloud":
      btnText = "Save to Cloud";
      btnColor = "primary";
      btnTpye = <Save style={{ padding: "10px !important" }} />;
      break;
    case "person":
      btnColor = "primary";
      btnTpye = (
        <User
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "20px !important",
            fontSize: "40",
            border: "none",
            cursor: "pointer"
          }}
        />
      );
      break;
    default:
      break;
  }

  return (
    <Button
      onClick={props.clicked}
      color={btnColor}
      className="button"
      {...props}
    >
      {btnTpye} {btnText}
    </Button>
  );
});

export default inputField;
