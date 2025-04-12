import cart from "../assets/icons/mdi_cart.png";
import checkout from "../assets/icons/mdi_account-payment.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import order from "../assets/order-1.jpg";
import { HiMinusSm } from "react-icons/hi";
import { IoSend } from "react-icons/io5";
// import { FaHome, FaSearch, FaUser, FaShoppingBag, FaHeart } from "react-icons/fa";
import MobileBottomNav from "@/components/MobileNavTab";

export default function Cart() {
  // This should come from your backend/state management eventually
  const cartItems = [
    {
      id: 1,
      name: "Lilium Flowers",
      category: "Flowers",
      price: 13000,
      quantity: 1,
      image: order
    },
    {
      id: 2,
      name: "Lilium Flowers",
      category: "Flowers",
      price: 13000,
      quantity: 1,
      image: order
    }
  ];

  const subtotal = 13000;
  const vat = 500;
  const total = subtotal + vat;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF] p-4 md:p-8 pb-24 md:pb-8">
      {/* Main Container */}
      <div className="bg-white rounded-2xl shadow-lg max-w-6xl mx-auto overflow-hidden">

        {/* Progress Steps */}
        <div className="bg-[#E8E5E5] p-4">
          <div className="flex justify-center items-center gap-2 md:gap-10">
            <div className="flex items-center">
              <img src={cart} alt="cart" className="bg-white p-2 md:p-3 rounded-full h-12 w-12" />
              <h2 className="text-sm md:text-lg font-semibold ml-2">Cart</h2>
            </div>

            <MdKeyboardDoubleArrowRight className="text-2xl md:text-3xl" />

            <div className="flex items-center">
              <img src={checkout} alt="checkout" className="bg-white p-2 md:p-3 rounded-full h-12 w-12" />
              <h2 className="text-sm md:text-lg font-semibold ml-2">Checkout</h2>
            </div>
          </div>
        </div>

        {/* Cart Content */}
        <div className="p-4 md:p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Products List */}
            <div className="lg:w-[60%]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-medium text-lg md:text-xl">Product</h2>
                <h2 className="font-medium text-lg md:text-xl">Total</h2>
              </div>
              <hr className="border-t border-gray-300 mb-6" />

              {cartItems.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="font-medium">{item.category}</h3>
                    <p className="text-gray-600">{item.name}</p>

                    <div className="flex items-center mt-2">
                      <button className="p-1 bg-white rounded-full">
                        <HiMinusSm className="text-gray-600" />
                      </button>
                      <span className="mx-3">1</span>
                      <button className="p-1 bg-white rounded-full">
                        <span>+</span>
                      </button>
                    </div>
                  </div>

                  <div className="font-medium text-lg">
                    ₦{item.price.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:w-[40%] bg-[#E8E5E5] rounded-2xl p-5 h-fit">
              <h2 className="font-medium text-xl md:text-2xl mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Sub total</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>V.A.T</span>
                  <span>₦{vat.toLocaleString()}</span>
                </div>

                <hr className="border-t border-white my-2" />

                <div className="flex justify-between items-center">
                  <span>Add Coupon</span>
                  <HiMinusSm className="bg-white p-1 rounded-full text-xl" />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-2 pr-10 bg-white rounded-lg outline-none"
                    placeholder="Type Code"
                  />
                  <IoSend className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                </div>

                <hr className="border-t border-white my-4" />

                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>

                <button className="w-full bg-[#072AC8] text-white py-3 rounded-2xl mt-6 hover:bg-blue-700 transition">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <MobileBottomNav
        activeTab="cart"
        cartItemCount={cartItems.length}
        className="custom-nav-class" // optional
        iconSize={18} // optional
      />
    </div>
  );
}