import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import Carousel from "@/components/ui/carousel";
// import HomeBentoGrid from "@/components/HomeBentoGrid";
import { Button } from "@/components/ui/button";
import CustomerRatings from "@/components/CustomerRatings";
import Footer from "@/components/Footer";
import { GoArrowRight } from "react-icons/go";
import { QuantityDropdown } from "@/components/quantity-dropdown";
import BentGrid from "@/components/BentotestGrid";
import Services from "@/components/Services";

const TopGifts = [
  {
    image: "https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741360014/items_2_notfvw.png",
    text: "For Him Gift Package",
  },
  {
    image: "https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741359660/items_1_adkgs6.png",
    text: "For Her Gift Package",
  },
  {
    image: "https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741360730/items_lssr1q.png",
    text: "Festival Period Gifts",
  },
  {
    image: "https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741359222/items_3_fx2lki.png",
    text: "Work Gifts",
  },
];
export default function LandingPage() {
  return (
    <>
      <div className="Body">
        <div
          className="w-full top-0 mt-0 h-full bg-gradient-to-r from-[#E2E5FF] to-[#B5B8FF]"
          style={{
            backgroundImage: "linear-gradient(to left, #E2E5FF, #B5B8FF)",
            height: "105vh",
            width: "100%",
          }}
        >
          <Navbar />

          <div className="main">
            <div className="hero-section grid grid-cols-5 lg:px-12 max-w-fit md:mt-2 lg:mt-4">
              <div
                className="hero-text
              col-span-full  mb-4 md:col-span-2"
              >
                <h1 className="hero-section-h1 text-3xl/9   md:text-5xl/8 lg:text-6xl mb-5">
                  Express your love in a
                  <span className="font-[700] text-[#072AC8] md:drop-shadow-2xl">
                    {" "}
                    PACKAGE
                  </span>
                </h1>
                <p className="hero-section-p text-sm md:text-lg lg:text-xl/6 md:text-left p-1 md:p-0">
                  At 85gifts we create and provide crafted, personalized gifts
                  to help celebrate your most treasured memories making it easy
                  to find the perfect gift for everyone around you.
                </p>
                <Link to="/Signup">
                  <Button className="bg-secondary text-black rounded-full my-4 hover:bg-primary hover:text-white font-bold w-40 h-10 duration-300 ease-in-out">
                    Get Started
                  </Button>
                </Link>
              </div>
              <div className="carousel col-start-1 col-end-6 md:col-start-4 md:col-end-6">
                <Carousel />
              </div>
            </div>
            <div className="bento-grid max-h-fit  md:mt-1">
              {/* <HomeBentoGrid/> */}
              <BentGrid />
            </div>

            {/* Best selling section */}
            <div className="BestSelling w-[100%] p-2">
              <span className="best-selling-text flex justify-between ">
                <h1 className="text-md font-bold md:text-1xl lg:text-2xl">
                  Best Selling Gifts
                </h1>

                <Link to="/Signup">
                <Button className="explore-button p-4 text-sm md:text-2xl lg:text-3xl">
                  Explore more
                </Button>
                </Link>
              </span>

              <div className="Bestselling grid grid-cols-2 md:grid-flow-col gap-2 mt-5  md:mb-10 justify-center">
                <div className="gift-item  rounded-lg ">
                  <img
                    src="https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372619/items_4_jo35xd.png"
                    alt="for her"
                    className=" md:h-full"
                  />
                </div>
                <div className="gift-item relative   rounded-lg">
                  <img
                    src="https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372618/items_5_eeo052.png"
                    alt="Cup cakes"
                    className="w-full h-full"
                  />
                  <span className="best-seller-buttons flex flex-col bottom-1 gap-2 items-center justify-center  md:flex-row md:justify-end md:items-end absolute md:w-full h-20 md:bottom-12  md:left-6 md:gap-4 ">
                  <Link to="/Signup">
                    <Button className="add-to-cart-button bg-white cursor-pointer text-black p-2 rounded-lg hover:bg-primary hover:text-white font-bold  duration-300 ease-in-out">
                      Add to cart
                      <GoArrowRight />
                    </Button>
                    </Link>
                    <span className="quantity-dropdown    mx-auto md:mx-0">
                      <QuantityDropdown />
                    </span>
                  </span>
                </div>
                <div className="gift-item inline-block   rounded-lg">
                  <img
                    src="https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372619/items_6_mrwc1j.png"
                    alt="Giorgio Perfume"
                    className="md:h-full"
                  />
                </div>
                {/* <div className="gift-item  rounded-lg ">
                  <img
                    src="src/assets/items(4).png"
                    alt="for her"
                    className=""
                  />
                </div> */}
              </div>
            </div>

            {/* TOP GIFT SECTION */}
            <div className="TopGifts">
              <span className="best-selling-text w-full flex justify-between mt-10">
                <h1 className="text-md font-bold md:text-xl">
                  Top Gifts Packages
                </h1>
                <Link to="/Signup">
                <Button className="explore-button p-2">Explore more</Button>
                </Link>
              </span>
              

              <div className="Topgifts-circle grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mt-5 md:mb-10 md:mt-24 justify-center items-center">
                {TopGifts.map((gift) => (
                  <div className="grid justify-items-center gap-4 text-center">
                    <div className="circle-image">
                      <img src={gift.image} alt="Your Image" />
                    </div>
                    <span className="circle-text text-[#333] text-center mx-auto font-bold text-lg md:text-2xl">
                      {gift.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="friendship-offer grid grid-cols-1 mt-12  md:grid-cols-2 justify-between gap-4 md:mb-14 md:mt-16 bg-white w-full  md:h-[50vh]">
            <div className="friendship-offer-text  mb-12 md:mb-0 ">
              <h1 className="text-4xl my-6  md:text-6xl tracking-wide font-bold  md:font-extrabold">
                friendship day offer
              </h1>
              <p className="text-md md:text-3xl my-4 md:my-6">
                A big opportunity to extend love to you friends
              </p>
              <Link to="/Signup">
              <Button className="shop-now-button p-4 text-2xl text-black rounded-full drop-shadow-lg   font-bold h-10 bg-white hover:bg-primary hover:text-white duration-300 ease-in-out my-6">
                shop Now
              </Button>
              </Link>
            </div>

            <div className="friendship-img grid justify-center items-center">
              <img
                src="https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372762/Frame7_rquige.png"
                alt="friendship"
                className=" w-[100%] md:h-[48vh] "
              />
            </div>
          </div>

          <Services />

          <CustomerRatings />

          <Footer />
        </div>
      </div>
    </>
  );
}
