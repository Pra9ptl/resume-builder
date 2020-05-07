import React from 'react';
import './Layout.css';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import PersonalInformation from '../../components/PersonalInformation/personalInformation';

const Layout = () => {
    return (
        <div className="Layout">
            <div className="menu">
                Nav
            </div>
            <div className="main">
                <div className="sideBar">
                    <ExpansionPanel title="Personal Information" >
                        <PersonalInformation />
                    </ExpansionPanel>
                </div>
                <div className="display">

                </div>
            </div>
        </div>
    );
};

export default Layout;