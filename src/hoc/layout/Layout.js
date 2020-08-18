import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Layout.css";
import ExpansionPanel from "../ExpansionPanel/ExpansionPanel";
import PersonalInformation from "../../components/Sections/PersonalInformation/PersonalInformation";
import Education from "../../components/Sections/Education/Education";
import Skills from "../../components/Sections/Skills/Skills";
import ProfessionalExp from "../../components/Sections/ProfessionalExp/ProfessionalExp";
import Websites from "../../components/Sections/Websites/Websites";
import Achievements from "../../components/Sections/Achievement/Achievement";
import Hobbies from "../../components/Sections/Hobbies/Hobbies";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CloudUpload from "@material-ui/icons/CloudUpload";
import ThreeSixtyIcon from "@material-ui/icons/ThreeSixty";
import DisplayPage from "../DisplayPage/DisplayPage";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import firebase from "../../firebase";

const Layout = () => {
  const user = useSelector(state => state.signedIn.email);
  const personalInfo = useSelector(state => state.personalInfo);
  const education = useSelector(state => state.education);
  const skills = useSelector(state => state.skills);
  const experience = useSelector(state => state.experience);
  const webLinks = useSelector(state => state.webLinks);
  const achievement = useSelector(state => state.achievement);
  const hobbies = useSelector(state => state.hobbies);
  console.log(personalInfo);

  const dispatch = useDispatch();
  const panelList = [
    "Personal Information",
    "Online Contact Links",
    "Skills",
    "Education",
    "Professional experience/ Internships",
    "Achievements",
    "Intereset and Hobbies"
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = () => {
    dispatch({
      type: "SIGN_OUT"
    });
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const db = firebase.firestore();

  useEffect(
    () => {
      if (user !== "") {
        console.log("hii.....");

        const resumeRef = db.collection("resumes").doc(user);
        resumeRef
          .get()
          .then(doc => {
            if (doc.exists) {
              dispatch({
                type: "GET_CLOUD_DATA",
                payload: doc.data()
              });
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch(error => {
            console.log("Error getting document:", error);
          });
      }
    },
    [user]
  );

  const saveDataToCloud = () => {
    const data = {
      personalInfo: personalInfo,

      education: education,

      skills: skills,

      experience: experience,

      webLinks: webLinks,

      achievement: achievement,

      hobbies: hobbies
    };

    // const db = firebase.firestore();
    db
      .collection("resumes")
      .doc(user)
      .set(data)
      .then(function() {
        console.log("Document successfully written!");
        window.alert("Data saved to cloud.");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <div className="Layout">
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <Logo className="logo" />
            <Typography variant="h6" className="title">
              Resume IT
            </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={saveDataToCloud}
                color="inherit"
              >
                <CloudUpload />
              </IconButton>
            </div>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <AccountCircle style={{ marginRight: "5px" }} />
                  {user}
                </MenuItem>
                <MenuItem onClick={handleChange}>
                  <ThreeSixtyIcon style={{ marginRight: "5px" }} />Sign Out
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
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
