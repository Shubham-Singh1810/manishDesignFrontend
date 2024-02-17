import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {changePassword} from "../services/user.service"

function ChangePassword() {
  const [passwordDetails, setPasswordDetails] = useState({
    old_password: "",
    password: "",
    confirm_password: "",
  });
const validationForm = ()=>{
  let result = true
  if(passwordDetails.old_password==""){
    toast.error("Old Password is a required field");
    result = false
  }
  if(passwordDetails.password==""){
    toast.error("Password is a required field");
    result = false
  }
  if (passwordDetails.password != passwordDetails.confirm_password){
    toast.error("Password and Confirm password doesn't match");
    result = false
  }
  return result
}
  const handlePasswordChange = async () => {

    if (validationForm()) {
      try {
        let response = await changePassword(passwordDetails)
        if(response.status){
          toast.success("Password Update successfully")
        }
      } catch (error) {
        toast.error("Something went wrong")
      }
    } else {
      toast.error("Form Validation error");
    }
  };
  return (
    <div className="col-lg-8 bg-light p-md-5 p-2 rounded shadow-lg col-12 ">
      <h4>Change Password</h4>
      <div className="row">
        <div className="col-md-6 my-2 col-12">
          <lable className="">Old Password</lable>
          <input
            className="form-control"
            type="password"
            value={passwordDetails.old_password}
            onChange={(e) => setPasswordDetails({ ...passwordDetails, old_password: e.target.value })}
          />
        </div>
        <div className="col-md-6 my-2 col-12">
          <lable className="">New Password</lable>
          <input
            className="form-control"
            type="password"
            value={passwordDetails.password}
            onChange={(e) => setPasswordDetails({ ...passwordDetails, password: e.target.value })}
          />
        </div>
        <div className="col-md-6 my-2 col-12">
          <lable className="">Confirm Password</lable>
          <input
            className="form-control"
            type="password"
            value={passwordDetails.confirm_password}
            onChange={(e) => setPasswordDetails({ ...passwordDetails, confirm_password: e.target.value })}
          />
        </div>
        <div className=" my-2 col-12">
          <button className="btn w-100 btn-primary" onClick={handlePasswordChange}>
            Save
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default ChangePassword;
