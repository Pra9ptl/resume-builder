import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Layout from "./hoc/layout/Layout";
import Login from "./components/Login/Login";

function App() {
  const login = useSelector(state => state.signedIn);

  return (login.isSignedIn === true && login.email !== "")
    ? <div className="App">
        <Layout />
      </div>
    : <div className="App">
        <Login />
      </div>;
}

export default App;
