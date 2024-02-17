import React from 'react'
import moment from "moment"
function OrderCard({v}) {
  return (
    <div className="col-12 col-md-6 row shadow-lg m-0 p-0 rounded">
              <div className="col-lg-5 col-12 m-0 p-0">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.SLXZeuIoCke-8XztFgrLYwHaE8&pid=Api&P=0&h=180"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-7  col-12 m-0 ">
                <div className="p-1">
                  <p className="mb-0">
                    <b>Product Name :</b>
                    <br className="m-0" /> {v?.product?.product_name}
                  </p>
                  <p className="mb-0">
                    <b>Type :</b> {v?.product?.product_type}
                  </p>
                  <p className="mb-0">
                    <b>Price :</b> {v?.product?.actual_price}
                  </p>
                </div>
              </div>

              <div className="col-12">
                <p className="my-1">
                  Order Status: <b className="bg-primary rounded text-light  px-1">Pay Now</b>
                </p>
                <p className="">
                  Order Placed On: <span>{moment(v?.created_at).format("MMM Do YY")}</span>
                </p>
              </div>
            </div>
  )
}

export default OrderCard