import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ExpItem from "./ExpItem/ExpItem";
import Button from "../../UI/Button/Button";

const ProfessionalExp = () => {
  const proExp = useSelector(state => state.experience);

  const dispatch = useDispatch();

  const addExperienceItemHandler = () => {
    dispatch({
      type: "ADD_EXPERIENCE_LIST",
      payload: { expId: "Experience-" + (proExp.length + 1) }
    });
  };

  return (
    <div>
      {Boolean(proExp) &&
        proExp.map(pE => {
          return <ExpItem title={pE.expId} key={pE.expId} expdetails={pE} />;
        })}
        
      {proExp.filter(pE => Boolean(pE.companyName)).length === proExp.length &&
        <Button click={addExperienceItemHandler} actiontype="add" />}
    </div>
  );
};

export default ProfessionalExp;
