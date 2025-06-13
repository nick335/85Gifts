import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import background from "../assets/icons/loginbg.png";
import eyeOpen from "../assets/icons/eye.svg";
import eyeClosed from "../assets/icons/Eye.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { toast } from "sonner"
import { config } from "../config";

export default function CustomerResetPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"email" | "otp" | "password">("email");
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // 1️⃣ **Send OTP to Email & Store Auth Token**
  const handleEmailSubmit = async () => {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        `${config.BACKEND_URL}/api/user/forgot-password`,
        { email }
      );

      if (data?.data?.authToken) {
        localStorage.setItem("authToken", data.data.authToken); // Store auth token
        // console.log("AuthToken set in localStorage:", localStorage.getItem("authToken"));
      } else {
        toast.error("Auth token not received.");
      }

      toast.success("OTP sent to your email.");
      setStep("otp");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // console.error("OTP Request Error:", error);
        toast.error(`${error.response?.data?.error || "An error occurred."}`);
      } else {
        // console.error("OTP Request Error:", error);
        toast.error("An unexpected error occurred.")
      }
    } finally {
      setLoading(false);
    }
  };


  // 2️⃣ **Verify OTP **
  const handleOtpVerification = async () => {
    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }


    const authToken = localStorage.getItem("authToken"); // ✅ Retrieve the token
    if (!authToken) {
      toast.error("Session expired. Please restart the process.");
      setStep("email");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        `${config.BACKEND_URL}/api/user/verify`,
        { token: otp },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`, // Attach Bearer token here
          },
        }
      );
      console.log(data)

      toast.success("OTP Verified Successfully!");
      setStep("password");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("OTP Verification Error:", error);
        toast.error(`${error.response?.data?.error || "An error occurred."}`);
      } else {
        // console.error("Unexpected Error:", error);
        toast.error("An unexpected error occurred.")
      }
    } finally {
      setLoading(false);
    }
  };


  // 3️⃣ **Submit New Password**
  const handleResetPassword = async () => {
    if (!password) {
      toast.error("Please enter your new password.");
      return;
    }

    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      toast.error("Session expired. Please restart the process.");
      setStep("email");
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        `${config.BACKEND_URL}/api/user/update-password`,
        { password: password },
        {
          headers: { Authorization: `Bearer ${authToken}` }, // Attach auth token
        }
      );

      toast.success("Password reset successful. Please login.");
      localStorage.removeItem("authToken"); // Clear token after reset
      navigate("/login");
    } catch (error) {
      console.error("Password Reset Error:", error);
      toast.error("Failed to reset password. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white px-6 sm:px-8 py-20 relative">
        <Link to="/" className="absolute top-6 left-6 md:top-10 md:left-10">
          <img src={logo} alt="Logo" className="w-[71px] h-[43px]" />
        </Link>

        <div className="max-w-sm w-full md:mt-0 mt-32">
          {/* Step 1: Email Input */}
          {step === "email" && (
            <>
              <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
                Forgotten your password? <span>Enter your Email</span>
              </h2>
              <input
                type="email"
                placeholder="johndoe.pal@gmail.com"
                className="w-full p-3 border rounded mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleEmailSubmit}
                className="w-full bg-black text-white p-3 rounded mb-3 transition duration-300 hover:bg-gray-800"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Next"}
              </button>
            </>
          )}

          {/* Step 2: OTP Verification */}
          {step === "otp" && (
            <>
              <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
                Enter the OTP sent to your email
              </h2>
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full p-3 border rounded mb-4"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                onClick={handleOtpVerification}
                className="w-full bg-black text-white p-3 rounded mb-3 transition duration-300 hover:bg-gray-800"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
              <button onClick={() => setStep("email")} className="text-[#072AC8] text-sm mt-4">
                Go Back
              </button>
            </>
          )}

          {/* Step 3: Reset Password */}
          {step === "password" && (
            <>
              <label className="block text-gray-600 mb-2">Enter New Password</label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="w-full p-3 border rounded mb-4 pr-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={showPassword ? eyeOpen : eyeClosed}
                  alt="Toggle Password Visibility"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer w-5 h-5"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <button
                onClick={handleResetPassword}
                className="w-full bg-black text-white p-3 rounded mb-3 transition duration-300 hover:bg-gray-800"
                disabled={loading}
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>
              <button onClick={() => setStep("otp")} className="text-[#072AC8] text-sm mt-4">
                Go Back
              </button>
            </>
          )}
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div className="w-full md:w-1/2 bg-gray-100 relative">
        <img src={background} alt="Decorative Background" className="absolute w-full h-full object-cover" />
      </div>
    </div>
  );
}
