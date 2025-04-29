import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import Carousel from "@/components/ui/carousel";
// import HomeBentoGrid from "@/components/HomeBentoGrid";
import { Button } from "@/components/ui/button";
import CustomerRatings from "@/components/CustomerRatings";
import Footer from "@/components/Footer";
import BentGrid from "@/components/BentotestGrid";
import Services from "@/components/Services";
import BestSellingSection from "@/components/best-selling";
import TopGiftsSection from "@/components/top-gifts"
import FriendshipOfferSection from "@/components/friendship-offer";

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
            <BestSellingSection />

            {/* TOP GIFT SECTION */}
            <TopGiftsSection />
          </div>

          {/* Friendship Offer Section */}
          <FriendshipOfferSection />

          <Services />

          <CustomerRatings />

          <Footer />
        </div>
      </div>
    </>
  );
}
