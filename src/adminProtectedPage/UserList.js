import { useState, useEffect } from "react";
import { userListFunc, deleteUser } from "../services/admin.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalState } from "../GlobalProvider";
function UserList() {
  const [userList, setUser] = useState([]);
  const { setGlobalState, globalState } = useGlobalState();
  const getUserList = async () => {
    try {
      let response = await userListFunc();
      if (response.status == 200) {
        setUser(response.data.users);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const handleDelete = async (id) => {
    try {
        // Show confirmation prompt
        const isConfirmed = window.confirm("Are you sure you want to delete this user?");

        // If user confirms, proceed with deletion
        if (isConfirmed) {
            let response = await deleteUser(id);
            if (response.status === 200) {
                toast.success("User Deleted Successfully");
                getUserList();
            }
        } else {
            // User canceled the deletion
            toast.info("User deletion canceled");
        }
    } catch (error) {
        toast.error("Something went wrong");
    }
};
  useEffect(() => {
    getUserList();
  }, []);
  return (
    <div className="my-5">
      <div>
        <h4 className="text-secondary mb-4">
          <i className="fa fa-user"></i> Active Users
        </h4>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Profile</th>
            <th scope="col">Contact No.</th>
            <th scope="col">Address</th>
            <th scope="col">
              <div className="d-flex justify-content-end">
                <div>Action</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {userList?.map((v, i) => {
            return (
              <tr>
                <th scope="row" className="pt-4">
                  {i + 1}
                </th>
                <td>
                  <div className="d-flex">
                    <div className="provileAvtar">
                      <img src={v?.profile_pic?  globalState?.imageBaseUrl+v?.profile_pic: "http://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"} />
                    </div>
                    <div className="ms-2 my-auto">
                      <h6 className="mb-0">{v?.name}</h6>
                      <p className="text-secondary mb-0 fontMono">{v?.email}</p>
                    </div>
                  </div>
                </td>
                <td className="pt-4">{v?.contact}</td>
                <td className="pt-4">{v?.address}</td>
                <td className="pt-4">
                  <div className="d-flex justify-content-end">
                    <i className="fa fa-eye mx-2"></i>
                    {v?.isAdmin=="0" && <i className="fa fa-trash" onClick={()=>handleDelete(v?.id)}></i>}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

export default UserList;
