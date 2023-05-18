import React, { useRef } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const Login = () => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const obj = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };
    const response = await axios.post(
      "http://localhost:4000/login",
      JSON.stringify(obj),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data)
  };

  const signupHandler = () => {
    navigate("/")
  }
  return (
    <React.Fragment>
      <h1 className="header">LOGIN</h1>
      <form className="input" onSubmit={submitHandler}>
        <label>Email</label>
        <input type="email" ref={emailInput}></input>
        <label>Passsword</label>
        <input type="password" ref={passwordInput}></input>
        <button className="button2" type="submit">
          Login
        </button>
      </form>
      <button className="button2" onClick={signupHandler}>Sign up</button>
    </React.Fragment>
  );
};

export default Login;
