import React, { Component } from "react";
import "./DisplayPage.css";
import { connect } from "react-redux";
import EducationListDisplay from "../../components/EducationListDisplay/EducationListDisplay";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import Email from "@material-ui/icons/Mail";
import Phone from "@material-ui/icons/Phone";
import Home from "@material-ui/icons/Home";
import { ReactComponent as BitBucket } from "../../assets/bitbucket.svg";
import { ReactComponent as UpWork } from "../../assets/upwork.svg";
import { grey } from "@material-ui/core/colors";
import Button from "../../components/UI/Button/Button";
import ReactToPrint from "react-to-print";

class DisplayPage extends Component {
  render() {
    return (
      <div className="area">
        {/* Personal Info Section */}
        <div className="section">
          <h1>
            {this.props.fullname}
          </h1>
          {Boolean(this.props.add) &&
            <div>
              <Home style={{ color: grey[900], width: 16, height: 16 }} />
              {"\t" + this.props.add}
            </div>}
          {Boolean(this.props.mobile) &&
            <div>
              <Phone style={{ color: grey[900], width: 16, height: 16 }} />
              {"\t" + this.props.mobile}
            </div>}
          {Boolean(this.props.email) &&
            <div>
              <Email style={{ color: grey[900], width: 16, height: 16 }} />
              {"\t" + this.props.email}
            </div>}
        </div>

        {/* Weblinks Section */}
        <div className="section">
          <div className="secTitle">WEB-LINKS</div>
          <div className="sectionContent">
            {Boolean(this.props.webLinks.linkedIn) &&
              <div>
                <a href={this.props.webLinks.linkedIn}>
                  <LinkedInIcon
                    style={{ color: grey[900], width: 16, height: 16 }}
                  />
                  {"\t" + this.props.webLinks.linkedIn}
                </a>
              </div>}
            {Boolean(this.props.webLinks.gitHub) &&
              <div>
                <a href={this.props.webLinks.gitHub}>
                  <GitHub style={{ color: grey[900], width: 16, height: 16 }} />
                  {"\t" + this.props.webLinks.gitHub}
                </a>
              </div>}
            {Boolean(this.props.webLinks.bitBucket) &&
              <div>
                <a href={this.props.webLinks.bitBucket}>
                  <BitBucket
                    style={{ color: grey[900], width: 16, height: 16 }}
                  />
                  {"\t" + this.props.webLinks.bitBucket}
                </a>
              </div>}
            {Boolean(this.props.webLinks.upWork) &&
              <div>
                <a href={this.props.webLinks.upWork}>
                  <UpWork style={{ color: grey[900], width: 16, height: 16 }} />
                  {"\t" + this.props.webLinks.upWork}
                </a>
              </div>}
          </div>
        </div>

        {/* Skills Section */}
        <div className="section">
          <div className="secTitle">SKILLS</div>
          <div className="sectionContent">
            {Boolean(this.props.area) &&
              <div>
                <div className="labelTitle">Area of Interest</div>
                <div className="labelValue">
                  {this.props.area.split("\n").map((text, index) =>
                    <React.Fragment key={`${text}-${index}`}>
                      <li>
                        {text}
                      </li>
                    </React.Fragment>
                  )}
                </div>
              </div>}
            {Boolean(this.props.program) &&
              <div>
                <div className="labelTitle">Programming</div>
                <div className="labelValue">
                  {this.props.program.split("\n").map((text, index) =>
                    <React.Fragment key={`${text}-${index}`}>
                      <li>
                        {text}
                      </li>
                    </React.Fragment>
                  )}
                </div>
              </div>}
            {Boolean(this.props.tools) &&
              <div>
                <div className="labelTitle">Tools</div>
                <div className="labelValue">
                  {this.props.tools.split("\n").map((text, index) =>
                    <React.Fragment key={`${text}-${index}`}>
                      <li>
                        {text}
                      </li>
                    </React.Fragment>
                  )}
                </div>
              </div>}
            {Boolean(this.props.work) &&
              <div>
                <div className="labelTitle">Prefered Field of Work</div>
                <div className="labelValue">
                  {this.props.work.split("\n").map((text, index) =>
                    <React.Fragment key={`${text}-${index}`}>
                      <li>
                        {text}
                      </li>
                    </React.Fragment>
                  )}
                </div>
              </div>}
          </div>
        </div>

        {/* Education Section */}
        <div className="section">
          <div className="secTitle">EDUCATION</div>
          <div className="sectionContent">
            {Boolean(this.props.educationList) &&
              this.props.educationList.map((e, index) => {
                return (
                  <EducationListDisplay
                    degreeTitle={e.degreeTitle}
                    key={index}
                    college={e.college}
                    sYear={e.sYear}
                    eYear={e.eYear}
                    learnings={e.learnings}
                  />
                );
              })}
          </div>
        </div>

        {/* Experience Section */}
        <div className="section">
          <div className="secTitle">EXPERIENCES</div>
          <div className="sectionContent">
            {Boolean(this.props.experiences) &&
              this.props.experiences.map((ex, index) => {
                return (
                  <EducationListDisplay
                    degreeTitle={ex.companyName}
                    key={index}
                    college={ex.position}
                    sYear={ex.startDate}
                    eYear={ex.endDate}
                    learnings={ex.jobDescription}
                  />
                );
              })}
          </div>
        </div>

        {/* Achievements Section */}
        {Boolean(this.props.achievement.length) &&
          <div className="section">
            <div className="secTitle">ACHIEVEMENT</div>
            <div className="sectionContent">
              {Boolean(this.props.achievement) &&
                <ul type="square">
                  {this.props.achievement.map(a =>
                    <li>
                      {a.achievementTitle}
                    </li>
                  )}
                </ul>}
            </div>
          </div>}

        {/* hobbies Section */}
        {Boolean(this.props.hobbies.length) &&
          <div className="section">
            <div className="secTitle">HOBBIES</div>
            <div className="sectionContent">
              <ul type="square">
                {this.props.hobbies.map(h =>
                  <li>
                    {h.hobbyName}
                  </li>
                )}
              </ul>
            </div>
          </div>}
      </div>
    );
  }
}

class reactToPrint extends Component {
  
  render() {
    return (
      <div>
        <div className="printSection">
          <ReactToPrint
            trigger={() =>
              <a href="#download">
                <Button actiontype="pdf" />
              </a>}
            content={() => this.componentRef}
          />
        </div>
        <DisplayPage ref={el => (this.componentRef = el)} {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //current user
    curUser: state.signedIn.email,

    //Personal Info
    personalInfo: state.personalInfo,
    fullname: state.personalInfo.fullname,
    email: state.personalInfo.email,
    dob: state.personalInfo.dob,
    add: state.personalInfo.address,
    mobile: state.personalInfo.mobile,

    //Weblinks
    webLinks: state.webLinks,
    linkedIn: state.webLinks.linkedIn,
    gitHub: state.webLinks.gitHub,
    bitBucket: state.webLinks.bitBucket,
    upWork: state.webLinks.upWork,

    //Skills
    skills: state.skills,
    area: state.skills.areaOfInterese,
    program: state.skills.programmingLanguages,
    tools: state.skills.toolsandTech,
    work: state.skills.preferedFieldofWork,

    //Education
    educationList: state.education,

    //Experience
    experiences: state.experience,

    //Achievement
    achievement: state.achievement,

    //hobbies
    hobbies: state.hobbies
  };
};

export default connect(mapStateToProps)(reactToPrint);
