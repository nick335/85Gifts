import MobileBottomNav from "@/components/MobileNavTab";
import SearchBarHome from "@/components/ui/search-bar-dashboard";
import { GoBell } from "react-icons/go";

export default function Gifts() {
  return (
    <>
      <div className="w-[100%] pt-[15px] pl-[20px] flex justify-end gap- ">
        <div>
        <SearchBarHome />
        </div>
        <button className="bg-[#072AC8] border rounded-[50%] py-[8px] px-[8px] mr-[20px]">
          <GoBell size={24} className="fill-[#fff]"/>
        </button>
      </div>
      <MobileBottomNav activeTab="gifts" cartItemCount="" />
    </>
  );
}
