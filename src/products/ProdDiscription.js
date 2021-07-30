import React, { useContext, useEffect, useState } from "react";
import { ProdCtx } from "../context/product";
import Axios from "axios";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";
import { AuthContext } from "../context/auth";
import { SpinnerCircular, SpinnerCircularFixed } from "spinners-react";

export default function ProdDiscription(props) {
  console.log(props);
  const [loading, setloading] = useState(false);
  const { state, LogOut } = useContext(AuthContext);
  const [contacted, setcontacted] = useState(false);
  const [deals, setdeals] = useState();
  console.log(1123232);

  const { products, setproducts } = useContext(ProdCtx);
  const call = async () => {
    if (products.length === 0) {
      let response = await Axios.get(
        "https://untrsh.herokuapp.com/getproducts"
      );

      setproducts(response.data.result);
    }
  };
  const calltwo = async () => {
    let response = await Axios.post("/getalreadydeal", {
      prod_id: product[0].prod_id,
    });

    if (response.data.result.length > 0) {
      setcontacted(true);
    }
  };
  const callthree = async () => {
    let response = await Axios.get("https://untrsh.herokuapp.com/getDeal");
    console.log(1111111111);
    console.log(response);

    if (response.data.result.length > 0) {
      setdeals(
        response.data.result.filter(
          (prod) => prod.prod_id === product[0].prod_id
        )
      );
    } else {
      setdeals(response);
    }
  };

  useEffect(() => {
    call();
    calltwo();
    callthree();
  }, []);
  const [cl, setcl] = useState(false);
  console.log(cl);
  console.log("lalala");
  console.log(products);
  console.log("dadadad");
  const product = products.filter(
    (prod) => prod.prod_id === props.match.params.id
  );
  console.log(product);

  const table1 = (deals) => {
    const onClk = async (approved, email, id, prod_id, prod_title) => {
      console.log(approved);

      try {
        setloading(true);
        await Axios.post("https://untrsh.herokuapp.com/newapprovedeals", {
          approved: approved,
          email: email,
          buyer_id: id,
          prod_id: prod_id,
          prod_title: prod_title,
        });
        // await Axios.post("/approvedeals", {
        //   approved: approved,
        //   email: email,
        //   buyer_id: id,
        //   prod_id: prod_id,
        //   prod_title: prod_title,
        // });

        callthree();
        setloading(false);
      } catch (err) {
        console.log(err);
      }
    };

    return deals.map((deal, id) => {
      return (
        <tr>
          <th scope="row">{id + 1}</th>
          <td>{deal.name}</td>
          <td>{deal.email}</td>
          <td>{deal.contact_no}</td>

          <td>
            <i
              class="fa fa-check fa-2x"
              aria-hidden="true"
              onClick={() =>
                onClk(
                  true,
                  deal.email,
                  deal.buyer_id,
                  deal.prod_id,
                  deal.prod_title
                )
              }
            ></i>
          </td>
          <td>
            <i
              class="fa fa-times fa-2x"
              aria-hidden="true"
              onClick={() =>
                onClk(
                  true,
                  deal.email,
                  deal.buyer_id,
                  deal.prod_id,
                  deal.prod_title
                )
              }
            ></i>
          </td>
        </tr>
      );
    });
  };

  const pendinganddeclined = (p) => {
    console.log("jdads");
    if (p.status === "approved") {
      return (
        <div>
          {" "}
          {state.user != null && state.user.user_id === product[0].seller_id ? (
            <div>
              <button
                type="submit"
                style={{
                  backgroundColor: "Green",
                  border: "none",
                  color: "white",
                  padding: "15px 32px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                }}
                class="btn"
              >
                You added this product
              </button>
              <br />
              <br />

              {deals ? (
                deals.length > 0 ? (
                  <>
                    <p>We really Thank you for adding this product!</p>
                    <h3 style={{ marginTop: "100px" }}>
                      You can Approve Your Buyers Below
                    </h3>
                    <table
                      style={{
                        marginLeft: "300px",
                        marginBottom: "50px",
                        float: "left",
                        marginRight: "200px",
                        width: "800px",
                        alignContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                      }}
                      class="table table-striped"
                    >
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email-id</th>
                          <th scope="col">Contact No</th>
                          <th scope="col">Approve</th>
                          <th scope="col">Decline</th>
                        </tr>
                      </thead>
                      <tbody>{table1(deals)}</tbody>
                    </table>
                    {/* {loading ? (
                <div>
                  <SpinnerCircularFixed />
                </div>
              ) : (
                <></>
              )} */}
                  </>
                ) : (
                  <div>
                    <h3>No New Buyers Till now</h3>
                  </div>
                )
              ) : (
                <div>No New Buyers Till now</div>
              )}
            </div>
          ) : contacted ? (
            <div>
              <button
                type="submit"
                style={{
                  backgroundColor: "Green",
                  border: "none",
                  color: "white",
                  padding: "15px 32px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                }}
                class="btn"
              >
                Contacted!!
              </button>
              <p>
                You have already contacted the seller,wait for the reply from
                him
              </p>
            </div>
          ) : cl ? (
            <div>
              <button
                type="submit"
                style={{
                  backgroundColor: "Green",
                  border: "none",
                  color: "white",
                  padding: "15px 32px",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                }}
                class="btn"
              >
                Contacted!!
              </button>
              <p>
                You have already contacted the seller,wait for the reply from
                him
              </p>
            </div>
          ) : (
            <button
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                setcl(true);
                if (state.user != null) {
                  await Axios.post(
                    "https://untrsh.herokuapp.com/usr/makeDeal",
                    {
                      prod_id: product[0].prod_id,
                    }
                  );
                } else {
                  alert("Login First To Contact Seller");
                  window.location.replace("/collection");
                }
              }}
              style={{
                backgroundColor: "#f44336",
                border: "none",
                color: "white",
                padding: "15px 32px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
              }}
              class="btn"
            >
              Contact Seller
            </button>
          )}
        </div>
      );
    } else if (p.status === "pending") {
      return (
        <div>
          <button
            type="submit"
            style={{
              backgroundColor: "#FFA500",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
            }}
            class="btn"
          >
            Pending
          </button>
          <p style={{ fontSize: "24px" }}>
            Your Product is under pending,
            <br />
            wait for admin approval
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <button
            type="submit"
            style={{
              backgroundColor: "#f44336",
              border: "none",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
            }}
            class="btn"
          >
            Declined
          </button>
          <br />
          <p style={{ fontSize: "24px" }}>Your Product has been declined</p>
          {p.reason ? (
            <div>
              <p style={{ fontSize: "24px" }}>And here is the reason:</p>
              <u>
                <p style={{ fontSize: "20px" }}>{p.reason}</p>
              </u>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      );
    }
  };

  if (!loading) {
    return (
      <div>
        <br />

        <h1 style={{ marginTop: "20px" }}>{product[0].prod_title}</h1>
        <img
          src={product[0].prod_img}
          style={{
            height: "600px",
            width: "600px",
            float: "left",
            marginTop: "50px",
            marginLeft: "200px",
            marginBottom: "200px",
          }}
        />
        <h2 style={{ marginTop: "200px" }}>Product Discription</h2>
        <br />
        <h3>{product[0].prod_desc}</h3>

        <br />
        <h2 style={{ marginTop: "50px" }}>Product Price</h2>
        <br />
        <h3>Rs &nbsp;{product[0].prod_price}</h3>
        <br />

        {pendinganddeclined(product[0])}
      </div>
    );
  } else {
    return (
      <div style={{ marginTop: "300px" }}>
        <SpinnerCircular size="5%" />
      </div>
    );
  }
}
