import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalState } from "../GlobalProvider";

function Navbar() {
  const location = useLocation();
  const { setGlobalState, globalState } = useGlobalState();
  console.log(globalState?.user)
  const dropDownArr = [
    {
      label: "Logo",
    },

    {
      label: "Flyer",
    },

    {
      label: "Brochure",
    },
    {
      label: "Business Card",
    },
    {
      label: "Opening Card",
    },
    {
      label: "Invitation Card",
    },
    {
      label: "Wedding Card",
    },
    {
      label: "Calendar",
    },
    {
      label: "Website Sliders",
    },
    {
      label: "Social Media Poster",
    },

    {
      label: "Letterhead",
    },
    {
      label: "Graphic Designing",
    },
    {
      label: "Stamps",
    },
    {
      label: "Premium Business Card",
    },
    {
      label: "Die Cut Business Card",
    },
    {
      label: "Banner",
    },
    {
      label: "Bill Book",
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid py-lg-3 py-2 px-lg-5">
        <Link className="navbar-brand brandImg ms-lg-5" to="/">
          <img src="/image/logo.jpeg" className="img-fluid" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={"nav-link active mx-3 " + (location.pathname == "/" && " activeNav")}
                aria-current="page"
                to="/"
              >
                <i className="fa fa-home me-1"></i> Home
              </Link>
            </li>

            <li className="nav-item  dropdown mx-3 ">
              <a
                className="nav-link active dropdown-toggle  "
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="row m-0 p-0 dropDownWidth">
                  {dropDownArr.map((v, i) => {
                    return (
                      <li className="col-lg-4 col-12 p-0">
                        <Link className="dropdown-item" to={`/services/${v.label}`}>
                          {v.label}
                        </Link>
                      </li>
                    );
                  })}
                </div>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className={"nav-link active  mx-3 " + (location.pathname == "/contact" && " activeNav")}
                aria-current="page"
                to="/contact"
              >
                <i className="fa fa-phone me-1"></i>Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"nav-link active mx-3 " + (location.pathname == "/about" && " activeNav")}
                aria-current="page"
                to="/about"
              >
                <i className="fa fa-globe me-1"></i> About
              </Link>
            </li>
            <li className="nav-item">
              {globalState?.user ? (
                <Link className="nav-link active mx-3" aria-current="page" to="/myProfile">
                  <i className="fa fa-user me-1"></i> My Profile
                </Link>
              ) : (
                <Link className="nav-link active mx-3" aria-current="page" to="/auth">
                  <i className="fa fa-user me-1"></i> Log In
                </Link>
              )}
            </li>
            <li className="nav-item mt-3 mt-lg-0 me-lg-5">
              <Link className="nav-link d-flex active mx-3" aria-current="page" to="/myProfile">
                <i className="fa fa-shopping-cart"></i>
                
                  <div
                    className="d-flex justify-content-center text-light align-items-center"
                    style={{
                      position: "relative",
                      fontSize: "12px",
                      borderRadius: "8px",
                      bottom: "14px",
                      right: "10px",
                      height: "16px",
                      width: "16px",
                      background: "#4c4c4c",
                    }}
                  >
                    {globalState?.cart_products ? globalState?.cart_products?.length: 0}
                  </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
