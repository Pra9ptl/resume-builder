import React from "react";
import "./EducationListDisplay.css";

const EducationListDisplay = props => {
  return (
    <div className="item">
      {Boolean(props.degreeTitle) &&
        <div className="labelTitle">
          {props.degreeTitle}
        </div>}
      <div className="rowFlex">
        {Boolean(props.college) &&
          <div className="labelCollege">
            {props.college}
          </div>}
        {Boolean(props.sYear) &&
          Boolean(props.eYear) &&
          <div className="labelYears">
            {props.sYear + " - " + props.eYear}
          </div>}
      </div>
      {Boolean(props.learnings) &&
        <div className="labelLearning">
          {props.learnings.split("\n").map((text, index) =>
            <React.Fragment key={`${text}-${index}`}>
              <li>
                {text}
              </li>
            </React.Fragment>
          )}
        </div>}
    </div>
  );
};

export default EducationListDisplay;
