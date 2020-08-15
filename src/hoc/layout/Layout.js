import React from "react";
import "./Layout.css";
import ExpansionPanel from "../ExpansionPanel/ExpansionPanel";
import PersonalInformation from "../../components/Sections/PersonalInformation/PersonalInformation";
import Education from "../../components/Sections/Education/Education";
import Skills from "../../components/Sections/Skills/Skills";
import ProfessionalExp from "../../components/Sections/ProfessionalExp/ProfessionalExp";
import Websites from "../../components/Sections/Websites/Websites";
import Achievements from "../../components/Sections/Achievement/Achievement";
import Hobbies from "../../components/Sections/Hobbies/Hobbies";
import DisplayPage from "../DisplayPage/DisplayPage";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Button from "../../components/UI/Button/Button";
import { useSelector } from "react-redux";

const Layout = () => {
  const user = useSelector(state => state.signedIn.email);
  const panelList = [
    "Personal Information",
    "Online Contact Links",
    "Skills",
    "Education",
    "Professional experience/ Internships",
    "Achievements",
    "Intereset and Hobbies"
  ];
  return (
    <div className="Layout">
      <div className="menu">
        <div className="nav">
          <Logo className="logo" />
          <div className="user">
            <div className="dropdown" style={{ float: "right" }}>
              <Button type="person" />
              <div className="dropdown-content">
                <div className="dropDownItems">
                  <div>
                    {user}
                  </div>
                </div>
                <div className="dropDownItems">
                  <Button type="signOut" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="sideBar">
          {panelList.map(panel => {
            let loadingCompoennt = "";
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
              case "Online Contact Links":
                loadingCompoennt = <Websites />;
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
        <div className="display">
          <DisplayPage />
        </div>
      </div>
    </div>
  );
};

export default Layout;
