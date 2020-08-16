import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";

const Achievement = props => {
  const achieve = useSelector(state => state.achievement);

  const [achievementState, setAchievementState] = useState([]);
  useEffect(
    () => {
      setAchievementState(achieve);
    },
    [achieve]
  );

  const dispatch = useDispatch();

  const addAchievementItemHandler = () => {
    dispatch({
      type: "ADD_ACHIEVEMENT",
      payload: {
        achievementId: "Achievement-" + (achieve.length + 1),
        achievementTitle: ""
      }
    });
  };

  const updateAchievement = (ach, value) => {
    const newAchievement = [...achievementState];
    newAchievement.forEach(a => {
      if (a.achievementId === ach.achievementId) {
        a.achievementTitle = value;
      }
    });

    setAchievementState(newAchievement);
  };

  const saveAchievement = a => {
    dispatch({
      type: "UPDATE_ACHIEVEMENT",
      payload: a
    });
  };

  return (
    <div>

      {Boolean(achievementState) &&
        achievementState.map(a => {
          return (
            <InputField
              type="text"
              label={a.achievementId}
              key={a.achievementId}
              value={a.achievementTitle}
              onChange={event => {
                updateAchievement(a, event.target.value);
                saveAchievement(a);
              }}
              {...props}
            />
          );
        })}

      {achievementState.filter(a => Boolean(a.achievementTitle)).length ===
        achievementState.length &&
        <Button click={addAchievementItemHandler} actiontype="add" />}
    </div>
  );
};

export default Achievement;
