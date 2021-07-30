import React, { useContext } from "react";
import "./assets/css/bootstrap.css";
import "./assets/css/font-awesome.css";
import "./assets/css/style.css";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "./context/auth";
export default function Header() {
  const { state, LogOut } = useContext(AuthContext);
  return (
    <div style={{ backgroundColor: "#74d2e7" }}>
      <header class="py-sm-3 pt-3 pb-2" id="home">
        <div class="container">
          <div class="top-w3pvt d-flex">
            <div id="logo">
              <h1>
                {" "}
                <Link to="/">
                  <span class="log-w3pvt">Un</span>Trash
                </Link>{" "}
                <label class="sub-des">Buy sell repeat</label>
              </h1>
            </div>
            {!state.isLoggedIn ? (
              <div class="forms ml-auto">
                <Link to="/login" class="btn">
                  <span class="fa fa-user-circle-o"></span> Sign In
                </Link>
                <Link to="/signup" class="btn">
                  <span class="fa fa-pencil-square-o"></span> Sign Up
                </Link>
              </div>
            ) : (
              <div class="forms ml-auto">
                <Link class="btn" onClick={LogOut}>
                  <span class="fa fa-user-circle-o"></span> Log Out
                </Link>
              </div>
            )}
          </div>
          <div class="nav-top-wthree">
            <nav>
              <label for="drop" class="toggle">
                <span class="fa fa-bars"></span>
              </label>
              <input type="checkbox" id="drop" />
              <ul class="menu">
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>

                {/* <li>
                  <label for="drop-2" class="toggle">
                    Dropdown{" "}
                    <span class="fa fa-angle-down" aria-hidden="true"></span>
                  </label>
                  <a href="#">
                    Dropdown{" "}
                    <span class="fa fa-angle-down" aria-hidden="true"></span>
                  </a>
                  <input type="checkbox" id="drop-2" />
                  <ul>
                    <li>
                      <a href="coming.html" class="drop-text">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="about.html" class="drop-text">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="single.html" class="drop-text">
                        Single Page
                      </a>
                    </li>
                  </ul>
                </li> */}

                <li>
                  <NavLink to="/collection" activeClassName="active">
                    Collections
                  </NavLink>
                </li>
                {state.isLoggedIn ? (
                  <li>
                    <NavLink to="/addproducts" activeClassName="active">
                      Add Products
                    </NavLink>
                  </li>
                ) : null}
                {state.isLoggedIn ? (
                  <li>
                    <NavLink to="/myproducts" activeClassName="active">
                      My Products
                    </NavLink>
                  </li>
                ) : null}
                {state.user !== null && state.user.role === "admin" ? (
                  <li>
                    <NavLink to="/pending" activeClassName="active">
                      Pending Products
                    </NavLink>
                  </li>
                ) : null}
                <li>
                  <Link to="/contactus">Contact</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </nav>

            {/* <div class="search-form ml-auto">
                <div class="form-w3layouts-grid">
                  <form action="#" method="post" class="newsletter">
                    <input
                      class="search"
                      type="search"
                      placeholder="Search here..."
                      required=""
                    />
                    <button class="form-control btn" value="">
                      <span class="fa fa-search"></span>
                    </button>
                  </form>
                </div>
              </div> */}
            <div class="clearfix"></div>
          </div>
        </div>
      </header>
    </div>
  );
}
