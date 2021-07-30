import Axios from "axios";
import React, { useContext,useEffect, useState } from "react";
import { ProdCtx } from "../../context/product";

import SingleProd from "../singleprod";

export default function MyProducts() {
  //   const { state } = useContext(AuthContext);
  const { products, setproducts } = useContext(ProdCtx);
  const [prod, setprod] = useState([]);
  
  const call1 = async () => {
    if (products.length === 0) {
      let response = await Axios.get("/getproducts");

      setproducts(response.data.result);
    }
  };
  const call = async () => {
    let response = await Axios.get("/getStatus");

    setprod(response.data.result);
  };
  useEffect(() => {
    call1();
    call();
  }, []);
  let jsx = prod.map((prod) => {
    return <SingleProd {...prod} statusShow pendingShow call={call} />;
  });
  return (
    <>
      <section className="banner-bottom py-5">
        <div className="container py-5">
          <div className="row shop-wthree-info text-center">{jsx}</div>
        </div>
      </section>
    </>
  );
}
