import React from 'react';
import PersonalInformation from '../../components/PersonalInformation/personalInformation';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const ComponentCardHolder = props => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                Personal Information
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <PersonalInformation />
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default ComponentCardHolder;
