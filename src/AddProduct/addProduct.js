import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import header from "../header";
import axios from "axios";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";

export default function AddProduct(props) {
  const [allsubcat, setallsubcat] = useState();
  const [image, setimage] = useState();
  const [data, setdata] = useState({});

  useEffect(() => {
    console.log(props);
    if (
      props != null &&
      props.location != null &&
      props.location.data != null &&
      props.location.data.edit
    ) {
      setdata(props.location.data);
    }
    const res = async () => {
      const response = await axios.get("/getsubcat");

      setallsubcat(response.data.result);

      //console.log(response.data);
    };
    res();
  }, []);

  const onsubmit = async (values, { setSubmitting }) => {
    try {
      console.log(image);
      var fdata = new FormData();
      fdata.append("image", image);
      for (let [key, value] of Object.entries(values)) {
        fdata.append(key, value);
      }

      // alert(JSON.stringify(values, null, 2));
      if (!data.edit) {
        await axios.post("/addprod", fdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        fdata.append("prod_id", data.prod_id);
        console.log(fdata);
        await axios.put("/updateprod", fdata, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      setSubmitting(false);
      if (!data.edit) {
        alert("Your Product has been added");
      } else {
        alert("Your Product has been updated");
      }

      window.location.replace("/");
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  let cat = {
    1: "Books",
    2: "Cloths",
    3: "Electronics",
    4: "Musical Instruments",
  };

  return (
    <div>
      <br />
      <br />
      <h3 class="title-wthree mb-lg-5 mb-4 text-center">
        {!data.edit ? "Add Products here..." : "Edit Products here..."}
      </h3>
      {data.reason != null && data.reason.length > 0 ? (
        <h4>
          Reason For Decline :-{"           "}
          <span style={{ color: "red", fontSize: "2.5rem" }}>
            {data.reason}
          </span>
        </h4>
      ) : null}
      <Formik
        enableReinitialize
        initialValues={{
          prod_title: data.prod_title != null ? data.prod_title : "",
          prod_price: data.prod_price != null ? data.prod_price : "",
          prod_disc: data.prod_desc != null ? data.prod_desc : "",
          category: data.category != null ? cat[data.category] : "",
          subcat: data.subcat != null ? data.subcat : "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.prod_title) {
            errors.prod_title = "Required";
          }
          if (!values.prod_price) {
            errors.prod_price = "Required";
          }
          if (!values.prod_disc) {
            errors.prod_disc = "Required";
          }
          // if (!values.prod_price) {
          //   errors.prod_price = "Required";
          // }
          if (!values.category) {
            errors.category = "Required";
          }
          if (!values.subcat) {
            errors.subcat = "Required";
          }

          return errors;
        }}
        onSubmit={onsubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <section class="banner-bottom py-5">
            <div class="container">
              <div class="content-grid">
                <div class="content-bottom">
                  <Form>
                    <div class="field-group">
                      <div class="content-input-field">
                        <input
                          name="prod_title"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.prod_title}
                          placeholder="Product Title"
                          required=""
                          autocomplete="off"
                        />

                        {errors.prod_title &&
                          touched.prod_title &&
                          errors.prod_title}
                      </div>
                    </div>
                    <div class="field-group">
                      <div class="content-input-field">
                        <input
                          name="prod_image"
                          type="file"
                          onChange={(e) => {
                            console.log(e.target.files[0]);
                            setimage(e.target.files[0]);
                            console.log("noice");
                          }}
                          onBlur={handleBlur}
                          placeholder="Product Image"
                          //required=""
                          autocomplete="off"
                        />

                        {errors.prod_image &&
                          touched.prod_image &&
                          errors.prod_image}
                      </div>
                    </div>
                    <div class="field-group">
                      <div class="content-input-field">
                        <input
                          name="prod_price"
                          type="number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.prod_price}
                          placeholder="Price of your product"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="field-group">
                      <div class="content-input-field">
                        <input
                          name="prod_disc"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.prod_disc}
                          placeholder="Discription of the product"
                          required=""
                        />
                      </div>
                    </div>
                    <div class="field-group">
                      <div class="content-input-field">
                        <label for="cars">Select a category:</label>
                        <select
                          id="cars"
                          name="category"
                          onChange={handleChange}
                          value={values.category}
                        >
                          <option value="1">Books</option>
                          <option value="2">Cloths</option>
                          <option value="3">Electronics</option>
                          <option value="4">Musical Instruments</option>
                        </select>
                      </div>
                    </div>

                    {getsubcat(
                      values.category,
                      allsubcat,
                      handleChange,
                      values
                    )}
                    <div class="content-input-field">
                      <button type="submit" class="btn" disabled={isSubmitting}>
                        {!data.edit ? "Add product" : "Update product"}
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </div>
  );
}

function getsubcat(category, allsubcat, handleChange, values) {
  if (allsubcat) {
    // console.log(allsubcat);
    if (category === "2") {
      var a = allsubcat.filter((sc) => sc.category_id === "2");
      return (
        <>
          <div class="field-group">
            <div class="content-input-field">
              <label for="cars">Select a sub_category:</label>
              <select
                id="subcat"
                name="subcat"
                onChange={handleChange}
                value={values.subcat}
              >
                {opt(a)}
              </select>
            </div>
          </div>
        </>
      );
    }
    if (category === "3") {
      var a = allsubcat.filter((sc) => sc.category_id === "3");
      return (
        <div class="field-group">
          <div class="content-input-field">
            <label for="cars">Select a sub_category:</label>
            <select
              id="subcat"
              name="subcat"
              onChange={handleChange}
              value={values.subcat}
            >
              {opt(a)}
            </select>
          </div>
        </div>
      );
    }
    if (category === "4") {
      var a = allsubcat.filter((sc) => sc.category_id === "4");
      return (
        <div class="field-group">
          <div class="content-input-field">
            <label for="cars">Select a subcategory:</label>
            <select
              id="subcat"
              name="subcat"
              onChange={handleChange}
              value={values.subcat}
            >
              {opt(a)}
            </select>
          </div>
        </div>
      );
    } else {
      var a = allsubcat.filter((sc) => sc.category_id === "1");
      return (
        <div class="field-group">
          <div class="content-input-field">
            <label for="cars">Select a subcategory:</label>
            <select
              id="subcat"
              name="subcat"
              onChange={handleChange}
              value={values.subcat}
            >
              {opt(a)}
            </select>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div class="field-group">
        <div class="content-input-field">
          <label for="cars">Select a subcategory:</label>
          <select
            id="subcat"
            name="subcat"
            onChange={handleChange}
            value={values.subcat}
          >
            <option></option>
          </select>
        </div>
      </div>
    );
  }
}

function opt(a) {
  return a.map((a) => {
    return <option value={a.subct_name}>{a.subct_name}</option>;
  });
}

// if(category==="Books"){
// return <div>dasdadasd</div>;
// }
// if(category==="Cloths"){
//   return<div>dad</div>
// }
// if(category==="Electronics"){
//   return
// }
