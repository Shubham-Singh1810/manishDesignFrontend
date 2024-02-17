import React, { useState, useEffect } from "react";
import HomeSlider from "../Components/HomeSlider";
import { Link, useParams } from "react-router-dom";
import Card from "../Components/Card";
import { getProductByCategory } from "../services/product.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Services() {
  const params = useParams();
  const [category, setCategory] = useState("");
  const [productListArr, setProductListArr]=useState([]);
  const [showloader, setShowLoader]=useState(true)
  const getProductList = async (category)=>{
    try {
        let response = await getProductByCategory(category)
        if(response.status==200){
            console.log(response?.data?.products)
            setProductListArr(response?.data?.products)
            setShowLoader(false)
        }
    } catch (error) {
        toast.error("Something went wrong")
    }
  }
  useEffect(() => {
    const category = params?.category;
    console.log(category)
    setCategory(params?.category);
    getProductList(category);
  }, [params]);
  return (
    <div className="px-lg-5 mt-3 mx-lg-5 px-md-0 mx-md-0 px-1">
      <div className="px-md-1 py-3 d-flex justify-content-md-start justify-content-center align-items-center">
        <h5 className="text-secondary mb-0">Category</h5> <i className="fa mx-3 mt-1 fa-chevron-right"></i>{" "}
        <span>{category}</span>
      </div>
      {showloader? <div className="d-flex justify-content-center align-items-center" style={{height:"50vh"}}>
      <div className="spinner-border text-secondary spinner-border"></div>
      </div>: <div className="row m-0 p-0">
        {productListArr.length>0? productListArr?.map((v, i)=>{
            return(

                <Card value={v} key={i}/>
            )
        }): <div style={{height:"80vh"}} className="d-flex justify-content-center align-items-center">
            <h5 className="mb-5 pb-5">Opps! <br/> No results found for this category. Come back latter !!! </h5>
            </div>} 
      </div>}
      
      
      
      <ToastContainer/>
    </div>
  );
}

export default Services;
