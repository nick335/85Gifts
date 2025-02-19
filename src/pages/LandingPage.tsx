// import React from "react";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/ui/carousel";
// import HomeBentoGrid from "@/components/HomeBentoGrid";
import { Button } from "@/components/ui/button";
import CustomerRatings from "@/components/CustomerRatings";
import Footer from "@/components/Footer";
import { GoArrowRight } from "react-icons/go";
import { QuantityDropdown } from "@/components/quantity-dropdown";
import BentGrid from "@/components/BentotestGrid";
import Services from "@/components/Services";

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
            <div className="hero-section grid grid-cols-5 max-w-fit md:mt-16 lg:mt-24">
              <div className="hero-text col-span-full md:col-span-2">
                <h1 className="hero-section-h1 text-3xl/9   md:text-5xl/8 lg:text-6xl mb-5">
                  Express your love in a
                  <span className="font-[500] text-[#072AC8]"> PACKAGE</span>
                </h1>
                <p className="hero-section-p text-sm md:text-lg lg:text-xl ">
                  At 85gifts we create and provide crafted, personalized gifts
                  to help celebrate your most treasured memories making it easy
                  to find the perfect gift for everyone around you.
                </p>
              </div>
              <div className="carousel">
                <Carousel />
              </div>
            </div>
            <div className="bento-grid max-h-fit -mt-60 md:mt-1 ">
              {/* <HomeBentoGrid/> */}
              <BentGrid />
            </div>

            {/* Best selling section */}
            <div className="BestSelling w-[100%] p-2">
              <span className="best-selling-text flex justify-between ">
                <h1 className="text-sm md:text-1xl lg:text-2xl">
                  Best Selling Gifts
                </h1>

                <Button className="explore-button p-2 text-sm md:text-2xl lg:text-3xl">
                  Explore more
                </Button>
              </span>

              <div className="Bestselling flex flex-col gap-4 md:flex-row mt-5  md:mb-10 justify-center">
                <div className="gift-item  rounded-lg ">
                  <img src="src/assets/items(4).png" alt="for her" />
                </div>
                <div className="gift-item relative   rounded-lg">
                  <img src="/src/assets/items(5).png" alt="for him" />
                  <span className="best-seller-buttons flex flex-row justify-end items-end absolute w-full h-40 bottom-12  left-6 gap-4">
                    <Button className="add-to-cart-button">
                      Add to cart
                      <GoArrowRight />
                    </Button>
                    <span className="quantity-dropdown">
                      <QuantityDropdown />
                    </span>
                  </span>
                </div>
                <div className="gift-item inline-block   rounded-lg">
                  <img src="/src/assets/items(6).png" alt="roses" />
                </div>
              </div>
            </div>

            {/* TOP GIFT SECTION */}
            <div className="TopGifts">
              <span className="best-selling-text w-full flex justify-between mt-10">
                <h1 className="text-xl">Top Gifts Packages</h1>

                <Button className="explore-button">Explore more</Button>
              </span>

              <div className="Topgifts-circle">
                <div>
                  <div className="circle-image">
                    <img src="src/assets/items(2).png" alt="Your Image" />
                  </div>
                  <span className="circle-text">For Him Gift Package</span>
                </div>

                <div>
                  <div className="circle-image">
                    <img src="src/assets/items(1).png" alt="Your Image" />
                  </div>
                  <span className="circle-text">For Her Gift Package</span>
                </div>

                <div>
                  <div className="circle-image">
                    <img src="src/assets/items.png" alt="Your Image" />
                  </div>
                  <span className="circle-text">Festival Period Gifts</span>
                </div>

                <div>
                  <div className="circle-image">
                    <img src="src/assets/items(3).png" alt="Your Image" />
                  </div>
                  <span className="circle-text">Work Gifts</span>
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div className="friendship-offer flex flex-col md:flex-row justify-between gap-4 md:mb-14 md:mt-10 bg-white w-full  h-[50vh]">
            <div className="friendship-offer-text md:w-[50%]">
              <h1 className="">friendship day offer</h1>
              <p>A big opportunity to extend love to you friends</p>
              <Button className="shop-now-button p-4">shop Now</Button>
            </div>

            <div className="friendship-img">
              <img
                src="/src/assets/frame7.png"
                alt="friendship"
                className=" w-[100%] md:h-[50vh]"
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
