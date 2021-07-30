import Axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth";
import { SpinnerCircular } from "spinners-react";
import { Link, useHistory } from "react-router-dom";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";

export default function SingleProd(props) {
  const [loading, setloading] = useState(false);
  const { state } = useContext(AuthContext);
  const history = useHistory();

  const onClk = () => {
    history.push({ pathname: "/addproducts", data: { ...props, edit: true } });
  };

  const onDelete = async () => {
    try {
      setloading(true);
      await Axios.delete(`/deleteprod/${props.prod_id}`);
      await props.fun();
      setloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        class="col-lg-3 shop-info-grid text-center mt-4"
        style={{
          float: "left",
        }}
      >
        <div class="product-shoe-info shoe" style={{}}>
          <div class="men-thumb-item">
            <img
              src={props.prod_img}
              class="img-fluid imgx"
              alt=""
              height="191 px"
              width="191 px"
            />
          </div>
          <div class="item-info-product">
            {state.user != null &&
            state.user.role === "admin" &&
            props.status === "pending" ? (
              <h4>
                <Link to={`admin/products/${props.prod_id}`}>
                  {props.prod_title}{" "}
                </Link>
              </h4>
            ) : (
              <h4>
                <Link to={`/products/${props.prod_id}`}>
                  {props.prod_title}{" "}
                </Link>
              </h4>
            )}
            {/* <h4>
              <Link to={`/products/${props.prod_id}`}>{props.prod_title} </Link>
            </h4> */}

            <div class="product_price">
              <div class="grid-price">
                <span class="money">₹{props.prod_price}</span>
              </div>
              {props.statusShow && !props.pendingShow ? (
                <>
                  <div class={props.status}>
                    <span class="status">{props.status}</span>
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    {!loading ? (
                      <a class="btn btn-danger" onClick={onDelete}>
                        <i class="icon-trash icon-large"></i> Delete
                      </a>
                    ) : (
                      <SpinnerCircular />
                    )}
                    {props.status === "declined" ? (
                      <button
                        class="btn btn-small btn-info"
                        style={{ marginLeft: "5px" }}
                        onClick={onClk}
                      >
                        Edit <i class="fa fa-edit"></i>
                      </button>
                    ) : null}
                  </div>
                </>
              ) : null}
            </div>
            {/* {props.pendingShow ? (
              !loading ? (
                <div className="pendings">
                  <i
                    class="fa fa-times fa-2x"
                    aria-hidden="true"
                    onClick={() => onClk(false)}
                  ></i>
                  <i
                    class="fa fa-check fa-2x"
                    aria-hidden="true"
                    onClick={() => onClk(true)}
                  ></i>
                </div>
              ) : (
                <SpinnerCircular />
              )
            ) : null} */}
          </div>
        </div>
      </div>
    </>
  );
}
