import * as types from "./actionTypes";
import {
  auth,
  facebookAuthProvider,
  googleAuthProvider,
} from "../authentication/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess = (user) => ({
  type: types.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

const googleSignInFail = (error) => ({
  type: types.GOOGLE_SIGN_IN_FAIL,
  payload: error,
});

const facebookSignInStart = () => ({
  type: types.FACEBOOK_SIGN_IN_START,
});

const facebookSignInSuccess = (user) => ({
  type: types.FACEBOOK_SIGN_IN_SUCCESS,
  payload: user,
});

const facebookSignInFail = (error) => ({
  type: types.FACEBOOK_SIGN_IN_SUCCESS,
  payload: error,
});

const auth0 = getAuth();
export const registerInitiate = (email, password, name) => {
  return function (dispatch) {
    dispatch(registerStart());

    createUserWithEmailAndPassword(auth0, email, password)
      .then(({ user }) => {
        user.updateProfile({
          name,
        });
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error)));
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());

    signInWithEmailAndPassword(auth0, email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginFail(error)));
  };
};

export const googleSignInInitiate = () => {
  return function (dispatch) {
    dispatch(googleSignInStart());

    signInWithPopup(auth0, googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user));
      })
      .catch((error) => dispatch(googleSignInFail(error)));
  };
};

export const fbSignInInitiate = () => {
  return function (dispatch) {
    dispatch(facebookSignInStart());

    signInWithPopup(
      auth0,
      facebookAuthProvider.addScope("user_birthday, email")
    )
      .then(({ user }) => {
        dispatch(facebookSignInSuccess(user));
      })
      .catch((error) => dispatch(facebookSignInFail(error)));
  };
};
