import {
  Mic,
  Search,
  ShoppingCart,
  Bell,
  Ellipsis,
  Plus,
  PhoneMissed,
} from "lucide-react";
// import Lady from "../assets/Chat/Lady.png";


export default function Messages() {
  return (
    <>
      <section className="w-[100%] h-[100%] pt-[15px] pl-[15px] pr-[10px] bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF] ">
        <header className="flex items-center justify-center mt-8">
          <div className="flex items-center bg-white border rounded-xl px-4 justify-between w-full max-w-[350px] h-[40px]">
            <div className="flex gap-2">
              <img src="/src/assets/icons/search-gray.png" alt="Search" />
              <input
                type="search"
                id="default-search"
                className="block text-sm text-Grey/900 border-none outline-none dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 "
                placeholder="Search"
                required
              />
            </div>

            <div className=" pointer-events-none">
              <img src="/src/assets/icons/microphone.png" alt="Search" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <div className="border rounded-full bg-white w-[55px] h-[53px] flex justify-center items-center">
                <ShoppingCart />
              </div>
              <div className="border rounded-full bg-white w-[55px] h-[53px] flex justify-center items-center">
                <Bell />
              </div>
              {/* <img src={Lady} alt="Icon"/> */}
            </div>
          </div>
        </header>
        <main className="bg-white mx-5 mt-3 rounded-t-xl">
          <section>
            <div>
              
            </div>
          </section>
          <section>

          </section>
          <Mic />
          <Search />
          <Bell />
          <Ellipsis />
          <Plus />
          <PhoneMissed />
        </main>
      </section>
    </>
  );
}
