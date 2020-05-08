import React from 'react';
import './Layout.css';
import ExpansionPanel from '../ExpansionPanel/ExpansionPanel';
import PersonalInformation from '../../components/Sections/PersonalInformation/PersonalInformation';
import Education from '../../components/Sections/Education/Education';
import Skills from '../../components/Sections/Skills/Skills';
import Box from '@material-ui/core/Box';
import ProfessionalExp from '../../components/Sections/ProfessionalExp/ProfessionalExp';
import Project from '../../components/Sections/Project/Project';

const Layout = () => {
    const panelList = [
        "Personal Information",
        "Education",
        "Skills",
        "Professional experience/ Internships",
        "Project",
        "Positional Experience",
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
            <Box className="main">
                <Box className="sideBar">
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
                            default:
                                break;
                        }
                        return (
                            <ExpansionPanel title={panel} key={panel}>
                                {loadingCompoennt}
                            </ExpansionPanel>
                        );
                    })}
                </Box>
                <Box className="display">

                </Box>
            </Box>
        </div >
    );
};

export default Layout;