import React from "react";
import { useSelector, useDispatch } from "react-redux";
import EducationItem from "./EducationItem/EducationItem";
import Button from "../../UI/Button/Button";

const Education = () => {
  const edu = useSelector(state => state.education);

  const dispatch = useDispatch();

  const addEducationItemHandler = () => {
    dispatch({
      type: "ADD_EDUCATION_LIST",
      payload: { deg_id: "degree#" + (edu.length + 1) }
    });
  };

  return (
    <div>
      {Boolean(edu) &&
        edu.map(education => {
          return (
            <EducationItem
              title={education.deg_id}
              key={education.deg_id}
              eduDetails={education}
            />
          );
        })}
      {edu.filter(education => Boolean(education.degreeTitle)).length ===
        edu.length && <Button clicked={addEducationItemHandler} type="add" />}
    </div>
  );
};
export default Education;
