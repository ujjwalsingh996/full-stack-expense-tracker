import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";

const SignUp = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const obj = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };
    try {
      const response = await axios.post(
        "http://localhost:4000/user",
        JSON.stringify(obj),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const redirectToLogin = () => {
    navigate("/login"); 
  };

  return (
    <React.Fragment>
      <h1 className="header">SIGN UP</h1>
      <form className="input" onSubmit={submitHandler}>
        <label>Name</label>
        <input type="text" name="name" ref={nameInput} required />
        <label>Email</label>
        <input type="email" name="email" ref={emailInput} required />
        <label>Password</label>
        <input type="password" name="password" ref={passwordInput} required />
        <button className="button2" type="submit">
          Sign Up
        </button>
      </form>
      <button className="button2" onClick={redirectToLogin}>
        Go to Login
      </button>
    </React.Fragment>
  );
};

export default SignUp;
