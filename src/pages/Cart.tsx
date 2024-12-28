import cart from "../assets/icons/mdi_cart.png";
import checkout from "../assets/icons/mdi_account-payment.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import order from "../assets/order-1.jpg";
// import { IoIosAdd } from "react-icons/io";
import { HiMinusSm } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

export default function Cart() {
  return (
    <>
      <div className="flex flex-col mx-auto w-screen bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF] absolute">
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
          <div className="m-5">
          <div className="flex gap-10 mt-10 ml-3">
            <div className="flex flex-col w-[60%]" > {/* your product and total container */}
              <div className="font-medium text-xl flex justify-between w-[50%] ml-8 mb-1">
                <h2>Product</h2>
                <h2>Total</h2>
              </div>
              <hr className="w-[53%] ml-5 rounded-sm mb-2" />
              <div className="bg-green-500 flex-col">
                <div className="mt-3 ml-4 ">
                  <img src={order} alt="flowers" className="w-[110px] h-[70px]"/>
                </div>
                <div className="flex flex-col">
                  <h6>Flowers</h6>
                  <p>Lilium Flowers </p>
                </div>
              </div>
              
            </div>{/* your product and total container ending */}
            <div className="justify-end bg-[#E8E5E5]  w-[35%] mr-3 rounded-2xl p-5"> 
                <h2 className="font-medium text-2xl justify-start text-left">Order Summary</h2>
                <div className="m-5">
                <hr className=" h-1 mt-5 text-center content-center flex item bg-white text-2xl rounded-md w-[100%]"/>
                  <div className="flex justify-between mt-4">
                  <h2 className="text-xl">Sub total</h2>
                  <h2>₦13,000</h2>
                  </div>
                  <hr className=" h-1 mt-4 text-center content-center flex item bg-white text-2xl rounded-md w-[100%]"/>
                  <div className="flex justify-between mt-4">
                  <h2 className="text-xl">V.A.T</h2>
                  <h2>₦500</h2>
                  </div>
                  <hr className=" h-1 mt-4 text-center content-center flex item bg-white text-2xl rounded-md w-[100%]"/>
                  <div className="flex justify-between mt-4">
                  <h2 className="text-xl">Add Coupon </h2>
                  <h2><HiMinusSm className="text-[#E8E5E5] p-1 rounded-full bg-white text-2xl font-bold"/></h2>
                  </div>
                  <div className="relative w-full mt-5">
  <input 
    type="text" 
    className="outline-white bg-[#E8E5E5] p-2 text-black border-white w-full rounded-lg pr-10" 
    placeholder="Type Code"
  />
  
  <IoSend 
    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-2xl cursor-pointer" 
  />
</div>
                <hr className=" h-0.5 mt-24 text-center content-center flex item bg-white text-2xl rounded-md w-[100%]"/>
                <div className="flex justify-between mt-4">
                  <h2 className="text-xl">Total</h2>
                  <h2>₦13,000</h2>
                  </div>
                  <button className="bg-[#072AC8] text-white p-3 rounded-2xl w-full mt-5 text-lg"> Proceed to Checkout</button>
              </div>
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
