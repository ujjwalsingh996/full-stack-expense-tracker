import React, { useRef } from "react";
import "./SignUp.css";
import axios from "axios";

const SignUp = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const passwordinput = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const obj = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      password: passwordinput.current.value,
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <h1 className="header">Sign Up</h1>
      <form className="input" onSubmit={submitHandler}>
        <label>Name</label>
        <input type="text" name="name" ref={nameInput} required />
        <label>Email</label>
        <input type="email" name="email" ref={emailInput} required />
        <label>Password</label>
        <input type="password" name="paasword" ref={passwordinput} required />
        <button className="button2" type="submit">
          Sign Up
        </button>
      </form>
    </React.Fragment>
  );
};

export default SignUp;
