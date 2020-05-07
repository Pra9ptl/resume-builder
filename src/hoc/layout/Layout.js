import React from 'react';
import './Layout.css';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import PersonalInformation from '../../components/Sections/PersonalInformation/PersonalInformation';
import Education from '../../components/Sections/Education/Education';


const Layout = () => {
    const panelList = [
        "Personal Information",
        "Education",
        "Skills",
        "Professional experience/ Internships",
        "Work",
        "Positional Experience",
        "Achievements",
        "Intereset and Hobbies"
    ];
    return (
        <div className="Layout">
            <div className="menu">
                Nav
            </div>
            <div className="main">
                <div className="sideBar">
                    {panelList.map(panel => {
                        let loadingCompoennt = '';
                        switch (panel) {
                            case "Personal Information":
                                loadingCompoennt = (
                                    <ExpansionPanel title={panel} key={panel}>
                                        <PersonalInformation />
                                    </ExpansionPanel>
                                );
                                break;
                            case "Education":
                                loadingCompoennt = (
                                    <ExpansionPanel title={panel} key={panel}>
                                        <Education />
                                    </ExpansionPanel>
                                );
                                break;
                            default:
                                break;
                        }
                        return (
                            <div>
                                {loadingCompoennt}
                            </div>
                        );
                    })}
                </div>
                <div className="display">

                </div>
            </div>
        </div >
    );
};

export default Layout;