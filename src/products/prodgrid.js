import React, { useContext, useEffect, useState } from "react";
import SingleProd from "./singleprod";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";
import { ProdCtx } from "../context/product";
import Axios from "axios";
import { Tabs } from "@feuer/react-tabs";
import Prod from "./AllProducts/Prod";

export default function ProdGrid() {
  const { products, setproducts } = useContext(ProdCtx);
  const [allsubcat, setallsubcat] = useState();

  const call = async () => {
    if (products.length === 0) {
      let response = await Axios.get("/getproducts");

      setproducts(response.data.result);
    }
  };
  useEffect(() => {
    call();
    const res = async () => {
      const response = await Axios.get("/getsubcat");

      setallsubcat(response.data.result);

      //console.log(response.data);
    };
    res();
  }, []);
  let jsx = products.map((prod) => {
    if (prod.status === "approved") {
      return <SingleProd {...prod} />;
    }
  });

  return (
    <>
      <section className="banner-bottom py-5">
        <div className="container py-5">
          {/* {jsx} */}
          <Tabs
            tabsProps={{
              style: {
                textAlign: "left",
              },
            }}
            activeTab={{
              id: "tab0",
            }}
          >
            <Tabs.Tab id="tab0" title="All">
              <div class="row shop-wthree-info text-center">{jsx}</div>
            </Tabs.Tab>

            <Tabs.Tab id="tab1" title="Books">
              {/* {jsx1} */}
              <Prod id="1" />
            </Tabs.Tab>
            <Tabs.Tab id="tab2" title="Cloths">
              <Prod id="2" />
            </Tabs.Tab>
            <Tabs.Tab id="tab3" title="Electronics">
              <Prod id="3" />
            </Tabs.Tab>
            <Tabs.Tab id="tab4" title="Musical Instruments">
              <Prod id="4" />
            </Tabs.Tab>
          </Tabs>
          {/* <SingleProd {...state.props} />
            <SingleProd {...state.props} /> */}
        </div>
      </section>
    </>
  );
}
