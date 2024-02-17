import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Card from "../Components/Card";
import HomeSlider from "../Components/HomeSlider";
import { getProductByCategory } from "../services/product.service";
import {getProductTypeCount} from "../services/user.service"
function Home() {
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
      label: "Weeding Card",
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
  ];
  const [showloader, setShowLoader]=useState(true)
  const [category, setCategory] = useState("STAMPS");
  const [productListArr, setProductListArr] = useState([]);
  const getProductList = async (category) => {
    try {
      let response = await getProductByCategory(category);
      if (response.status == 200) {
        setProductListArr(response?.data?.products);
        setShowLoader(false)
      }
    } catch (error) {
      // toast.error("Something went wrong")
    }
  };
  const getProductCount = async () => {
    try {
      let response = await getProductTypeCount();
      if (response.status == 200) {
        
        setProductTypeCount(response?.data?.products);
      }
    } catch (error) {
      // toast.error("Something went wrong")
    }
  };
  const [productTypeCount, setProductTypeCount]=useState([])
  useEffect(()=>{

    getProductList(category);
  },[category])
  useEffect(() => {
    getProductCount()
  }, []);
  return (
    <div>
      <HomeSlider />
      <div className="newsDiv text-center py-4">
        <Typewriter
          options={{
            strings: [
              "Welcome to India's premier graphics procurement platform, offering cost-effective pricing solutions tailored to meet your needs.",
              "Address : Newalal Chowk Road, Purnia, Bihar 854301, India",
              "Contact Us : +919534404400, +919472679572",
              "Email on g.p.press85431@gmail.com",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="px-lg-5 mt-3 mx-lg-5 px-md-0 mx-md-0 px-1">
        <div className="px-lg-5 px-md-1">
          <div className="homeHeader py-4 text-center">
            <b
              className={"px-2  mx-3 " + (category == "STAMPS" ? " activeCategoryItem" : " ")}
              onClick={() => setCategory("STAMPS")}
            >
              STAMPS
            </b>
            <b
              className={"px-2  mx-3 " + (category == "BANNER" ? " activeCategoryItem" : " ")}
              onClick={() => setCategory("BANNER")}
            >
              BANNER
            </b>
            <b
              className={"px-2  mx-3 " + (category == "Bill Book" ? " activeCategoryItem" : " ")}
              onClick={() => setCategory("Bill Book")}
            >
              BILL BOOK
            </b>
            <b
              className={"px-2  mx-3 " + (category == "Business Card" ? " activeCategoryItem" : " ")}
              onClick={() => setCategory("Business Card")}
            >
              BUSINESS CARDS
            </b>
            <b
              className={"px-2  mx-3 " + (category == "Invitation Card" ? " activeCategoryItem" : " ")}
              onClick={() => setCategory("Invitation Card")}
            >
              INVITATION CARD
            </b>
            <b
              className={"px-2  mx-3 " + (category == "Opening Card" ? " activeCategoryItem" : " ")}
              onClick={() => setCategory("Opening Card")}
            >
              OPENING CARD
            </b>
            <b
              className={"px-2  mx-3 " + (category == "Letterhead" ? " activeCategoryItem" : " ")}
              onClick={() => setCategory("Letterhead")}
            >
              LETTER HEAD
            </b>
          </div>
          {showloader? <div className="d-flex justify-content-center align-items-center" style={{height:"50vh"}}>
      <div className="spinner-border text-secondary spinner-border"></div>
      </div>:<div className="row m-0 p-0">
            {productListArr?.length > 0 ? (
              productListArr?.map((v, i) => {
                return <Card value={v} />;
              })
            ) : (
              <div className="my-5 py-5">
                <h5 className="text-center">
                  Opps! <br />
                  No results found for this category. Come back latter !!!
                </h5>{" "}
              </div>
            )}
          </div>}
          
          
        </div>
      </div>
      <div className="py-5" style={{ background: "#EBEBEB", marginTop: "100px" }}>
        <h2 className="text-center whyChooseUsHeading">
          {" "}
          <u>Why Manish Design Studio ?</u>
        </h2>
        <div className="px-lg-5 mx-lg-5 px-md-0 mx-md-0 px-1">
          <div className="px-lg-5 px-md-1">
            <div className="row mt-3 m-0">
              <div className="col-lg-6">
                <div className="m-1 p-3 bg-light shadow-lg heightLg520Md100P">
                  <h5 className="text-center mt-2 mb-4">Unveiling the Experience</h5>

                  <p>
                    Manish Design Studio is not just a platform; it’s an immersive experience that transcends
                    conventional design paradigms. Whether it’s sleek logos, captivating banners, or intricate
                    illustrations, our diverse range of design options allows you to find the perfect match for your
                    specific needs. <br />
                    <br /> Our curated collection of graphics design offerings reflects our dedication to catering to
                    your unique tastes and preferences. Each design is a testament to our unwavering commitment to
                    quality, creativity, and innovation.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="m-1 p-3 bg-light shadow-lg heightLg520Md100P">
                  <h5 className="text-center mt-2 mb-4">Your Vision, Our Priority</h5>

                  <p>
                    At Manish Design Studio, your vision takes center stage. We believe that every design should be a
                    reflection of your unique identity and aspirations. We are not just creating designs; we are weaving
                    stories that convey your essence and message to the world. <br />
                    <br /> Our collaborative approach ensures that your input and ideas are seamlessly integrated into
                    the design process, resulting in tailor-made solutions that truly resonate with your objectives.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="m-1 p-3 bg-light  shadow-lg heightLg520Md100P">
                  <h5 className="text-center mt-2 mb-4">The Art of Innovation</h5>

                  <p>
                    Creativity is the cornerstone of our existence. We take pride in nurturing a culture of innovation,
                    where every design is a masterpiece in its own right. Our team of seasoned designers possesses a
                    wealth of experience and a keen eye for detail, ensuring that each design is infused with artistic
                    brilliance and technical precision. <br />
                    <br /> With Manish Design Studio, you’re not just getting a design; you’re experiencing a work of
                    art meticulously crafted to captivate and inspire.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="m-1 p-3 bg-light shadow-lg  heightLg520Md100P">
                  <h5 className="text-center mt-2 mb-4">The Path Forward</h5>
                  <p>
                    Manish Design Studio is more than just a platform; it’s a commitment to excellence, a dedication to
                    innovation, and a celebration of creativity. As we embark on this journey, we are excited to bring
                    you more than just design – we’re bringing you an experience that elevates your visual landscape.{" "}
                    <br />
                    <br />
                    Our promise to you is to continue pushing the boundaries of graphics design, unveiling new
                    dimensions of creativity, and exceeding your expectations every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 checkPopularBg">
        <div className="px-lg-5 mx-lg-5 px-md-0 mx-md-0 px-1">
          <div className="mx-lg-5 mx-1 p-lg-5 p-2  rounded shadow">
            <h2 className="text-center text-light whyChooseUsHeading">
              {" "}
              <u>Check Our Popular Categories !</u>
            </h2>
            <p className="text-center text-light fontMono mt-3 mb-5">
              There are all type of design CDR and PSD files available for graphic designer and printers.
            </p>
            <div className="row mt-3">
              {productTypeCount.map((v, i) => {
                return (
                  <div className="col-lg-3 col-md-4 col-6 text-center mb-3">
                    <p className="text-light mb-0" style={{ fontSize: "15px" }}>
                      <b>{v?.product_type}</b>
                    </p>
                    <div style={{ fontSize: "12px", fontWeight: "500", color: "whitesmoke" }}>
                      {v?.count} Products
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <h2 className="text-center whyChooseUsHeading">
          {" "}
          <u>Our Happy Clients!</u>
        </h2>
        <div className="px-lg-5 mx-lg-5 px-md-0 mx-md-0 px-1">
          <div className="px-lg-5 px-md-1">
            <div className="row mt-5 m-0 ">
              <div className="col-lg-4 p-0">
                <div className="m-2 p-4  bg-light shadow-lg">
                  <p className="text-secondary">
                    "The creativity and professionalism at Manish Design Studio left me speechless. They transformed my
                    vague ideas into a visually stunning representation that perfectly captured my brand's essence. The
                    team's attention to detail and collaborative spirit made the design process seamless. I am
                    absolutely thrilled with the results!"
                  </p>
                  <h5 className="mb-0">Pawan Verma</h5>
                  <p>Purnea, Bihar</p>
                </div>
              </div>
              <div className="col-lg-4 p-0">
                <div className="m-2 p-4  bg-light shadow-lg">
                  <p className="text-secondary">
                    "Manish Design Studio's creativity and professionalism surpassed my expectations. They skillfully
                    translated my vague ideas into a visually striking representation that flawlessly embodied my brand.
                    The team's meticulous attention to detail and collaborative approach made the entire design journey
                    effortless. I am extremely pleased with the final results!"
                  </p>
                  <h5 className="mb-0">Amit Kumar Jha</h5>
                  <p>Purnea, Bihar</p>
                </div>
              </div>
              <div className="col-lg-4 p-0">
                <div className="m-2 p-4  bg-light shadow-lg">
                  <p className="text-secondary">
                    "The ingenuity and professionalism exhibited by Manish Design Studio truly amazed me. They
                    skillfully translated my initial concepts into a visually stunning representation that captured the
                    very essence of my brand. The team's meticulous attention to detail and collaborative mindset made
                    the design process incredibly smooth.
                  </p>
                  <h5 className="mb-0">Shubham Singh</h5>
                  <p>Patna, Bihar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
