import React from "react";
import InputField from "../../UI/InputField/InputField";
import { useSelector, useDispatch } from "react-redux";
import MultiLinedField from "../../UI/MultiLinedField/MultiLinedField";

const PersonalInformation = props => {
  const personalInfo = useSelector(state => state.personalInfo);

  const dispatch = useDispatch();

  const updateFieldValue = (field, value) => {
    dispatch({ type: "UPDATE_PERSONAL_INFO", payload: { field, value } });
  };

  return (
    <div>
      <InputField
        type="text"
        label="Full Name"
        value={personalInfo.fullname}
        {...props}
        onChange={event => updateFieldValue("fullname", event.target.value)}
      />

      <InputField
        type="email"
        label="Email"
        value={personalInfo.email}
        {...props}
        onChange={event => updateFieldValue("email", event.target.value)}
      />

      <InputField
        type="number"
        label="Mobile Number"
        value={personalInfo.mobile}
        onChange={event => updateFieldValue("mobile", event.target.value)}
        onInput={e => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 10);
          }}
        {...props}
      />

      <MultiLinedField
        type="text"
        label="Address"
        value={personalInfo.address}
        {...props}
        onChange={event => updateFieldValue("address", event.target.value)}
      />
    </div>
  );
};

export default PersonalInformation;
