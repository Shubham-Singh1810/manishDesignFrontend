import { useState } from "react";
import { signUp, login } from "../services/user.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../GlobalProvider";
function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const { setGlobalState, globalState } = useGlobalState();
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState({
    contact: "",
    password: "",
  });
  const [signUpForm, setSignUpForm] = useState({
    contact: "",
    password: "",
    name: "",
    email: "",
    address: "",
  });
  const handleSignUp = async () => {
    try {
      let response = await signUp(signUpForm);
      if (response.status == 200) {
        localStorage.setItem("manish_design_user", JSON.stringify(response.data))
        setSignUpForm({
          password:"",
          contact:"",
          email:"",
          name:"",
          address:"",
        })
        toast.success("User Created Successfully!");
        setGlobalState({...globalState, user:response.data})
        setGlobalState({...globalState, cart_products:response?.data?.cart_products})
        setTimeout(()=>{
          navigate("/")
        }, 2000)
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const handleLogin = async () => {
    
    try {
      let response = await login(loginForm);
      if (response.status == 200) {
        console.log(response.data)
        localStorage.setItem("manish_design_user", JSON.stringify(response.data))
        setLoginForm({
          password:"",
          contact:""
        });
        toast.success("User Loged In Successfully!");
        setTimeout(()=>{
          navigate("/")
          window.location.reload()
        }, 1000);
       
      }
      else{
        toast.error("Invalid Credintial");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div style={{ background: "#F3F3F3" }}>
      <div className=" ">
        <div className="row m-0 pb-5 pb-md-0 p-lg-5">
          <div className={"col-lg-6 vh80 col-12 d-md-flex align-items-center " + (showLogin ? "d-flex" : "d-none")}>
            <div className="w-100">
              <h1 className="mx-lg-5">Hello</h1>
              <h5 className="mx-lg-5 mb-4">Login to your account</h5>
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
                <p className="text-center mt-5 fontMono">
                  Don't have an account ?{" "}
                  <a className="text-primary cursor" onClick={() => setShowLogin(false)}>
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={"col-lg-6 vh80 col-12 d-md-block align-items-center " + (!showLogin ? "d-block" : "d-none")}>
            <h5 className="mx-lg-5 mt-3 mt-md-0 mb-3">Create account</h5>
            <div className="mx-lg-5">
              <label className="my-2">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                className="form-control mb-2 py-2"
                placeholder="Eg. Amit Kumar Jha"
                value={signUpForm.name}
                onChange={(e) => setSignUpForm({ ...signUpForm, name: e.target.value })}
              />
              <label className="my-2">
                Phone Number <span className="text-danger">*</span>
              </label>
              <input
                className="form-control mb-2 py-2"
                placeholder="Eg. 9876543210"
                value={signUpForm.contact}
                onChange={(e) => setSignUpForm({ ...signUpForm, contact: e.target.value })}
              />
              <label className="my-2">
                Email <span className="text-danger"></span>
              </label>
              <input
                className="form-control mb-2 py-2"
                placeholder="Eg. abc@gmail.com"
                value={signUpForm.email}
                onChange={(e) => setSignUpForm({ ...signUpForm, email: e.target.value })}
              />
              <label className="my-2">
                Full Address <span className="text-danger"></span>
              </label>
              <input
                className="form-control mb-2 py-2"
                value={signUpForm.address}
                onChange={(e) => setSignUpForm({ ...signUpForm, address: e.target.value })}
                placeholder="Eg. Newalal Chowk Road, Purnia, Bihar 854301, India"
              />
              <div className="d-flex justify-content-between align-items-center my-2">
                <label className="">
                  Password <span className="text-danger">*</span>
                </label>
                <i
                  onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                  className={"fa mt-2 me-1" + (showSignUpPassword ? " fa-eye-slash" : " fa-eye")}
                ></i>
              </div>
              <input
                value={signUpForm.password}
                onChange={(e) => setSignUpForm({ ...signUpForm, password: e.target.value })}
                className="form-control mb-2 py-2"
                type={showSignUpPassword ? "text" : "password"}
                placeholder=""
              />
              <button className="btn mt-3 w-100 btn-primary shadow" onClick={handleSignUp}>
                Sign Up
              </button>
              <p className="text-center mt-4 fontMono">
                Already have an account ?{" "}
                <a className="text-primary cursor" onClick={() => setShowLogin(true)}>
                  Login
                </a>
              </p>
            </div>
          </div>
          <div
            className={
              "col-lg-6  vh80 authSlidePic d-md-block d-none col-12 my-auto " + (showLogin ? " moveRight" : " moveLeft")
            }
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

export default Auth;
