import React from "react";
import { useSelector, useDispatch } from "react-redux";
import InputField from "../../UI/InputField/InputField";

const Websites = props => {
  const webLinks = useSelector(state => state.webLinks);

  const dispatch = useDispatch();

  const updateFieldValue = (field, value) => {
    dispatch({ type: "UPDATE_WEBLINKS", payload: { field, value } });
  };

  return (
    <div>
      <InputField
        type="text"
        label="LinkedIn"
        value={webLinks.linkedIn}
        onChange={event => updateFieldValue("linkedIn", event.target.value)}
        {...props}
      />

      <InputField
        type="text"
        label="Git Hub"
        value={webLinks.gitHub}
        onChange={event => updateFieldValue("gitHub", event.target.value)}
        {...props}
      />

      <InputField
        type="text"
        label="Bit Bucket"
        value={webLinks.bitBucket}
        onChange={event => updateFieldValue("bitBucket", event.target.value)}
        {...props}
      />

      <InputField
        type="text"
        label="Up Work"
        value={webLinks.upWork}
        onChange={event => updateFieldValue("upWork", event.target.value)}
        {...props}
      />
    </div>
  );
};

export default Websites;
