import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MultiLinedField from "../../UI/MultiLinedField/MultiLinedField";

const Skills = React.memo(props => {
  const skillsInfo = useSelector(state => state.skills);

  const dispatch = useDispatch();

  const updateFieldValue = (field, value) => {
    dispatch({ type: "UPDATE_SKILLS_INFO", payload: { field, value } });
  };
  return (
    <div>
      <MultiLinedField
        type="text"
        label="Expertise/Area(s) of Interest"
        value={skillsInfo.areaOfInterese}
        {...props}
        onChange={event => updateFieldValue("areaOfInterese", event.target.value)}
      />
      <MultiLinedField
        type="text"
        label="Programming Language(s)"
        value={skillsInfo.programmingLanguages}
        {...props}
        onChange={event => updateFieldValue("programmingLanguages", event.target.value)}
      />
      <MultiLinedField
        type="text"
        label="Tools and Technologies"
        value={skillsInfo.toolsandTech}
        {...props}
        onChange={event => updateFieldValue("toolsandTech", event.target.value)}
      />
      <MultiLinedField
        type="text"
        label="Prefered Field to Work"
        value={skillsInfo.preferedFieldofWork}
        {...props}
        onChange={event => updateFieldValue("preferedFieldofWork", event.target.value)}
      />
    </div>
  );
});

export default Skills;
