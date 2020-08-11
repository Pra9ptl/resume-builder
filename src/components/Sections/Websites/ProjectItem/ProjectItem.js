import React from "react";
import InputField from "../../../UI/InputField/InputField";
import Button from "../../../UI/Button/Button";
import ExpansionPanel from "../../../../hoc/ExpansionPanel/ExpansionPanel";

const ProjectItem = React.memo(props => {
  const fieldList = [
    ["0", "Project Title", "text"],
    ["1", "Description", "text"],
    ["2", "Guide/Superior", "text"],
    ["3", "Starting Date", "date"],
    ["4", "Ending Date", "date"],
    ["5", "Team Size", "number"]
  ];

  const renderFields = fieldList.map(field =>
    <div key={field[0]}>
      <InputField id={field[0]} type={field[2]} label={field[1]} />
    </div>
  );

  return (
    <ExpansionPanel title={"Project #" + props.count}>
      {renderFields} <Button type="delete" />
    </ExpansionPanel>
  );
});

export default ProjectItem;
