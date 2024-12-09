import cart from "../assets/icons/mdi_cart.png";
import checkout from "../assets/icons/mdi_account-payment.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Cart() {
  return (
    <>
      <div className="flex flex-col mx-auto h-[100%] w-[96.3%] bg-gradient-to-r from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF] absolute">
        <div className=" bg-white m-5 h-full rounded-2xl">
          <div className="bg-[#E8E5E5] rounded-2xl p-1 m-3 flex justify-center items-center ">
            <div className="flex gap-10">
              <div className="flex justify-center">
                <img
                  src={cart}
                  alt="cart"
                  className="bg-white p-3 rounded-full"
                />
                <h2 className="text-[18px] font-[600] text-center p-3"> Cart </h2>
              </div>
              <div>
                <h2 className="font-semibold text-[30px] p-3"> <MdKeyboardDoubleArrowRight /> </h2>
              </div>
              <div className="flex justify-center">
                <img
                  src={checkout}
                  alt="checkout"
                  className="bg-white p-3 rounded-full"
                />
                <h2 className="text-[18px] font-[600] text-center p-3"> Checkout </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Need help? Check our <a href="#" className="text-[#072AC8] underline"> help and support </a> or <a href="#" className="text-[#072AC8] underline"> contact us </a> </h2>
        </div>
      </div>
    </>
  );
}
