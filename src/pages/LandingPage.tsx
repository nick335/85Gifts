import React from "react";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/ui/carousel";
// import HomeBentoGrid from "@/components/HomeBentoGrid";
import { Button } from "@/components/ui/button";
import CustomerRatings from "@/components/CustomerRatings";
import Footer from "@/components/Footer";
import { GoArrowRight } from "react-icons/go";
import { QuantityDropdown } from "@/components/quantity-dropdown";
import BentGrid from "@/components/BentotestGrid";

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
            <div className="hero-section grid grid-cols-5 max-w-fit md:mt-48 ">
              <div className="hero-text col-span-full md:col-span-2">
                <h1 className="hero-section-h1">
                  Express your love in a <span> PACKAGE</span>{" "}
                </h1>
                <p>
                  At 85gifts we create and provide crafted, personalized gifts
                  to help celebrate your most treasured memories making it easy
                  to find the perfect gift for everyone around you.
                </p>
              </div>
              <div className="carousel">
                <Carousel />
              </div>
            </div>
            <div className="bento-grid grid-flow-col">
              {/* <HomeBentoGrid/> */}
              <BentGrid />
            </div>

            <div className=" BestSelling border-2 bg-orange-400">
              <span className="best-selling-text w-full flex justify-between ">
                <h1 className="">Best Selling Gifts</h1>

                <Button className="explore-button">
                  <p>Explore more</p>
                </Button>
              </span>

              <div className="Bestselling flex gap-4 mb-10 h-[100vh]">
                <div className="gift-item">
                  <img src="src/assets/items(4).png" alt="for her" />
                </div>
                <div className="gift-item">
                  <img src="/src/assets/items(5).png" alt="for him" />
                  <span className="best-seller-buttons">
                    <Button className="add-to-cart-button">
                      Add to cart
                      <GoArrowRight />
                    </Button>
                    <span className="quantity-dropdown">
                      <QuantityDropdown />
                    </span>
                  </span>
                </div>
                <div className="gift-item">
                  <img src="/src/assets/items(6).png" alt="roses" />
                </div>
              </div>
            </div>
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

          <div className="friendship-offer">
            <div className="friendship-offer-text">
              <h1 className="">friendship day offer</h1>
              <p>A big opportunity to extend lov eto you friends</p>
              <Button className="shop-now-button">
                <p>shop Now</p>
              </Button>

              <div></div>
            </div>

            <div className="friendship-img">
              <img src="/src/assets/frame7.png" alt="friendship" />
            </div>
          </div>

          <div className="services">
            <div className="service">
              <div className="service-icon">
                <img src="src/assets/icons/delivery.svg" alt="free delivery" />
              </div>
              <h4>Free Delivery</h4>
              <p>for all order above 50k</p>
            </div>

            <div className="service">
              <div className="service-icon">
                <img src="src/assets/icons/security.png" alt="free delivery" />
              </div>
              <h4>Secure Payment</h4>
              <p>Seamless payment on any device</p>
            </div>

            <div className="service">
              <div className="service-icon">
                <img src="/src/assets/icons/return.png" alt="free delivery" />
              </div>
              <h4>7 days Return Policy</h4>
              <p>7 days return policy on all orders</p>
            </div>

            <div className="service">
              <div className="service-icon">
                <img
                  src="/src/assets/icons/customer-care.png"
                  alt="free delivery"
                />
              </div>
              <h4>24/7 Customer Care</h4>
              <p>Available customer care agents</p>
            </div>
          </div>

          <CustomerRatings />

          <Footer />
        </div>
      </div>
    </>
  );
}
