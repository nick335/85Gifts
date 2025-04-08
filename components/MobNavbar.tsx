import { AiFillHome, AiOutlineUnorderedList } from "react-icons/ai";
import { BiSolidCategory } from "react-icons/bi";
import { FaGifts } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar from "../src/assets/avatar-holder-img.svg";

const items = [
  {
    label: "Home",
    path: "./",
    icon: AiFillHome,
  },
  {
    label: "Categories",
    path: "./",
    icon: BiSolidCategory,
  },
  {
    label: "Gifts",
    path: "./Gifts",
    icon: FaGifts,
  },
  {
    label: "Order",
    path: "./OrderHistory",
    icon: AiOutlineUnorderedList,
  },
];
export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#072AC8] shadow-md py-1.5 flex justify-around items-center border-t lg:hidden">
      {items.map((item) => (
        <button>
          <Link to={item.path} className="active:bg-[#072AC8]">
            <item.icon className="self-center size-5 fill-white" />
            <span className="text-sm text-[#fff]">{item.label}</span>
          </Link>
        </button>
      ))}
      <button>
      <Avatar className="bottom-1">
        <AvatarImage src={avatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      </button>
    </nav>
  );
}
