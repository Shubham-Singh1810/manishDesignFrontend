import React from "react";
import Card from "./Card";
import { useGlobalState } from "../GlobalProvider";
import { Link, useLocation } from "react-router-dom";
function MyCartList() {
  const { setGlobalState, globalState } = useGlobalState();
  return (
    <div className="col-lg-8  px-lg-5 px-1 rounded col-12 ">
      <h3 className="text-center">
        <u>My Cart Items</u>
      </h3>
      <div className="row m-0">
        
        {globalState?.cart_products?.length>0?
        globalState?.cart_products?.map((v, i) => {
          return <Card myCartList={true} value={v} />;
        }): <div className="text-secondary mt-5 pt-5 text-center">No product added to cart !.<br/> <Link to="/">View Products </Link></div>}
      </div>
    </div>
  );
}

export default MyCartList;
