import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { useFormik } from "formik";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";
import { SpinnerCircular } from "spinners-react";
import Background from '../assets/images/bg2.png'

export default function SignUpForm() {
  const { state, SignUp } = useContext(AuthContext);
  const onSubmit = (values) => {
    let data = new FormData();
    data.append("file", values.photo);
    for (let [key, value] of Object.entries(values)) {
      if (key !== "photo") data.append(key, value);
    }
    SignUp(data);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      addr: "",
      contact_no: "",
      state: "",
      city: "",
      pincode: "",
      photo: "",
    },
    onSubmit,
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "* Name Required";
      }
      if (!values.password) {
        errors.password = "* Password Required";
      }
      if (!values.email) {
        errors.email = "* Email Required";
      }
      if (!values.addr) {
        errors.addr = "* Address Required";
      }
      if (!values.city) {
        errors.city = "* City Required";
      }
      if (!values.state) {
        errors.state = "* State Required";
      }
      if (!values.pincode) {
        errors.pincode = "* Pincode Required";
      }
      if (!values.contact_no) {
        errors.contact_no = "* Phone Required";
      }
      if (!values.photo) {
        errors.photo = "* Profile Photo Required";
      }
      return errors;
    },
  });
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
  return (
    <>
      <section style={{background: `url(${Background})`, height: "100%", backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"}} className="banner-bottom py-5">
        <div className="container">
          <div className="content-grid">
            <div className="content-bottom">
              <form onSubmit={formik.handleSubmit} method="post">
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      name="name"
                      id="text1"
                      type="text"
                      value={formik.values.name}
                      placeholder={
                        !(formik.touched.name && formik.errors.name)
                          ? "Name"
                          : formik.errors.name
                      }
                      className={
                        formik.touched.name && formik.errors.name
                          ? "error"
                          : null
                      }
                      required=""
                    />
                  </div>
                </div>
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      name="email"
                      id="text2"
                      type="email"
                      value={formik.values.email}
                      placeholder={
                        !(formik.touched.email && formik.errors.email)
                          ? "Email"
                          : formik.errors.email
                      }
                      className={
                        formik.touched.email && formik.errors.email
                          ? "error"
                          : null
                      }
                      required=""
                    />
                  </div>
                </div>
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      name="contact_no"
                      id="text3"
                      type="text"
                      value={formik.values.contact_no}
                      placeholder={
                        !(formik.touched.contact_no && formik.errors.contact_no)
                          ? "Phone No."
                          : formik.errors.contact_no
                      }
                      className={
                        formik.touched.contact_no && formik.errors.contact_no
                          ? "error"
                          : null
                      }
                      required=""
                    />
                  </div>
                </div>
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      name="addr"
                      id="text4"
                      type="text"
                      value={formik.values.addr}
                      placeholder={
                        !(formik.touched.addr && formik.errors.addr)
                          ? "Full Address"
                          : formik.errors.addr
                      }
                      className={
                        formik.touched.addr && formik.errors.addr
                          ? "error"
                          : null
                      }
                      required=""
                    />
                  </div>
                </div>
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      name="pincode"
                      id="text5"
                      type="text"
                      value={formik.values.pincode}
                      placeholder={
                        !(formik.touched.pincode && formik.errors.pincode)
                          ? "Pincode"
                          : formik.errors.pincode
                      }
                      className={
                        formik.touched.pincode && formik.errors.pincode
                          ? "error"
                          : null
                      }
                      required=""
                    />
                  </div>
                </div>
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      name="state"
                      id="text6"
                      type="text"
                      value={formik.values.state}
                      placeholder={
                        !(formik.touched.state && formik.errors.state)
                          ? "State"
                          : formik.errors.state
                      }
                      className={
                        formik.touched.state && formik.errors.state
                          ? "error"
                          : null
                      }
                      required=""
                    />
                  </div>
                </div>
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      name="city"
                      id="text7"
                      type="text"
                      value={formik.values.city}
                      placeholder={
                        !(formik.touched.city && formik.errors.city)
                          ? "City"
                          : formik.errors.city
                      }
                      className={
                        formik.touched.city && formik.errors.city
                          ? "error"
                          : null
                      }
                      required=""
                    />
                  </div>
                </div>
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      name="password"
                      id="myInput"
                      value={formik.values.password}
                      type="Password"
                      placeholder={
                        !(formik.touched.password && formik.errors.password)
                          ? "Password"
                          : formik.errors.password
                      }
                      className={
                        formik.touched.password && formik.errors.password
                          ? "error"
                          : null
                      }
                    />
                  </div>
                </div>
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="customFile"
                    onChange={(event) => {
                      formik.setFieldValue(
                        "photo",
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                  <label class="custom-file-label" for="customFile">
                    {formik.values.photo.name}
                  </label>
                </div>
                {formik.errors.photo ? (
                  <div>
                    <p style={{ color: "red" }}> Please Choose Photo</p>
                  </div>
                ) : null}
                <div>{err_jsx}</div>
                {!state.loading ? (
                  <div className="content-input-field">
                    <button type="submit" className="btn">
                      Sign Up
                    </button>
                  </div>
                ) : (
                  <SpinnerCircular color="grey" secondaryColor="red" />
                )}
                {/* <div className="list-login-bottom text-center mt-lg-5 mt-4">
                  <a href="#" className="">
                    By clicking Signup, I agree to your terms
                  </a>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
