import { useEffect, useState } from "react";
import { useGlobalState } from "../GlobalProvider";
import { editProfile } from "../services/user.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function EditProfile() {
  const { setGlobalState, globalState } = useGlobalState();
  const [userDetails, setUserDetails] = useState({
    name: globalState?.user?.user?.name,
    contact: globalState?.user?.user?.contact,
    address: globalState?.user?.user?.address,
    email: globalState?.user?.user?.email,
    profile_pic: "",
    profile_pic_preview: globalState?.user?.user?.profile_pic,
  });
  const handleEditProfile = async () => {
    try {
      const formData = new FormData();
      formData.append('name', userDetails.name); 
      formData.append('contact', userDetails.contact);
      formData.append('address', userDetails.address);
      formData.append('profile_pic', userDetails.profile_pic );
      formData.append('email', userDetails.email);
      let response = await editProfile(formData);
      if (response.status == 200) {
        console.log(response.data);
        localStorage.setItem("manish_design_user", JSON.stringify(response.data));
        toast.success("Profile updated successfully");
        setGlobalState({ ...globalState, user: response.data });
      } else {
        toast.error("Invalid Credintial");
      }
    } catch (error) {}
  };
  useEffect(()=>{
    setUserDetails({    
      name: globalState?.user?.user?.name,
      contact: globalState?.user?.user?.contact,
      address: globalState?.user?.user?.address,
      email: globalState?.user?.user?.email,
      profile_pic: "",
      profile_pic_preview: globalState?.user?.user?.profile_pic? globalState?.imageBaseUrl+globalState?.user?.user?.profile_pic :"",
    })
  }, [globalState])
  return (
    <div className="col-lg-8 bg-light p-md-5 p-2 rounded shadow-lg col-12 ">
      <div className="row m-0">
        <div className="col-md-4 text-center col-12">
          {/* */}
          <img
            src={userDetails?.profile_pic_preview ?  userDetails?.profile_pic_preview  : "http://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"}
            className="img-fluid  shadow"
            style={{ height: "200px", width: "200px", borderRadius: "50%" }}
          />
          <div>
            <label className="mt-3 text-align-left text-primary">
              <u>Edit Profile Pic</u>
            </label>
            <input
              type="file"
              className="form-control"
              style={{ position: "relative", bottom: "30px", opacity: "0" }}
              accept=".jpg, .jpeg, .png"
              onChange={(e) => {
                setUserDetails((prevUserDetails) => ({
                  ...prevUserDetails,
                  profile_pic: e.target.files[0],
                  profile_pic_preview:URL.createObjectURL(e.target.files[0])
                }));
              }}
            />
          </div>
        </div>
        <div className="col-md-8 col-12">
          <div className="row">
            <div className="col-md-6 col-12">
              <label className="mb-1">Full Name</label>
              <input
                className="form-control"
                value={userDetails.name}
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
              />
            </div>
            <div className="col-md-6 col-12">
              <label className="mb-1">Phone Number</label>
              <input className="form-control" value={userDetails.contact} readOnly />
            </div>
            <div className=" col-12">
              <label className="mt-3 mb-1">Email</label>
              <input className="form-control" value={userDetails.email} readOnly />
            </div>
            <div className=" col-12">
              <label className="mt-3 mb-1">Address</label>
              <input
                className="form-control"
                value={userDetails.address}
                onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
              />
            </div>
            <div className="justify-content-end d-flex col-12">
              <button className="btn mt-3 mb-3 mb-md-0 btn-sm btn-primary" onClick={handleEditProfile}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default EditProfile;
