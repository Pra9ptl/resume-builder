import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InputField from "../../../UI/InputField/InputField";
import Button from "../../../UI/Button/Button";
import MultiLinedField from "../../../UI/MultiLinedField/MultiLinedField";
import ExpansionPanel from "../../../../hoc/ExpansionPanel/ExpansionPanel";

const EducationItem = props => {
  const { title, edudetails } = props;

  const [degreeTitle, setDegreeTitle] = useState(edudetails.degreeTitle || "");
  const [college, setCollege] = useState(edudetails.college || "");
  const [sYear, setSYear] = useState(edudetails.sYear || "");
  const [eYear, setEYEAR] = useState(edudetails.eYear || "");
  const [learnings, setlearnings] = useState(edudetails.learnings || "");

  const dispatch = useDispatch();

  const updateFieldValue = (field, value) => {
    switch (field) {
      case "degreeTitle":
        setDegreeTitle(value);
        break;
      case "college":
        setCollege(value);
        break;
      case "sYear":
        setSYear(value);
        break;
      case "eYear":
        setEYEAR(value);
        break;
      case "learnings":
        setlearnings(value);
        break;
      default:
        break;
    }
  };

  const updateEducation = () => {
    dispatch({
      type: "UPDATE_EDUCATION_INFO",
      payload: {
        deg_id: title,
        degreeTitle,
        college,
        sYear,
        eYear,
        learnings
      }
    });
  };

  return (
    <ExpansionPanel title={title}>
      <InputField
        type="text"
        label="Degree Title"
        value={degreeTitle}
        onChange={event => updateFieldValue("degreeTitle", event.target.value)}
      />
      <InputField
        type="text"
        label="College/University"
        value={college}
        onChange={event => updateFieldValue("college", event.target.value)}
      />
      <InputField
        type="number"
        label="Starting Year"
        placeholder="yyyy"
        value={sYear}
        onInput={e => {
          e.target.value = Math.max(0, parseInt(e.target.value))
            .toString()
            .slice(0, 4);
        }}
        onChange={event => updateFieldValue("sYear", event.target.value)}
      />
      <InputField
        type="number"
        label="Ending Year"
        placeholder="yyyy"
        onInput={e => {
          e.target.value = Math.max(0, parseInt(e.target.value))
            .toString()
            .slice(0, 4);
        }}
        value={eYear}
        onChange={event => updateFieldValue("eYear", event.target.value)}
      />

      <MultiLinedField
        type="text"
        label="What did you Learn"
        value={learnings}
        onChange={event => updateFieldValue("learnings", event.target.value)}
        max="150"
        {...props}
      />

      <Button actiontype="save" click={updateEducation} />
      <Button
        actiontype="delete"
        click={() =>
          dispatch({
            type: "DELETE_EDUCATION_INFO",
            payload: title
          })}
      />
    </ExpansionPanel>
  );
};

export default EducationItem;
