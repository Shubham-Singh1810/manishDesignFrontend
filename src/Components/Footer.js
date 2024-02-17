import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className=" p-lg-5 px-0 py-5" style={{ background: "#333333" }}>
        <div className="px-lg-5  text-light">
          <div className="row m-0">
            <div className="col-lg-3">
              <div className="mx-3">
                <img src="/image/logo.jpeg" className="img-fluid rounded mb-3" style={{ height: "50px" }} />
                <p>
                  Welcome to Manish Design Studio, your premier destination for professional graphics design solutions.
                  As a dedicated Graphics Design sale platform, we take immense pride in curating captivating and
                  engaging content that resonates with your preferences.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mx-3 my-lg-0 my-3">
                <h3>Contact Us</h3>
                <div>
                  <div className="mb-1 d-flex">
                    {" "}
                    <i className="fa fa-address-card mt-1 me-2"></i>
                    <span>Newalal Chowk Road, Purnia, Bihar 854301, India</span>
                  </div>
                  <div className="mb-1">
                    <a  className="text-light text-decoration-none" href="tel:+91 9472679572"> <i className="fa fa-phone me-2"></i> +91 9472679572 </a>
                   
                  </div>
                  <div className="mb-1">
                  <a className="text-light text-decoration-none" href="https://wa.me/9534404400" target="_blank">
                    <i className="fa me-2 fa-whatsapp"></i>+91 9534404400
                     
                    </a>
                    
                  </div>
                  <div className="mb-1">
                    <a className="text-light text-decoration-none"  href="mailto:manish@manishdesignstudio.in"> <i className="fa fa-envelope me-2"></i> manish@manishdesignstudio.in</a>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mx-3 my-lg-0 my-3">
                <h3 className="">Quick Links</h3>
                <div className="row m-0">
                  <p className="mb-0 p-0 col-6"><Link className="text-light" style={{textDecoration:"none"}} to="/">Home</Link></p>
                  <p className="mb-0 p-0 col-6"><Link className="text-light" style={{textDecoration:"none"}} to="/about">About</Link></p>
                  <p className="mb-0 p-0 col-6"><Link className="text-light" style={{textDecoration:"none"}} to="/contact">Contact</Link></p>
                  <p className="mb-0 p-0 col-6"><Link className="text-light" style={{textDecoration:"none"}} to="/services/Wedding Card">Wedding Cards</Link></p>
                  <p className="mb-0 p-0 col-6"><Link className="text-light" style={{textDecoration:"none"}} to="/services/Business Card">Business Cards</Link></p>
                  <p className="mb-0 p-0 col-6"><Link className="text-light" style={{textDecoration:"none"}} to="/services/Flyer">Flyers</Link></p>
                  <p className="mb-0 p-0 col-6"><Link className="text-light" style={{textDecoration:"none"}} to="/services/Logo">Logo</Link></p>
                  <p className="mb-0 p-0 col-6"><Link className="text-light" style={{textDecoration:"none"}} to="/services/Calendar">Calendar</Link></p>
                </div>
                <hr />
                <h3 className="">Follow Us</h3>
                <div className="m-0 d-flex">
                  <h3>
                    <a
                      className="text-secondary"
                      href="https://www.instagram.com/_cute_boy_m.k.gupta/?igsh=MXFvdGFnYjlwa2Z1NA%3D%3D"
                    >
                      <i className="fa me-3 fa-instagram"></i>
                    </a>
                  </h3>
                  <h3>
                    <a
                      className="text-secondary"
                      href="https://www.facebook.com/4400manish?mibextid=ZbWKwL"
                      target="blank"
                    >
                      <i className="fa me-3 fa-facebook"></i>
                    </a>
                  </h3>
                  <h3>
                    <a className="text-secondary" href="https://wa.me/9534404400" target="_blank">
                      <i className="fa me-3 fa-whatsapp"></i>
                    </a>
                  </h3>
                </div>
               
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mx-3 my-lg-0 my-3">
                
                <div className="shadow p-2 rounded">
                  <h4 className="mb-1">Software Partner</h4>
                  <div>
                    <i className="fa me-2 fa-globe"></i>
                    <a href="https://onclicksolution.com/" target="blank" className="text-light">onclicksolution.com</a>
                  </div>
                  <div>
                  <a  className="text-light text-decoration-none" href="tel:+91 9708077542"> <i className="fa fa-phone me-2"></i> +91 9708077542 </a>
                   
                  </div>
                  <hr className="m-1" />
                  <div >
                    <span>Get In Touch :</span>
                    <a target="_blank"  href="https://www.instagram.com/amitjha_18?igsh=eXdncWZuOHF0MzZ6" className="text-light">
                      <i className="fa mx-2 fa-instagram"></i>
                    </a>
                    <a className="text-light" target="_blank" href="https://www.facebook.com/profile.php?id=100012026384270&mibextid=ZbWKwL">
                      <i className="fa me-2 fa-facebook"></i>
                    </a>

                    <a className="text-light" target="_blank" href="https://wa.me/9708077542">
                      <i className="fa me-2 fa-whatsapp"></i>
                    </a>
                    <a className="text-light" target="_blank" href="https://www.linkedin.com/in/amit-kumar-jha-212478213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-0" />
      <p style={{ fontSize: "10px", background: "#333333" }} className="py-4 mb-0 text-center text-light">
        Copyright © 2024 | All Rights Reserved | Manish Design Studio
      </p>
    </>
  );
}

export default Footer;
