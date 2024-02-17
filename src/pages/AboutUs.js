import React from "react";
import Typewriter from "typewriter-effect";
function AboutUs() {
    const dropDownArr = [
         "Logo",
         "Flyer",
         "Brochure",
         "Business Card",
       "Opening Card",
         "Invitation Card",
        "Weeding Card",
         "Calendar",
         "Website Sliders",
         "Social Media Poster",
        "Letterhead",
         "Graphic Designing",
       
      ];
  return (
    <div style={{ background: "#F3F3F3" }}>
      <div className="px-lg-5 ">
        <div className="row m-0 p-lg-5">
          <div className="col-lg-6 col-12 my-auto order-lg-1 order-2">
            <div className="mb-5 pb-lg-5">
              <h2>"Unleashing Creativity: Elevate Your Vision with Our Innovative Design Studio"</h2>
              <p>
                Welcome to our design studio, where creativity meets craftsmanship, and ideas come to life in vibrant
                pixels and tangible forms. At Manish Design Studio, we are passionate about transforming concepts into
                captivating visual narratives that resonate with your audience. With a team of skilled designers, we
                embark on a journey to capture the essence of your brand, infusing every project with a unique blend of
                innovation and artistic flair. Whether it's graphic design, web development, or brand identity, we
                strive to exceed expectations, delivering solutions that not only meet but exceed your vision. Join us
                in redefining the aesthetics of your brand, where every design tells a story and every detail speaks
                volumes.
              </p>
              <div className="d-flex">
                <h4 className="me-2 text-secondary"><u> Our Products </u>:</h4>
              <h4 className="text-secondary">
              <Typewriter
                options={{
                  strings: dropDownArr,
                  autoStart: true,
                  loop: true,
                }}
              />
              </h4>
              </div>
              
              
            </div>
          </div>
          <div className="col-lg-6 col-12  my-auto order-lg-2 order-1">
            <img className="img-fluid" src="/image/aboutImg.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
