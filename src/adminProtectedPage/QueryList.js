import React from "react";
import { useState, useEffect } from "react";
import { getAllQueryForAdmin } from "../services/user.service";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment"
import "react-toastify/dist/ReactToastify.css";
function QueryList() {
  const [queryListArr, setQueryListArr] = useState([]);
  const getAllQueryList = async () => {
    try {
      let response = await getAllQueryForAdmin();
      if (response?.data?.message == "Query list retrieved successfully!") {
        setQueryListArr(response?.data?.queries);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };
  useEffect(() => {
    getAllQueryList();
  }, []);
  return (
    <div className="my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="text-secondary mb-4">
          <i className="fa fa-envelope"></i> Query
        </h4>
      </div>
      <div className="row m-0">
        {queryListArr?.length > 0 ? (
          queryListArr?.map((v, i) => {
            return (
              <div className="col-12 col-md-6 col-lg-3 p-0">
                <div className="p-3 m-1 shadow">
                  <h5 className="mb-0">
                    <i className="fa fa-user me-2"></i>
                    {v?.user_name}
                  </h5>
                  <p>
                    <i className="fa fa-phone me-2"></i>
                    {v?.contact}
                  </p>
                  <div className="my-2">
                    <b>Subject: </b>{v?.subject}
                    <br />
                    <b>Query: </b>{v?.query} <br/>
                    <b>Submitted At: </b>{moment(v?.created_at).format("MMM Do YY")}
                   
                  </div>
                  <hr />
                  <a target="blank" style={{textDecoration:"none"}} href={`https://wa.me/${v?.contact}`} className="d-flex text-dark justify-content-between align-items-center">
                    
                    <p className="mb-0">Connect via WhatsApp</p>
                    <i className="fa fa-whatsapp"></i>
                    
                    
                  </a>
                </div>
              </div>
            );
          })
        ) : (
          <h1>mvbdfj</h1>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default QueryList;
