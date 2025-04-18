import { SetStateAction, useState } from "react";
import MobileBottomNav from "@/components/MobileNavTab";
import SearchBarHome from "@/components/ui/search-bar-dashboard";
import avatar from "../assets/avatar-holder-img.svg";
import cake from "../assets/cake.svg";
import rio from "../assets/perfume.svg";
import flowers from "../assets/flower.svg";
import perfume from "../assets/fav-perfumes.svg";
import roses from "../assets/roses.svg";
import forHer from "../assets/forher.svg";
import lipGloss from "../assets/lipgloss.svg";
import moet from "../assets/moet.svg";
import wine from "../assets/wine.svg";
import plant from "../assets/plant.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GoBell } from "react-icons/go";
import { IoMdCart } from "react-icons/io";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const itemsPerPage = 6;

const giftItems = [
  {
    label: "For her",
    img: forHer,
  },
  {
    label: "Flower",
    img: flowers,
  },
  {
    label: "Cake",
    img: cake,
  },
  {
    label: "Perfume",
    img: rio,
  },
  {
    label: "Perfumes",
    img: perfume,
  },
  {
    label: "Roses",
    img: roses,
  },
  {
    label: "Lip Gloss",
    img: lipGloss,
  },
  {
    label: "Moet",
    img: moet,
  },
  {
    label: "For her",
    img: forHer,
  },
  {
    label: "Wine",
    img: wine,
  },
  {
    label: "Perfumes",
    img: perfume,
  },
  {
    label: "Plant",
    img: plant,
  },
];
export default function Gifts() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(giftItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = giftItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="w-[100%] h-[100%] pt-[15px] pl-[15px] pr-[10px] bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF]">
        <div className="w-[100%] flex justify-end gap-[2.5rem] pr-[5px] lg:pr-[0] lg:items-center lg:gap-[15rem] ">
          <div>
            <SearchBarHome />
          </div>
          <div className="flex gap-1 lg:gap-2">
            <button className="hidden lg:block bg-[#fff] border rounded-[50%] py-[8px] px-[8px]">
              <IoMdCart />
            </button>
            <button className="bg-[#fff] border rounded-[50%] py-[8px] px-[8px]">
              <GoBell />
            </button>
            <div className="hidden lg:flex">
              <Avatar>
                <AvatarImage src={avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        {/* Gifts Section */}
        <div className="mt-[25px] grid grid-cols-2 gap-y-5 place-items-center border-black lg:grid-cols-6">
          {currentItems.map((item, index) => (
            <button key={index} className="relative w-[150px] h-[160px]">
              <Card className="w-[150px] h-[40px] absolute top-[110px] rounded-t-none z-0">
                <CardHeader>
                  <CardTitle className="text-center absolute top-[15px] left-[50px]">
                    {item.label}
                  </CardTitle>
                </CardHeader>
              </Card>
              <img
                src={item.img}
                alt={item.label}
                className="w-[150px] h-[115px] object-cover absolute top-0 left-0 z-10 rounded-t-md "
              />
            </button>
          ))}
        </div>
        <div className="mb-[80px] justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-3 py-1 rounded-md ${currentPage === i + 1 ? 'bg-[#072AC8] text-[#fff] font-semibold' : "hover:bg-gray-200"}`}
                  >
                    {i + 1}
                  </PaginationLink> 
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    handlePageChange(Math.min(currentPage + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <MobileBottomNav activeTab="gifts" />
      </div>
    </>
  );
}
