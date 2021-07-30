import React from "react";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import header from "../header";

export default function home() {
  return (
    <div>
      <div class="main-sec">
        <div class="banner-wthree-info container">
          <div class="row">
            <div class="col-lg-5 banner-left-info">
              <h3>
                Why Trash <span>when you can Untrash</span>
              </h3>
              <Link to="/collection" class="btn shop">
                Shop now
              </Link>
            </div>

            <div class="col-lg-7 banner-img">
              <img src="book1.png" alt="part image" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <section class="banner-bottom py-5">
        <div class="container py-md-3">
          <div class="row grids-wthree-info text-center">
            <div class="col-lg-4 ab-content">
              <div class="ab-info-con">
                <h4>Just click & contact</h4>
                <p>
                  Choose any product you need and click on contact seller,
                  seller will handle your request.
                </p>
              </div>
            </div>
            <div class="col-lg-4 ab-content">
              <div class="ab-info-con">
                <h4>Safe & Secure Deals</h4>
                <p>
                  Deals and your private information are never disclosed on the
                  site, everything is done through personal emails.
                </p>
              </div>
            </div>
            <div class="col-lg-4 ab-content">
              <div class="ab-info-con">
                <h4>Buy Sell and Repeat</h4>
                <p>
                  Just buy old products from this site at cheap rate, if your
                  use is done sell it again here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="collections">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 ">
              <img
                src="khakhi.jpg"
                alt="part image"
                style={{ marginTop: "25px" }}
                class="img-fluid"
              />
            </div>
            <div class="col-md-4 ab-content text-center p-lg-5 p-3 my-lg-5">
              <h4>Buy Sell and Repeat</h4>
              <p>
                <b>At UnTrash</b>
                <br />
                <ol>
                  <li>Fix a price and Upload any product you want to sell.</li>

                  <li>Admin approval phase,admin will approve the product</li>

                  <li>
                    Select from a list of interested buyes to who all you want
                    to share your details.
                  </li>

                  <li>Buyers will contact you and a deal is made</li>
                </ol>
              </p>
              <br />
              <Link to="/collection" class="btn shop">
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="shipping-wthree">
        <div class="shiopping-grids d-lg-flex">
          <div class="col-lg-4 shiopping-w3pvt-gd text-center">
            <div class="icon-gd">
              <span class="fa fa-truck" aria-hidden="true"></span>
            </div>
            <div class="icon-gd-info">
              <h3>FREE SHIPPING</h3>
              <p>On all order over $2000</p>
            </div>
          </div>
          <div class="col-lg-4 shiopping-w3pvt-gd sec text-center">
            <div class="icon-gd">
              <span class="fa fa-bullhorn" aria-hidden="true"></span>
            </div>
            <div class="icon-gd-info">
              <h3>FREE RETURN</h3>
              <p>On 1st exchange in 30 days</p>
            </div>
          </div>
          <div class="col-lg-4 shiopping-w3pvt-gd text-center">
            <div class="icon-gd">
              {" "}
              <span class="fa fa-gift" aria-hidden="true"></span>
            </div>
            <div class="icon-gd-info">
              <h3>MEMBER DISCOUNT</h3>
              <p>Register &amp; save up to $29%</p>
            </div>
          </div>
        </div>
      </section> */}

      <div class="footer_agileinfo_topf py-5">
        <div class="container py-md-5">
          <div class="row">
            <div class="col-lg-3 footer_wthree_gridf mt-lg-5">
              <h2>
                <a href="index.html">
                  <span>Un</span>Trash
                </a>{" "}
              </h2>
              <label class="sub-des2">Buy Sell and Repeat</label>
            </div>
            <div class="col-lg-3 footer_wthree_gridf mt-md-0 mt-4">
              <ul class="footer_wthree_gridf_list">
                <li>
                  <Link to="/">
                    <span class="fa fa-angle-right" aria-hidden="true"></span>{" "}
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <span class="fa fa-angle-right" aria-hidden="true"></span>{" "}
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/collection">
                    <span class="fa fa-angle-right" aria-hidden="true"></span>{" "}
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/collection">
                    <span class="fa fa-angle-right" aria-hidden="true"></span>
                    Collections
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div class="col-lg-3 footer_wthree_gridf mt-md-0 mt-sm-4 mt-3">
              <ul class="footer_wthree_gridf_list">
                <li>
                  <a href="single.html">
                    <span class="fa fa-angle-right" aria-hidden="true"></span>{" "}
                    Extra Page
                  </a>
                </li>

                <li>
                  <a href="#">
                    <span class="fa fa-angle-right" aria-hidden="true"></span>{" "}
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="single.html">
                    <span class="fa fa-angle-right" aria-hidden="true"></span>{" "}
                    Shop Single
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    <span class="fa fa-angle-right" aria-hidden="true"></span>{" "}
                    Contact Us
                  </a>
                </li>
              </ul>
            </div> */}

            <div class="col-lg-3 footer_wthree_gridf mt-md-0 mt-sm-4 mt-3">
              <ul class="footer_wthree_gridf_list">
                {/* <li>
                  <a to="/">
                    <span class="fa fa-angle-right" aria-hidden="true"></span>{" "}
                    Login{" "}
                  </a>
                </li> */}
                <li>
                  <Link to="/login">
                    <span class="fa fa-angle-right" aria-hidden="true"></span>{" "}
                    Login{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/signup">
                    <span class="fa fa-angle-right" aria-hidden="true"></span>
                    Register
                  </Link>
                </li>
                {/* <li>
                  <a href="#">
                    <span class="fa fa-angle-right" aria-hidden="true"></span>
                    Privacy & Policy
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          {/* <div class="w3ls-fsocial-grid">
            <h3 class="sub-w3ls-headf">Follow Us</h3>
            <div class="social-ficons">
              <ul>
                <li>
                  <a href="#">
                    <span class="fa fa-facebook"></span> Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-twitter"></span> Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-google"></span>Google
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="move-top text-center mt-lg-4 mt-3">
            <a href="#home">
              <span class="fa fa-angle-double-up" aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </div>
      

      <div class="cpy-right text-center py-3">
        <p>
          © 2019 Baggage. All rights reserved | Design by
          <a href="http://w3layouts.com"> W3layouts.</a>
        </p>
      </div> */}
        </div>
      </div>
    </div>
  );
}
