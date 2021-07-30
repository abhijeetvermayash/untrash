import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { ProdCtx } from "../../context/product";
import SingleProd from "../singleprod";

export default function Prod(props) {
  const { products, setproducts } = useContext(ProdCtx);
  const [allsubcat, setallsubcat] = useState();
  const [subcat, setsubcat] = useState();
  console.log(props);

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
  if (allsubcat) {
    console.log(allsubcat);
    const allProd = products.filter(
      (prod) => prod.status === "approved" && prod.category === props.id
    );
    const allsubcategory = allsubcat.filter(
      (prod) => prod.category_id === props.id
    );
    console.log(allProd);
    return (
      <>
        <div class="field-group">
          <div class="content-input-field">
            <label for="cars">Select a sub_category:</label>
            <select
              id="subcat"
              name="subcat"
              onChange={(e) => setsubcat(e.target.value)}
            >
              <option value="all">all</option>
              {opt(allsubcategory)}
            </select>
          </div>
          <div class="row shop-wthree-info text-center">
            {displayproducts(allProd, subcat)}
          </div>
        </div>
      </>
    );

    function opt(a) {
      return a.map((a) => {
        return <option value={a.subct_name}>{a.subct_name}</option>;
      });
    }
    function displayproducts(allprod, subcat) {
      if (subcat) {
        console.log(allprod);
        console.log(subcat);

        if (subcat === "all") {
          return allprod.map((prod) => {
            return (
              <>
                <SingleProd {...prod} />
              </>
            );
          });
        }
        return allprod
          .filter((prod) => prod.subcat === subcat)
          .map((prod) => {
            return <SingleProd {...prod} />;
          });
      } else {
        return allprod.map((prod) => {
          return (
            <>
              <SingleProd {...prod} />
            </>
          );
        });
      }
    }
  } else {
    return <div></div>;
  }
}
