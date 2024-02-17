import { useEffect, useState } from "react";
import { addToCart, getCartList } from "../services/product.service";
import { ToastContainer, toast } from "react-toastify";
import {addOrderApi} from "../services/user.service"
import "react-toastify/dist/ReactToastify.css";
import { useGlobalState } from "../GlobalProvider";
function Card({ myCartList, value }) {
  const { setGlobalState, globalState } = useGlobalState();
  const [readMe, setReadMe] = useState(false);
  const getCartListFunc = async () => {
    if (globalState.user) {
      try {
        let response = await getCartList({ user_id: globalState.user.user.id });
        if (response.status === 200) {
          console.log(response.data);
          setGlobalState({
            ...globalState,
            cart_products: response?.data?.cart_products,
          });
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    } else {
      toast.error("Please login to add items to the cart");
    }
  };

  const habdleAddToCart = async () => {
    if (globalState.user) {
      try {
        let response = await addToCart({ user_id: globalState.user.user.id, product_id: value?.id });
        if (response.status == 200) {
          toast.success(response?.data?.message);
          getCartListFunc();
          
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    } else {
      toast.error("Please login to add cart");
    }
  };
  const [orderDetails, setOrderDetails]=useState({
    pincode:"",
    name:"",
    phone:"",
    state:"",
    district:"",
    street:"",
  })
  const handleOrderSubmit = async() => {
    try {
      let response = await addOrderApi({...orderDetails, product_id:value?.id, user_id:globalState?.user?.user?.id});
      if(response.data.message=="Order Placed successfully!"){
        toast.success(response?.data?.message)
      }
      else{
        toast.error(response?.data?.message)
      }
    } catch (error) {
      toast.error("Internal Server Error")
    }
    console.log()
  }
  return (
    <>
      {/* <div>
        
      </div> */}

      <div className={(myCartList ? "col-lg-4 " : "col-lg-3 ") + "  col-md-4 col-12"}>
      <div className="modal fade" id="buyModel" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Your Order Details
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12">
                    <img
                      src={"https://manishdesignstudio.in/manishdesignbackend/public/storage/" + value?.product_image}
                      className="img-fluid border"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-12">
                    <h5 className="my-3">Buy {value?.product_name} for {value?.discount_price}&#x20b9;</h5>
                  </div>
                  <hr/>
                  <p className="fontMono text-secondary mx-1"><>Billing Address</></p>
                </div>
                <div className="row">
                  <div className="col-lg-12  col-12">
                    <input className="form-control mb-2" placeholder="Enter Full Name" 
                    value={orderDetails.name}
                    onChange={(e)=>setOrderDetails({...orderDetails, name:e.target.value})}
                     />
                  </div>
                  <div className="col-lg-6 col-12">
                    <input className="form-control mb-2" placeholder="Enter Phone Number" 
                    value={orderDetails.phone}
                    onChange={(e)=>setOrderDetails({...orderDetails, phone:e.target.value})}
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <input className="form-control mb-2" placeholder="Enter State" 
                    value={orderDetails.state}
                    onChange={(e)=>setOrderDetails({...orderDetails, state:e.target.value})}
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <input className="form-control mb-2" placeholder="Enter District" 
                     value={orderDetails.district}
                     onChange={(e)=>setOrderDetails({...orderDetails, district:e.target.value})}
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <input className="form-control mb-2" placeholder="Enter Pincode" 
                    value={orderDetails.pincode}
                    type="number"
                    onChange={(e)=>setOrderDetails({...orderDetails, pincode:e.target.value})}
                    />
                  </div>
                  <div className="col-lg-12 col-12">
                    <textarea className="form-control mb-2" placeholder="Enter Delevery Address"
                    value={orderDetails.street}
                    onChange={(e)=>setOrderDetails({...orderDetails, street:e.target.value})}
                    
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleOrderSubmit}>
                  Save 
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3 py-1 px-2 productCard mx-0">
          <img
            src={"https://manishdesignstudio.in/manishdesignbackend/public/storage/" + value?.product_image}
            className="img-fluid border"
            style={{ width: "100%" }}
          />

          <div className="d-flex justify-content-between align-items-center  py-2">
            <button
              className={
                "btn btn-sm  fontMono " +
                (globalState?.cart_products?.some((product) => product?.id === value?.id)
                  ? "btn-secondary"
                  : "btn-success")
              }
              style={{ borderRadius: "0", boxShadow: "1px 1px 4px black" }}
              onClick={habdleAddToCart}
            >
              {globalState?.cart_products?.some((product) => product?.id === value?.id)
                ? myCartList
                  ? "-"
                  : "ALREADY ADDED"
                : "ADD TO CART"}
            </button>
            <div>
              {Array.from({ length: parseInt(value?.rating) || 0 }).map((v, i) => (
                <i key={i} className="fa fa-star marginHorizontal2 text-warning"></i>
              ))}
            </div>
          </div>
          <h6>
            Price : &#x20b9; <s>{value?.actual_price}</s>{" "}
            <span className="bg-success px-1 text-light rounded">&#x20b9;{value?.discount_price}</span>
          </h6>
          <h6 className=" text-secondary">{value?.product_name}</h6>
          {readMe ? (
            <h6 className=" text-secondary">
              {value?.product_description}
              <br />
              <span className="text-primary  fontCursive">
                <u style={{ cursor: "pointer" }} onClick={() => setReadMe(false)}>
                  Hide Discription
                </u>
              </span>
            </h6>
          ) : (
            <h6 className=" text-secondary">
              <span className="text-primary fontCursive">
                <u style={{ cursor: "pointer" }} onClick={() => setReadMe(true)}>
                  Read Discription
                </u>
              </span>
            </h6>
          )}
          {myCartList && (
            <button
              data-bs-toggle="modal"
              data-bs-target="#buyModel"
              type="button"
              className="w-100 btn-primary btn-sm"
            >
              Buy Now
            </button>
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Card;
