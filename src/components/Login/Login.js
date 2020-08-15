import React from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import GoogleLogin from "react-google-login";
import "animate.css";

const Login = () => {
  const dispatch = useDispatch();

  const updateFieldValue = (field, value) => {
    console.log(field, value);
    dispatch({ type: "UPDATE_SIGNED_IN_STATUS", payload: { field, value } });
  };

  const responseGoogle = response => {
    console.log(response);
    console.log(response.profileObj);

    if (response.profileObj !== null) {
      updateFieldValue("isSignedIn", true);
      updateFieldValue("email", response.profileObj.email);
    }
    //console.log(login);
  };

  return (
    <div className="loginForm">
      <div className="btnLayout">
        <label className="appTitle animate__animated animate__pulse" >Resume IT</label>
        <div>
          <GoogleLogin
            clientId="31284359444-3t4tk7p9ei6chbaubj3jrue716dv02po.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
