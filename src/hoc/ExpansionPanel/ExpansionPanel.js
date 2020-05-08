import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './ExpansionPanel.css';

const ComponentCardHolder = props => {
    return (
        <ExpansionPanel className="ExpansionPanel">
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                    {props.title}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {props.children}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default ComponentCardHolder;
