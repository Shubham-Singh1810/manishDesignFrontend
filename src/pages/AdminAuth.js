import {useState} from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../services/user.service";
import { useGlobalState } from "../GlobalProvider";
function AdminAuth() {
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const { setGlobalState, globalState } = useGlobalState();
    const navigate = useNavigate()
    const [loginForm, setLoginForm] = useState({
        contact: "",
        password: "",
      });
    const handleLogin = async () => {
        try {
          let response = await adminLogin(loginForm);
          if (response.status == 200) {
            console.log(response.data)
            localStorage.setItem("manish_design_user", JSON.stringify(response.data))
            setLoginForm({
              password:"",
              contact:""
            });
            toast.success("Admin Loged In Successfully!");
            setTimeout(()=>{
              navigate("/admin_dashboard")
              window.location.reload()
            }, 1000);
           
          }
        } catch (error) {
          toast.error("Invalid Credintial");
        }
      };
    return (
        <div style={{ background: "#F3F3F3" }}>
          <div className=" ">
            <div className="row m-0 pb-5 pb-md-0 p-lg-5">
              <div className="col-lg-6 vh80 col-12 d-md-flex align-items-center d-flex">
                <div className="w-100">
                  <h1 className="mx-lg-5">Hello</h1>
                  <h5 className="mx-lg-5 mb-4">Login as admin</h5>
                  <div className="mx-lg-5">
                    <label className="my-2">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control mb-2 py-2"
                      placeholder="Eg. 9876543210"
                      value={loginForm.contact}
                      onChange={(e) => setLoginForm({ ...loginForm, contact: e.target.value })}
                    />
                    <div className="d-flex justify-content-between align-items-center my-2">
                      <label className="">
                        Password <span className="text-danger">*</span>
                      </label>
                      <i
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className={"fa mt-2 me-1" + (showLoginPassword ? " fa-eye-slash" : " fa-eye")}
                      ></i>
                    </div>
    
                    <input
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="form-control mb-2 py-2"
                      type={showLoginPassword ? "text" : "password"}
                      placeholder=""
                    />
                    <button className="btn mt-3 w-100 btn-primary shadow" onClick={handleLogin}>
                      Login
                    </button>
                    
                  </div>
                </div>
              </div>
              <div
                className=
                  "col-lg-6  vh80 authSlidePic d-md-block d-none col-12 my-auto moveRight"
                
                style={{ background: "#F3F3F3" }}
              >
                <img src="/image/aboutImg.jpg" className="img-fluid " />
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      );
}

export default AdminAuth