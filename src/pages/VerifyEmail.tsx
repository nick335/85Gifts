import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";
import Frame285 from "../assets/Frame285.png";

export default function VerifyEmail() {
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  // Handle verification submission
  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(verificationCode);

    if (!verificationCode.trim()) {
      setError("Please enter the verification code");
      return;
    }

    console.log(localStorage.getItem("authToken"));

    // Retrieve the Bearer token from localStorage
    const authToken = localStorage.getItem("authToken");
    console.log("AuthToken retrieved from localStorage:", authToken);

    if (!authToken) {
      setError("Authentication token not found. Please log in again.");
      return;
    }

    try {
      // Send the verification code to the backend for validation
      const response = await axios.post(
        "https://eight5gifts-be.onrender.com/api/user/verify",
        { email, verificationCode },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`, // Attach Bearer token here
          },
        }
      );

      if (response.status === 200) {
        alert("Email verified successfully!");
        navigate("/HomePage");
      }
    } catch (err: unknown) {
      console.log("Verification error:", err);

      if (axios.isAxiosError(err) && err.response) {
        console.log("Backend response error:", err.response.data);
        // Handle backend error responses
        switch (err.response.status) {
          case 400:
            setError("Invalid verification code. Please try again.");
            break;
          case 401:
            setError("Expired verification code. Request a new one.");
            break;
          case 500:
            setError("Server error. Please try again later.");
            break;
          default:
            setError("Something went wrong. Please try again.");
        }
      } else {
        // Handle network errors
        setError("Network error. Please check your internet connection.");
      }
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row lg:flex-row">
        {/* Verify-left */}
        <div className="w-full h-full sm:w-1/2 p-4">
          <div>
            <img src={logo} alt="Logo" height={45} width={75} />
          </div>
          {/* Verify email block */}
          <div className="mt-[10%]">
            <h2 className="text-2xl font-semibold mb-2">Verify Your Email</h2>
            <p className="text-gray-600">
              A verification code has been sent to <b>{email}</b>. Please enter
              it below
            </p>
            <form
              onSubmit={handleVerify}
              className="flex flex-col place-items-center"
            >
              <input
                className="sm:items-start mt-5 ml-6 w-full sm:w-1/2 p-3 border rounded-xl mb-4 outline-none"
                type="text"
                placeholder="Enter 6-digits code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              {error && <p className="text-red-600">{error}</p>}
              <button className="mt-4 bg-[#000] text-white px-4 py-2 rounded-lg">
                Verify Now
              </button>
            </form>
          </div>
        </div>

        {/* Verify: right-screen. Hidden on smaller screens  */}
        <div
          className="w-full sm:w-1/2 bg-cover bg-center sm:hidden lg:block"
          style={{ backgroundImage: `url(${Frame285})` }}
        >
          <img
            src={Frame285}
            alt="shopping display"
            className="object-cover w-full h-full lg:h-auto lg:max-h-[100vh] hidden lg:block"
          />
        </div>
      </div>
    </>
  );
}
