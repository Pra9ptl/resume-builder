import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InputField from "../../../UI/InputField/InputField";
import Button from "../../../UI/Button/Button";
import ExpansionPanel from "../../../../hoc/ExpansionPanel/ExpansionPanel";
import MultiLinedField from "../../../UI/MultiLinedField/MultiLinedField";

const ExpItem = props => {
  const { title, expDetails } = props;

  const [companyName, setCompanyName] = useState(expDetails.companyName || "");
  const [position, setPosition] = useState(expDetails.position || "");
  const [jobDescription, setJobDescription] = useState(
    expDetails.jobDescription || ""
  );
  const [startDate, setStartDate] = useState(expDetails.startDate || "");
  const [endDate, setEndDate] = useState(expDetails.endDate || "");

  const dispatch = useDispatch();

  const updateFieldValue = (field, value) => {
    switch (field) {
      case "companyName":
        setCompanyName(value);
        break;
      case "position":
        setPosition(value);
        break;
      case "jobDescription":
        setJobDescription(value);
        break;
      case "startDate":
        setStartDate(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
      default:
        break;
    }
  };

  const updateExp = () => {
    dispatch({
      type: "UPDATE_EXPRIENCE_INFO",
      payload: {
        expId: title,
        companyName,
        position,
        jobDescription,
        startDate,
        endDate
      }
    });
  };

  return (
    <ExpansionPanel title={title}>
      <InputField
        type="text"
        label="Company/Oraganization"
        value={companyName}
        onChange={event => updateFieldValue("companyName", event.target.value)}
      />

      <InputField
        type="text"
        label="Position"
        value={position}
        onChange={event => updateFieldValue("position", event.target.value)}
      />

      <MultiLinedField
        type="text"
        label="Job Description"
        value={jobDescription}
        onChange={event =>
          updateFieldValue("jobDescription", event.target.value)}
        {...props}
      />

      <InputField
        type="date"
        label="Starting Date"
        value={startDate}
        onChange={event => updateFieldValue("startDate", event.target.value)}
        {...props}
        InputLabelProps={{
          shrink: true
        }}
      />

      <InputField
        id="datetime-local"
        type="date"
        label="Ending Date"
        value={endDate}
        onChange={event => updateFieldValue("endDate", event.target.value)}
        {...props}
        InputLabelProps={{
          shrink: true
        }}
      />
      <Button type="save" clicked={updateExp} />
      <Button
        type="delete"
        clicked={() =>
          dispatch({
            type: "DELETE_EXPERIENCE_INFO",
            payload: title
          })}
      />
    </ExpansionPanel>
  );
};

export default ExpItem;
