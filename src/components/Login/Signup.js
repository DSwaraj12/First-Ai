import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { registerInitiate } from "../../redux/actions";

const Signup = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);

  const { name, email, password, passwordConfirm } = userInput;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, name));
    setUserInput({ email: "", name: "", password: "", passwordConfirm: "" });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  return (
    <div className="login-form">
      <h1>Welcome</h1>
      <form className="form-signup" onSubmit={handleSubmit}>
        <div className="nameClass">
          <input
            type="text"
            name="name"
            id="inputName"
            className="forms"
            placeholder="Your Full Name"
            onChange={handleChange}
            value={userInput.name}
            required
          />
          <i className="far fa-user"></i>
        </div>

        <div className="emailClass">
          <input
            type="email"
            name="email"
            id="signup-email"
            className="forms"
            placeholder="Your Email"
            onChange={handleChange}
            value={userInput.email}
            required
          />
          <i className="far fa-envelope"></i>
        </div>

        <div className="passwordClass">
          <input
            type="password"
            name="password"
            id="signup-password"
            className="forms"
            placeholder="Your Password"
            onChange={handleChange}
            value={userInput.password}
            required
          />
          <i className="fas fa-key"></i>
        </div>

        <div className="passwordClass">
          <input
            type="password"
            name="passwordConfirm"
            id="signup-Confirmpassword"
            className="forms"
            placeholder="Re-enter your Password"
            onChange={handleChange}
            value={userInput.passwordConfirm}
            required
          />
          <i className="fas fa-key"></i>
        </div>

        <button className="login-submit-btn" type="submit">
          <i className="fas fa-user-plus" style={{ marginRight: "10px" }}></i>
          Sign Up
        </button>

        <Link to="/loginpage/signin" className="back">
          <i className="fas fa-angle-left"></i>Back
        </Link>
      </form>
    </div>
  );
};

export default Signup;
