/* eslint-disable no-undef */
import React, { useContext } from "react";
import { SpinnerCircular } from "spinners-react";
import { AuthContext } from "../context/auth";
import { useFormik } from "formik";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";
import { Redirect,Link } from "react-router-dom";
import Background from '../assets/images/bg2.png'

export default function LoginForm() {
  const initialValues = {
    password: "",
    email: "",
  };
  const { state, Login } = useContext(AuthContext);

  const onSubmit = (values) => {
    Login(values);
  };
  let err_jsx;
  if (state.error.length > 0) {
    err_jsx = state.error.map((er) => {
      return (
        <h4 style={{ color: "red" }} key="sd">
          {er.message}
        </h4>
      );
    });
  }
  const validate = (values) => {
    let errors = {};
    if (!values.email) {
      // console.log('hello')
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues,
    validate,

    onSubmit,
  });
  let show;
  if (state.isLoggedIn) {
    show = <Redirect to="/" />;
  } else {
    show = (
      <section style={{background: `url(${Background})`, height: "100%", backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"}} className="banner-bottom py-5">
        <div className="container">
          <div className="content-grid">
            <div class="content-bottom">
              <form onSubmit={formik.handleSubmit} method="post">
                {err_jsx}

                <div class="field-group">
                  <div class="content-input-field">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      name="email"
                      id="text1"
                      type="text"
                      value={formik.values.email}
                      placeholder="Email"
                      className={
                        formik.touched.email && formik.errors.email
                          ? "error"
                          : null
                      }
                    />
                  </div>
                </div>
                <div class="field-group">
                  <div class="content-input-field">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      name="password"
                      id="myInput"
                      type="Password"
                      placeholder="Password"
                      className={
                        formik.touched.password && formik.errors.password
                          ? "error"
                          : null
                      }
                    />
                  </div>
                </div>
                {!state.loading ? (
                  <div class="content-input-field">
                    <button type="submit" class="btn">
                      Sign In
                    </button>
                  </div>
                ) : (
                  <SpinnerCircular color="grey" secondaryColor="red" />
                )}
                {/* <ul class="list-login"> */}
                  {/* <li class="switch-slide">
                    <label class="switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                      keep Logged in
                    </label>
                  </li> */}
                  {/* <li>
                    <a href="#" class="text-right">
                      Forgot password?
                    </a>
                  </li> */}
                  {/* <li class="clearfix"></li> */}
                {/* </ul> */}
                <br/>
                <ul class="list-login-bottom">
                  <li class="">
                    <Link to="/register" class="">
                      Don't have an Account?
                    </Link>
                  </li>
                  <li class="">
                    <Link to="/contactus" class="text-right">
                      Need Help?
                    </Link>
                  </li>
                  <li class="clearfix"></li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return <>{show}</>;
}
