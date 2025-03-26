import SearchBarHome from "@/components/ui/search-bar-dashboard";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import promo from "../assets/promo.svg";
import perfumes from "../assets/fav-perfumes.svg";
import avatar from "../assets/avatar-holder-img.svg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Categories from "@/components/Categories";
import Bestselling from "@/components/Bestselling";

export default function HomePage() {
  return (
    <>
      <div className="w-[100%] h-[100%] pt-[15px] pl-[15px] pr-[10px] bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF] ">
        {/* Header */}
        <div className=" w-[100%] flex justify-end items-center gap-[15rem]">
          <div>
            <SearchBarHome />
          </div>
          <div className="flex gap-3">
            <button className="bg-[#fff] border rounded-[50%] py-[8px] px-[8px]">
              <IoMdCart />
            </button>
            <button className="bg-[#fff] border rounded-[50%] py-[8px] px-[8px]">
              <GoBell />
            </button>
            <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          </div>
        </div>
        {/* Main */}
        <div className="flex justify-between">
          {/* Home-left-div */}
          <div className="w-[65%]">
            <div className="ml-[35px] mt-[35px] relative flex justify-start gap-5">
              <p className="flex text-lg font-semibold">
                Lagos
                <span>
                  <GoChevronDown size={24} className="mt-[3px]" />
                </span>
              </p>
              <p className=" flex text-lg font-semibold">
                Nigeria
                <span>
                  <GoChevronDown size={24} className="mt-[3px]" />
                </span>
              </p>
            </div>
            <div className="mt-[20px]">
              <p className="text-lg font-semibold text-start">
                Find the best gift for your loved ones
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="relative mt-[10px]">
                <Card className="w-[210px] h-[60px]">
                  <CardHeader className="pl-[12px]">
                    <CardTitle className="absolute top-[12px] text-start">
                      Event
                    </CardTitle>
                    <CardDescription className="text-start">
                      Birthday, Anniversary, etc
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div className="relative mt-[10px]">
                <Card className="w-[210px] h-[60px]">
                  <CardHeader className="pl-[12px]">
                    <CardTitle className="absolute top-[12px] text-start">
                      Gift Type
                    </CardTitle>
                    <CardDescription className="text-start">
                      Cakes, Perfumes, etc
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <Link to="./Gifts">
                <Button className=" bg-[#072AC8] py-[27px] px-[40px] mt-[5px] hover:bg-[#072AC8] text-md font-semibold">
                  Find gifts
                </Button>
              </Link>
            </div>
            {/* Categories section */}
            <Categories />
            <Bestselling />
          </div>
          {/* Home-right-div */}
          <div className="w-[34%]">
            <div className="mt-[20px]">
              <img src={promo} alt="" />
            </div>
            <div className="mt-[30px] bg-[#fff] h-[450px] rounded-lg shadow-[1px_1px_0_#041C8540]">
              <Button className="bg-[#E8E5E5] text-[#000] font-semibold hover:bg-[#E8E5E5] px-[80px] mt-[15px]">
                Favourite
              </Button>
              <div className="mt-[30px] ml-[15px] flex gap-5">
                <img
                  src={perfumes}
                  alt="favourite perfume brands"
                  className="w-25 h-25"
                />
                <div className="flex flex-col gap-2 mt-5">
                  <p className="font-semibold">Hamper pack</p>
                  <p>(for him)</p>
                  <p>&#8358;25,000</p>
                </div>
              </div>
              <div className="mt-[30px] ml-[15px] flex gap-5">
                <img
                  src={perfumes}
                  alt="favourite perfume brands"
                  className="w-25 h-25"
                />
                <div className="flex flex-col gap-2 mt-5">
                  <p className="font-semibold">Wines</p>
                  <p>
                    Jacob's <br /> creek
                  </p>
                  <p>&#8358;13,000</p>
                </div>
              </div>
              <Button className="bg-[#072AC8] mt-10 hover:bg-[#B5BCFF] hover:text-[#000] hover:font-semibold px-[110px] ">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="mb-3">
          <p>
            Need help? Check our{" "}
            <Link to="" className="text-[#072AC8] underline">
              help and support
            </Link>{" "}
            or{" "}
            <Link to="" className="text-[#072AC8] underline">
              contact us
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
