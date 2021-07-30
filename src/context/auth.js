import React, { createContext, useReducer } from "react";
import setHeader from "../util/setHeader";
import axios from "axios";
const AuthContext = createContext();
const initialState = {
  isLoggedIn: false,
  user: null,
  token: localStorage.getItem("token"),
  loading: false,
  error: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "User_Loaded":
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        isLoggedIn: true,
      };
    case "Login_Start":
      return { ...state, loading: true };
    case "Login":
    case "SignUp":
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        isLoggedIn: true,
        loading: false,
      };
    case "LogOut":
    case "LOGIN_FAIL":
      localStorage.removeItem("token");

      return {
        ...state,
        isLoggedIn: false,
        user: null,
        token: null,
        loading: false,
        error: action.payload.error,
      };
    case "Remove_Error":
      const err_updated = state.error.splice(1);
      return { ...state, error: err_updated };

    default:
      return state;
  }
};

const Auth = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadUser = async () => {
    if (localStorage.token) {
      setHeader(localStorage.token);
    }
    try {
      const result = await axios.get("https://untrsh.herokuapp.com/getUser");
      console.log(result);
      dispatch({
        type: "User_Loaded",
        payload: {
          user: result.data[0],
        },
      });
      console.log(state.token);
    } catch (err) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: {
          error: [],
        },
      });
    }
  };

  const Login = async ({ password, email }) => {
    try {
      dispatch({
        type: "Login_Start",
      });
      const body = JSON.stringify({ email, password });
      console.log(body);

      const res = await axios.post(
        "https://untrsh.herokuapp.com/getLogin",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "Login",
        payload: {
          token: res.data.token,
        },
      });
      loadUser();
    } catch (erro) {
      console.log(erro.response.data);
      dispatch({
        type: "LOGIN_FAIL",
        payload: {
          error: erro.response.data.errors,
        },
      });
      setTimeout(() => dispatch({ type: "Remove_Error" }), 4000);
    }
  };

  const SignUp = async (data) => {
    try {
      dispatch({
        type: "Login_Start",
      });
      const res = await axios.post(
        "https://untrsh.herokuapp.com/getSignup",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch({
        type: "SignUp",
        payload: {
          user: res.data.token,
        },
      });

      loadUser();
      window.location.replace("/login");
    } catch (error) {
      console.log(error);
      dispatch({
        type: "LOGIN_FAIL",
        payload: {
          error: error.response.data.errors,
        },
      });
      setTimeout(() => dispatch({ type: "Remove_Error" }), 4000);
    }
  };
  const LogOut = () => {
    dispatch({
      type: "LogOut",
      payload: {
        error: [],
      },
    });
    window.location.replace("/");
  };

  return (
    <AuthContext.Provider value={{ state, Login, SignUp, loadUser, LogOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthContext, Auth };
