import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./ExpansionPanel.css";

const expansionPanel = props => {
  return (
    <ExpansionPanel className="ExpansionPanel">
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        {props.title}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="ExpansionPanelDetails">
        {props.children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default expansionPanel;
