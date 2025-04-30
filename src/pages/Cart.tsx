import { useState } from "react";
import { MdClose, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import cartIcon from "../assets/icons/mdi_cart.png";
import checkoutIcon from "../assets/icons/mdi_account-payment.png";
import orderImage from "../assets/order-1.jpg";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: "67e326cb57ed09e1afb58c32e",
      name: "Flowers",
      description: "Lilium Flowers",
      price: 13000,
      quantity: 2,
      image: orderImage,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const incrementQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleProceedToCheckout = async () => {
    setLoading(true);
    try {
      const payload = {
        items: cartItems.map(({ id, quantity }) => ({
          giftId: id,
          quantity,
        })),
      };

      const token = "your-bearer-token-here"; // Example: retrieve from auth context or localStorage

      const response = await fetch("https://eight5gifts-be.onrender.com/api/user/create-invoice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to generate invoice");
      }

      const invoiceData = await response.json();

      navigate("/invoice", { state: { invoice: invoiceData } });
    } catch (error) {
      console.error(error);
      alert("Error generating invoice. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const subTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = 500;
  const total = subTotal + vat;

  return (
    <div className="flex flex-col mx-auto w-screen bg-gradient-to-br from-[#B5BCFF] via-[#E2E5FF] to-[#FFFFFF] absolute p-5">
      <div className="bg-white rounded-2xl p-5">
        <div className="bg-[#E8E5E5] rounded-2xl p-3 flex justify-center items-center mb-5">
          <div className="flex gap-10">
            <div className="flex justify-center items-center gap-2">
              <img src={cartIcon} alt="cart" className="bg-white p-3 rounded-full" />
              <h2 className="text-[18px] font-[600]">Cart</h2>
            </div>
            <div className="flex items-center">
              <MdKeyboardDoubleArrowRight className="text-3xl" />
            </div>
            <div className="flex justify-center items-center gap-2">
              <img src={checkoutIcon} alt="checkout" className="bg-white p-3 rounded-full" />
              <h2 className="text-[18px] font-[600]">Checkout</h2>
            </div>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col w-[60%]">
            <div className="font-medium text-xl flex justify-between w-[50%] ml-8 mb-1">
              <h2>Product</h2>
              <h2>Total</h2>
            </div>
            <hr className="w-[53%] ml-5 rounded-sm mb-2" />
            {cartItems.length === 0 ? (
              <p className="text-center text-lg font-semibold mt-10">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="bg-green-500 flex items-center justify-between p-2 mb-3 rounded">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[110px] h-[70px]"
                    />
                    <div className="flex flex-col">
                      <h6>{item.name}</h6>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="bg-white rounded px-2"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                      <span>Qty: {item.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="bg-white rounded px-2"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                    <div className="text-lg font-semibold">₦{item.price * item.quantity}</div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-white bg-red-600 rounded-full p-1 hover:bg-red-700"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <MdClose size={20} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="w-[35%] bg-[#E8E5E5] rounded-2xl p-5">
            <h2 className="font-medium text-2xl mb-5">Order Summary</h2>
            <div className="flex justify-between mb-4">
              <h2 className="text-xl">Sub total</h2>
              <h2>₦{subTotal}</h2>
            </div>
            <div className="flex justify-between mb-4">
              <h2 className="text-xl">V.A.T</h2>
              <h2>₦{vat}</h2>
            </div>
            <div className="flex justify-between mb-4">
              <h2 className="text-xl">Total</h2>
              <h2>₦{total}</h2>
            </div>
            <button
              onClick={handleProceedToCheckout}
              disabled={loading || cartItems.length === 0}
              className="bg-[#072AC8] text-white p-3 rounded-2xl w-full mt-5 text-lg disabled:opacity-50"
            >
              {loading ? "Processing..." : "Proceed to Checkout"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}