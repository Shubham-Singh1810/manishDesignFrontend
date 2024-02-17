import React, { useState, useEffect } from "react";
import { getOrderList } from "../services/user.service";
import OrderCard from "./OrderCard";
export default function MyOrderList() {
  const [orderArr, setOrderArr] = useState([]);
  const getOrderListFunc = async () => {
    try {
      let response = await getOrderList();
      if (response.data.message == "Order list retrieved successfully!") {
        setOrderArr(response?.data?.orders);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrderListFunc();
  }, []);
  return (
    <div className="col-lg-8  px-lg-5 px-1 rounded col-12 ">
      <h3 className="text-center mb-4">
        <u>My Orders</u>
      </h3>
      <div className="row">
        {orderArr?.map((v, i) => {
          return (
            <OrderCard v={v}/>
          );
        })}
      </div>
    </div>
  );
}
