import { useState } from "react";
import background from "../assets/icons/loginbg.png";
import google from "../assets/icons/Google.png";
import eyeOpen from "../assets/icons/Eye.png";
import eyeClosed from "../assets/icons/Eye.png";

function Login() {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailSubmit = () => {
    if (email) {
      setStep("password");
    } else {
      alert("Please enter your email.");
    }
  };

  const handleLogin = () => {
    if (password) {
      alert("Logging in successful");
    } else {
      alert("Please enter your password.");
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row h-screen">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 sm:p-8">
        <div className="max-w-sm w-full">
          <img src="src/assets/logo.png" alt="Logo" className="w-14 mb-4  -translate-y-28 -translate-x-6" />
          <h2 className="text-xl font-semibold mb-4">
            Welcome back! Please enter your details
          </h2>

          {step === "email" ? (
            <>
              <label className="block text-gray-600 mb-2">Email</label>
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
                Continue with email
              </button>
              <button className="w-full border p-3 rounded flex items-center justify-center">
                <img src={google} alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </button>
              <p className="mt-4 text-sm text-gray-600">
                Don’t have an account?{" "}
                <a href="#" className="text-[#072AC8]">Sign up</a>
              </p>
            </>
          ) : (
            <>
              <label className="block text-gray-600 mb-2">Enter Password</label>
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
                onClick={handleLogin}
                className="w-full bg-black text-white p-3 rounded mb-3"
              >
                Sign In
              </button>
              <button className="w-full border p-3 rounded flex items-center justify-center">
                <img src={google} alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </button>
              <p className="mt-4 text-sm text-gray-600">
                Don’t have an account?{" "}
                <a href="#" className="text-[#072AC8]">Sign up</a>
              </p>
              <button
                onClick={() => setStep("email")}
                className="text-[#072AC8] text-sm mt-4"
              >
                Back to email
              </button>
            </>
          )}
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center relative">
        <img src={background} alt="Decorative Background" className="absolute w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Login;

