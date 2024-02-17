import {useState} from "react";
import EditProfile from "../Components/EditProfile";
import MyCartList from "../Components/MyCartList";
import { useGlobalState } from "../GlobalProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChangePassword from "../Components/ChangePassword";
import MyOrderList from "../Components/MyOrderList";
function MyProfile() {
    const [showScreen, setShowScreen]=useState("myCartList");
    const { setGlobalState, globalState } = useGlobalState();
    const navigate = useNavigate();
     const handleLogOut = ()=>{
      localStorage.removeItem("manish_design_user");
      setGlobalState({...globalState, user:null, cart_products:null});
      toast.success("User Loged Out successfully");
      setTimeout(()=>{
        navigate("/");
      }, 1500)
    }
  return (
    <div style={{ background: "#F3F3F3" }}>
      <div className="px-lg-5 ">
        <div className="row m-0 pb-lg-5 pb-0 pb-md-0 p-lg-5">
          <div className="col-lg-4 col-12  ">
          <div className={"border myProvileNav  bg-light shadow d-flex justify-content-between rounded py-2 px-3 my-3 " + (showScreen == "myCartList" && " myProfileActive")} onClick={()=>setShowScreen("myCartList")}>
              <h4 className="mb-0">
                <i className="fa fa-shopping-cart me-3"></i>
                <span>My Cart</span>
              </h4>
              <h4 className="mb-0">
                <i className="fa fa-arrow-right"></i>
              </h4>
            </div>
            <div className={"border myProvileNav  bg-light shadow d-flex justify-content-between rounded py-2 px-3 my-3 " + (showScreen == "myOrderList" && " myProfileActive")} onClick={()=>setShowScreen("myOrderList")}>
              <h4 className="mb-0">
                <i className="fa fa-shopping-bag me-3"></i>
                <span>Order</span>
              </h4>
              <h4 className="mb-0">
                <i className="fa fa-arrow-right"></i>
              </h4>
            </div>
            <div className={"border myProvileNav  bg-light shadow d-flex justify-content-between rounded py-2 px-3 my-3 " + (showScreen == "accountDetails" && " myProfileActive")} onClick={()=>setShowScreen("accountDetails")}>
              <h4 className="mb-0">
                <i className="fa fa-user me-3"></i>
                <span>Account Details</span>
              </h4>
              <h4 className="mb-0">
                <i className="fa fa-arrow-right"></i>
              </h4>
            </div>
            
            
            <div className={"border myProvileNav  bg-light shadow d-flex justify-content-between rounded py-2 px-3 my-3 " + (showScreen == "changePassword" && " myProfileActive")} onClick={()=>setShowScreen("changePassword")}>
              <h4 className="mb-0">
                <i className="fa fa-lock me-3"></i>
                <span>Security</span>
              </h4>
              <h4 className="mb-0">
                <i className="fa fa-arrow-right"></i>
              </h4>
            </div>
            <div className="border myProvileNav  bg-light shadow d-flex justify-content-between rounded py-2 px-3 my-3" onClick={handleLogOut}>
              <h4 className="mb-0 text-danger">
                <i className="fa fa-sign-out me-3"></i>
                <span>Logout</span>
              </h4>
            </div>
          </div>
          {showScreen == "accountDetails" &&  <EditProfile/>}
          {showScreen == "myCartList" &&  <MyCartList/>}
          {showScreen == "changePassword" &&  <ChangePassword/>} 
          {showScreen == "myOrderList" &&  <MyOrderList/>} 
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default MyProfile;
