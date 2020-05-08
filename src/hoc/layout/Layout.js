import React from 'react';
import './Layout.css';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import { Divider } from '@material-ui/core';
import PersonalInformation from '../../components/Sections/PersonalInformation/PersonalInformation';
import Education from '../../components/Sections/Education/Education';
import Skills from '../../components/Sections/Skills/Skills';
import ProfessionalExp from '../../components/Sections/ProfessionalExp/ProfessionalExp';
import Project from '../../components/Sections/Project/Project';
import Achievements from '../../components/Sections/Achievement/Achievement';
import Hobbies from '../../components/Sections/Hobbies/Hobbies';

const Layout = () => {
    const panelList = [
        "Personal Information",
        "Education",
        "Skills",
        "Professional experience/ Internships",
        "Project",
        "Achievements",
        "Intereset and Hobbies"
    ];
    return (
        <div className="Layout">
            <div className="menu">
                <nav>
                    dfsjhjkdsfh
                </nav>
            </div>
            <div>
                <Divider orientation="horizontal" className="horizontalSeparator" flexItem />
            </div>
            <div className="main">
                <div className="sideBar">
                    {panelList.map(panel => {
                        let loadingCompoennt = '';
                        switch (panel) {
                            case "Personal Information":
                                loadingCompoennt = <PersonalInformation />;
                                break;
                            case "Education":
                                loadingCompoennt = <Education />;
                                break;
                            case "Skills":
                                loadingCompoennt = <Skills />;
                                break;
                            case "Professional experience/ Internships":
                                loadingCompoennt = <ProfessionalExp />;
                                break;
                            case "Project":
                                loadingCompoennt = <Project />;
                                break;
                            case "Achievements":
                                loadingCompoennt = <Achievements />;
                                break;
                            case "Intereset and Hobbies":
                                loadingCompoennt = <Hobbies />;
                                break;
                            default:
                                break;
                        }
                        return (
                            <ExpansionPanel title={panel} key={panel}>
                                {loadingCompoennt}
                            </ExpansionPanel>
                        );
                    })}
                </div>
                <div>
                    <Divider orientation="vertical" className="verticalSeparator" flexItem />
                </div>
                <div className="display">
                    Hello World!!
                </div>
            </div>
        </div >
    );
};

export default Layout;