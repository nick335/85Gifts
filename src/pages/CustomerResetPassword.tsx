import { useState } from "react";
import { useNavigate } from "react-router";
import background from "../assets/icons/loginbg.png";
import eyeOpen from "../assets/icons/Eye.png";
import eyeClosed from "../assets/icons/Eye.png";

export default function CustomerResetPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"email" | "password">("email");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailSubmit = () => {
    if (!email) {
      alert("Please enter your email.");
    } else if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
    } else {
      setStep("password");
    }
  };

  const handleReset = () => {
    if (password) {
      alert("Reset successful");
      navigate("/login")
    } else {
      alert("Please enter your password.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white px-6 sm:px-8 py-20 relative">
        {/* Static Logo */}
        <a href="/" className="absolute top-6 left-6 md:top-10 md:left-10">
          <img src="src/assets/logo.png" alt="Logo" className="w-[71px] h-[43px]" />
        </a>

        <div className="max-w-sm w-full md:mt-0 mt-32">
          {step === "email" ? (
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
                className="w-full bg-black text-white p-3 rounded mb-3"
              >
                Next
              </button>
            </>
          ) : (
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
                onClick={handleReset}
                className="w-full bg-black text-white p-3 rounded mb-3"
              >
                Reset
              </button>
              <button
                onClick={() => setStep("email")}
                className="text-[#072AC8] text-sm mt-4"
              >
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
