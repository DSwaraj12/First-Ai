import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import {
  fbSignInInitiate,
  googleSignInInitiate,
  loginInitiate,
} from "../../redux/actions";

const Signin = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userInput;

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser, history]);

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate());
  };
  const handleFbSignIn = () => {
    dispatch(fbSignInInitiate());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setUserInput({ email: "", password: "" });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  return (
    <div className="login-form">
      <h1>Welcome Back</h1>
      <form className="form-signin" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="inputEmail"
          className="forms"
          placeholder="Your Email"
          onChange={handleChange}
          value={userInput.email}
          required
        />
        <input
          type="password"
          name="password"
          id="inputPassword"
          className="forms"
          placeholder="Your Password"
          onChange={handleChange}
          value={userInput.password}
          required
        />
        <button className="login-submit-btn" type="submit">
          <i className="fas fa-sign-in-alt" style={{ marginRight: "10px" }}></i>
          Log In
        </button>

        <p className="or-txt">OR</p>
        <div className="social-login">
          <button
            className="btn google-btn"
            type="button"
            onClick={handleGoogleSignIn}
          >
            <span>
              <i className="fab fa-google" style={{ marginRight: "10px" }}></i>
              Sign in with Google
            </span>
          </button>
          <button
            className="btn facebook-btn"
            type="button"
            onClick={handleFbSignIn}
          >
            <span>
              <i
                className="fab fa-facebook-f"
                style={{ marginRight: "10px" }}
              ></i>
              Sign in with Facebook
            </span>
          </button>
        </div>

        <div className="newAcc">
          Need an account? <Link to="/loginpage/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
