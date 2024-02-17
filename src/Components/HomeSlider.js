import React, {useState, useEffect} from "react";

function HomeSlider() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
      setScreenWidth(window.innerWidth);
  }, []);
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        {screenWidth>450 ? <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/image/slider1.jpg" className="d-block bannerImg w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/image/slider2.jpg" className="d-block bannerImg w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/image/slider3.jpg" className="d-block bannerImg w-100 " alt="..." />
          </div>
        </div>: <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/image/mslider1.jpg" className="d-block bannerImg w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/image/mslider2.jpg" className="d-block bannerImg w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/image/mslider3.jpg" className="d-block bannerImg w-100 " alt="..." />
          </div>
        </div>}
        
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/image/slider1.jpg" className="d-block bannerImg w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/image/slider2.jpg" className="d-block bannerImg w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/image/slider3.jpg" className="d-block bannerImg w-100 " alt="..." />
          </div>
        </div>
      </div>
      {/* <div className="searchProductContainer pt-5 pt-lg-0 d-flex justify-content-center align-items-center">
        <div className="">
          <div className="mx-lg-5 mx-2 px-2">
            <h3 className="text-center text-light   px-lg-5 mx-lg-5">
            Explore Creativity: Find Your Perfect Design at <br/> MANISH DESIGN STUDIO
            </h3>
          </div>
          <div className="d-flex align-items-center mx-3 mt-4">
            <input className="w-100 p-md-2 p-1 mx-2 mx-lg-0" placeholder="Search products" />
            <div
              className="btn text-secondary  d-flex align-items-center p-2 ms-md-4 ms-1"
              style={{background:"#fff", boxShadow:"1px 2px 10px black"}}
            >
              <span className="me-2 d-lg-block d-none">Search</span>
              <i className="fa fa-search"></i>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default HomeSlider;
