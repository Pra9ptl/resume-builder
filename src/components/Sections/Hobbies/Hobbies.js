import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";

const Hobbies = props => {
  const hob = useSelector(state => state.hobbies);

  const [hobbyState, setHobbyState] = useState([]);
  useEffect(
    () => {
      setHobbyState(hob);
    },
    [hob]
  );

  const dispatch = useDispatch();

  const addHobbiesItemHandler = () => {
    dispatch({
      type: "ADD_HOBBIES",
      payload: {
        hobbyId: "Hobby-" + (hob.length + 1),
        hobbyName: ""
      }
    });
  };

  const updateHobbies = (hob, value) => {
    const newHobbies = [...hobbyState];
    newHobbies.forEach(h => {
      if (h.hobbyId === hob.hobbyId) {
        //   h.hobbyId = hob.hobbyName;
        h.hobbyName = value;
      }
    });

    setHobbyState(newHobbies);
  };

  const saveHobby = h => {
    dispatch({
      type: "UPDATE_HOBBIES",
      payload: h
    });
  };

  return (
    <div>
      {Boolean(hobbyState) &&
        hobbyState.map(h => {
          return (
            <InputField
              type="text"
              label={h.hobbyId}
              key={h.hobbyId}
              value={h.hobbyName}
              onChange={event => {
                updateHobbies(h, event.target.value);
                saveHobby(h);
              }}
              {...props}
            />
          );
        })}
      {hobbyState.filter(h => Boolean(h.hobbyName)).length ===
        hobbyState.length &&
        <Button click={addHobbiesItemHandler} actiontype="add" />}
    </div>
  );
};

export default Hobbies;
