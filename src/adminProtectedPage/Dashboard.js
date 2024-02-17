import {useEffect, useState} from "react";
import UserList from "./UserList";
import ProductList from "./ProductList";
import OrderList from "./OrderList";
import { useNavigate } from "react-router-dom";
import QueryList from "./QueryList";
import {adminStatics} from "../services/admin.service"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Dashboard() {
  const navigate = useNavigate()
    const [showScreen, setShowScreen] = useState("userList");
    const [staticData, setStaticData]= useState()
    const getStaticsCount = async ()=>{
      try {
        let response = await adminStatics();
        if(response.status==200){
          setStaticData(response.data)
        }
      } catch (error) {
        toast.error("Something went wrong")
      }
    }
    useEffect(()=>{
      if(localStorage.getItem("manish_design_user") && (JSON.parse(localStorage.getItem("manish_design_user")).user?.isAdmin)==1){
        getStaticsCount()
      }
      else{
        navigate("/")
      }
    }, [])
  return (
    <div className="pb-5 pb-md-0 p-lg-5">
      <div className="pb-5 pb-md-0 px-2 px-lg-5">
        <button
          class="btn btn-secondary-outline mt-3 mt-lg-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i className="fa fa-bars" />
        </button>
        <div>
          <div className="row m-0">
            <div className="col-lg-3 col-md-6 col-12 p-0" onClick={()=>setShowScreen("userList")}>
              <div className={"my-2 me-lg-3 p-3 rounded shadow " + (showScreen=="userList" && " border shadow-lg")}>
                <h4 className="text-secondary">Total Users</h4>
                <p>{staticData?.total_users}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 p-0" onClick={()=>setShowScreen("productList")}>
              <div className={"my-2 me-lg-3 p-3 rounded shadow " + (showScreen=="productList" && " border shadow-lg")}>
                <h4 className="text-secondary">Total Products</h4>
                <p>{staticData?.total_products}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 p-0" onClick={()=>setShowScreen("orderList")}>
              <div className={"my-2 me-lg-3 p-3 rounded shadow " + (showScreen=="orderList" && " border shadow-lg")}>
                <h4 className="text-secondary">Total Orders</h4>
                <p>{staticData?.total_orders}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 p-0" onClick={()=>setShowScreen("queryList")}>
              <div className={"my-2 me-lg-3 p-3 rounded shadow " + (showScreen=="queryList" && " border shadow-lg")}>
                <h4 className="text-secondary">Total Query</h4>
                <p>{staticData?.total_queries}</p>
              </div>
            </div>
          </div>
          {showScreen=="userList" && <UserList/>}
          {showScreen=="productList" && <ProductList/>}
          {showScreen=="orderList" && <OrderList/>}
          {showScreen=="queryList" && <QueryList/>}
        </div>
      </div>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Manish Design Official</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <div className={"btn  m-2 " +(showScreen=="userList" ?"btn-primary": "btn-outline-primary")} onClick={()=>setShowScreen("userList")}>Users</div>
            <div className={"btn  m-2 " +(showScreen=="productList" ?"btn-primary": "btn-outline-primary")} onClick={()=>setShowScreen("productList")}>Products</div>
            <div className={"btn  m-2 " +(showScreen=="orderList" ?"btn-primary": "btn-outline-primary")} onClick={()=>setShowScreen("orderList")}>Orders</div>
            <div className={"btn  m-2 " +(showScreen=="queryList" ?"btn-primary": "btn-outline-primary")} onClick={()=>setShowScreen("queryList")}>Query</div>
          </div>
          <hr className="m-1" />
          <hr className="m-0" />
          <div className="mt-3 d-flex justify-content-between align-items-center ms-1">
            <h5>Notifications</h5>
            <i className="fa fa-bell"></i>
          </div>
          <div className="mt-5">
            <p className="text-center">No new notification</p>
          </div>
        </div>
      </div>

      <ToastContainer/>
    </div>
  );
}

export default Dashboard;
