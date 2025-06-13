import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from '../store/useCart';
import cart from "../assets/icons/mdi_cart.png";
import checkout from "../assets/icons/mdi_account-payment.png";
import { MdClose, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { toast } from "sonner";
import { HiMinusSm } from "react-icons/hi";
import { IoSend } from "react-icons/io5";
// import { FaHome, FaSearch, FaUser, FaShoppingBag, FaHeart } from "react-icons/fa";
import MobileBottomNav from "@/components/MobileNavTab";
import { config } from "../config";

export default function Cart() {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart, } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const vat = 10.5;
  const flatDelivery = 3000
  const vatCalc = (vat / 100) * subtotal;
  const total = vatCalc + subtotal + flatDelivery;

  const handleCreateInvoice = async () => {
    setIsLoading(true);

    const invoicePayload = {
      items: cartItems.map(({ _id, quantity }) => ({
        giftId: _id,  // make sure it's a string
        quantity,
      })),
      vat: vat, // this is already declared in your component
      deliveryFees: flatDelivery
    };

    const firstname = localStorage.getItem("firstName");
    const lastname = localStorage.getItem("lastName");
    const customer = firstname + " " + lastname;
    // toast.log(firstname + " " + lastname)
    // toast.log(customer)

    const token = localStorage.getItem("authToken");
    // toast.log(token)

    if (!token) {
      toast.error("No token found. Please login.");
      return;
    }

    try {
      const response = await axios.post(
        `${config.BACKEND_URL}/api/user/create-invoice`,
        invoicePayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      toast.loading("Invoice created:", response.data);
      const invoiceNumber = response.data.data._id;
      // toast.log(invoiceNumber);
      if (!invoiceNumber) {
        toast.error("Invoice ID not returned from backend.");
        return;
      }
      // navigate(`/invoice`, { state: { invoiceData: response.data,  cartItems: cartItems } });
      navigate(`/invoice/${invoiceNumber}`, { state: { invoiceData: response.data.data, cartItems: cartItems, customer } });
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error("Error creating invoice", error.response.data);
      } else {
        toast.error("Error creating invoice");
        console.error("Error creating invoice:", error);
      }
    } finally {
      setIsLoading(false);
      toast.dismiss();
    };
  }


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
              {cartItems.length === 0 ? (
                <p className="text-center text-lg font-semibold mt-10">Your cart is empty.</p>
              ) : (

                cartItems.map(item => (
                  <div key={item._id} className="flex flex-col sm:flex-row gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-24 h-24 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      {/* <h3 className="font-medium">{item.category}</h3> */}
                      <p className="text-gray-600">{item.name}</p>

                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => decrementQuantity(item._id)}
                          className="p-1 bg-white rounded-full"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <HiMinusSm className="text-gray-600" />
                        </button>
                        <span>Qty: {item.quantity}</span>
                        <button
                          onClick={() => incrementQuantity(item._id)}
                          className="p-1 bg-white rounded-full"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <span>+</span>
                        </button>
                      </div>
                    </div>

                    <div className="font-medium text-lg">
                      ₦{item.price * item.quantity}
                    </div>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-white bg-red-600 rounded-full p-1 hover:bg-red-700"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <MdClose size={20} />
                    </button>
                  </div>
                ))

              )}
            </div>

            {/* Order Summary */}
            <div className="lg:w-[40%] bg-[#E8E5E5] rounded-2xl p-5 h-fit">
              <h2 className="font-medium text-xl md:text-2xl mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <b>Sub total</b>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>CP</span>
                  <span>{vat.toLocaleString()}%</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>N{flatDelivery.toLocaleString()}</span>
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

                <button className="w-full bg-[#072AC8] text-white py-3 rounded-2xl mt-6 hover:bg-blue-700 transition"
                  onClick={handleCreateInvoice}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Proceeding to Checkout
                    </div>
                  ) : (
                    "Proceed to Checkout"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <MobileBottomNav
        activeTab="Cart"
        cartItemCount={cartItems.length}
        className="custom-nav-class" // optional
        iconSize={18} // optional
      />
    </div>
  );
}
