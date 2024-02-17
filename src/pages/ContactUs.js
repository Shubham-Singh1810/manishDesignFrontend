import React,{useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {addContactQuery} from "../services/user.service"
import {useNavigate} from "react-router-dom"
function ContactUs() {
  const navigate = useNavigate()
  const[contactForm,setContactForm]=useState({
    user_name:"",
    contact:"",
    subject:"",
    query:""
  })
  const handleContactSubmit =async()=>{
    
    if(contactForm.user_name && contactForm.contact && contactForm.subject && contactForm.query ){
      if(contactForm.contact.length!=10){
        toast.error("Please enter a valid phone number");
        return
      }
      try {
        let response = await addContactQuery(contactForm);
      if(response.data.message=="Your query submitted successfully!"){
        toast.success("Your query submitted successfully!");
        setTimeout(() => {
          setContactForm({
            user_name:"",
    contact:"",
    subject:"",
    query:""
          })
          navigate("/")
        }, 1500);
      }
      else{
toast.error("Something went wrong");
      }
        
      } catch (error) {
        toast.error("Internal Server Error");
      }
      
      
    }
    else{
      toast.error("All fields are required");
    }
  }
  return (
    <div style={{ background: "#F3F3F3" }}>
      <div className="px-lg-5 ">
        <h2 className="justify-content-center d-flex text-secondary pt-3">
          <div className="midLine"></div>
          <span className="px-2">Contact Us</span>
          <div className="midLine"></div>
        </h2>
        <div className="row m-0 pb-5 pb-md-0 p-lg-5">
          <div className="col-lg-6 col-12 my-auto order-lg-1 order-2">
             <div className="row m-0">
                <div className="col-md-6 col-12">
                    <div className="bg-light mt-lg-0 mt-4  px-4 py-2 rounded shadow border">
                        <h2 className="text-danger"><i className="fa fa-map-marker"></i></h2>
                        <h5 className=" fontMono"> <b>Address</b></h5>
                        <p><i className="fa fa-address-card me-2"></i> Newalal Chowk Road, Purnia <br/> Bihar 854301, India</p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="bg-light  mt-4 px-4 py-2 rounded shadow border">
                        <h2 className="text-danger"><i className="fa fa-phone"></i></h2>
                        <h5 className=" fontMono"> <b>Call Us</b></h5>
                        <p> <a  className="text-dark text-decoration-none" href="tel:+91 9472679572"> <i className="fa fa-phone me-2"></i> +91 9472679572 </a> <br/>
                        <a className="text-dark text-decoration-none" href="https://wa.me/9534404400" target="_blank">
                      <i className="fa me-2 fa-whatsapp"></i>+91 9534404400
                    </a>
                         {/* <i className="fa fa-whatsapp me-2"></i> +91 9534404400 */}
                          </p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="bg-light px-4  mt-lg-0 mt-4 py-2 rounded shadow border">
                        <h2 className="text-danger"><i className="fa fa-envelope"></i></h2>
                        <h5 className=" fontMono"> <b>Email Us</b></h5>
                        <p style={{fontSize:"14px"}}>
                        <a className="text-dark text-decoration-none" href="mailto:manish@manishdesignstudio.in" ><i className="fa fa-envelope"></i> manish@manishdesignstudio.in </a>
                         
                          <br/>
                          <a className="text-dark text-decoration-none" href="mailto:g.p.press85431@gmail.com" ><i className="fa fa-envelope"></i> g.p.press85431@gmail.com </a>
                          
                          </p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="bg-light px-4 mt-4 py-2 rounded shadow border">
                        <h2 className="text-danger"><i className="fa fa-clock-o"></i></h2>
                        <h5 className=" fontMono"> <b>Open Hours</b></h5>
                        <p><i className="fa fa-calendar me-1"></i> Monday-Saturday <br/><i className="fa fa-clock-o me-2"></i>07:00 AM - 10:00 PM</p>
                    </div>
                </div>
             </div>
          </div>
          <div className="col-lg-6 col-12  my-auto order-lg-2 order-1">
            <div className="">
            <h6 className="text-center mt-lg-5 mt-2 mt-md-0">Get in touch</h6>
            <div className="row mt-3">
                <div className="col-md-6 p-0 m-0 d-flex justify-content-center   col-12">
                    <input className="form-control shadow py-2 mx-2 my-2 width95 "
                     value={contactForm.user_name}
                     onChange={(e)=>setContactForm({...contactForm, user_name:e.target.value})}
                     placeholder="Enter Name*" style={{borderRadius:"0px"}}/>
                </div>
                <div className="col-md-6 p-0 m-0 d-flex justify-content-center col-12">
                    <input className="form-control shadow p-2 mx-2 my-2 width95"
                    type="number"
                    value={contactForm.contact}
                    onChange={(e)=>setContactForm({...contactForm, contact:e.target.value})}
                     placeholder="Enter Phone No.*" style={{borderRadius:"0px"}}/>
                </div>
                <div className="p-0 m-0  d-flex justify-content-center col-12">
                    <input className="form-control shadow py-2 mx-2 my-2 width95"
                    value={contactForm.subject}
                    onChange={(e)=>setContactForm({...contactForm, subject:e.target.value})}
                    placeholder="Subject*" style={{borderRadius:"0px" }}/>
                </div>
                <div className="p-0 d-flex justify-content-center  m-0 col-12">
                    <textarea className="form-control shadow py-2 mx-2 my-2 width95"
                     value={contactForm.query}
                     onChange={(e)=>setContactForm({...contactForm, query:e.target.value})}
                     rows={5} placeholder="Message*" style={{borderRadius:"0px" }}/>
                </div>
                <div className="col-12 m-0 d-flex justify-content-center justify-content-lg-end p-0">
                    <button className="btn shadow mt-lg-3 mt-2 mb-5 me-lg-2 width95  btn-outline-secondary" onClick={handleContactSubmit}>Send Message</button>
                </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContactUs;
