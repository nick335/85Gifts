import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/icons/loginbg.png";
import axios from "axios";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import google from "../assets/icons/google.svg";
import eyeOpen from "../assets/icons/eye.svg";
import eyeClosed from "../assets/icons/eye-off.svg";

function Login() {
  const [step, setStep] = useState<"email" | "password">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverError, setServerError] = useState("");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = () => {
    setValidationErrors([]);
    if (!email) {
      setValidationErrors(["Email is required"]);
      return;
    }
    if (!validateEmail(email)) {
      setValidationErrors(["Please enter a valid email address"]);
      return;
    }
    setStep("password");
  };


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    setValidationErrors([]);

    axios
      .post("/api/api/user/signin", { email, password })
      .then((result) => {
        console.log("API Response:", result.data);

        if (result.data && result.data.success) {
          localStorage.setItem("authToken", result.data.data.authToken);
          navigate("/HomePage");
        } else {
          setServerError(result.data.message || "Invalid login.");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        if (err.response) {
          setServerError(err.response.data?.error || "Invalid Credentials. Please try again.");
        } else {
          setServerError("Something went wrong. Please try again.");
        }
      });
  };


  const handleGoogleSignIn = async () => {
    try {
      const response = await axios.get("/api/user/auth0/signin", {
        withCredentials: true, // Ensures cookies (if any) are included
      });

      // If the backend provides a redirect URL, navigate to it
      if (response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
      } else {
        console.error("No redirect URL received from the server.");
      }
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };


  return (
    <div className="flex flex-col-reverse md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 sm:p-8">
        <div className="max-w-sm w-full">
          <Link to="/" className="absolute top-6 left-6 md:top-10 md:left-10">
            <img src={logo} alt="Logo" className="w-[71px] h-[43px]" />
          </Link>
          <h2 className="text-xl font-semibold mb-4 -mt-20">Welcome back! Please enter your details</h2>

          {step === "email" ? (
            <>

              <input
                type="email"
                placeholder="johndoe.pal@gmail.com"
                className="w-full p-3 border rounded mb-5"
                onChange={(e) => setEmail(e.target.value)}
              />
              {validationErrors.map((error, index) => (
                <p key={index} className="text-red-500 text-sm">{error}</p>
              ))}
              <button onClick={handleEmailSubmit} className="w-full bg-black text-white p-3 rounded mb-5 transition duration-300 hover:bg-gray-800">
                Continue with email
              </button>
              <button onClick={handleGoogleSignIn} className="w-full border p-3 mt-1 rounded flex items-center justify-center transition duration-300 hover:bg-[#B5B8FF]">
                <img src={google} alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </button>
              {/* <p className="mt-4 text-sm text-gray-600">
                <Link to="/reset-password" className="text-red-600">Forgot Password?</Link>
              </p> */}
            </>
          ) : (
            <form onSubmit={handleLogin}>

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="w-full p-3 border rounded mb-1 pr-12"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={showPassword ? eyeOpen : eyeClosed}
                  alt="Toggle Password Visibility"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer w-5 h-5"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              {validationErrors.map((error, index) => (
                <p key={index} className="text-red-500 text-sm">{error}</p>
              ))}
              {serverError && <p className="text-red-500 text-sm">{serverError}</p>}
              <button type="submit" className="w-full bg-black text-white p-3 mt-2 rounded mb-3 transition duration-300 hover:bg-gray-800">
                Sign In
              </button>
              <button onClick={handleGoogleSignIn} className="w-full border p-3 rounded flex items-center justify-center transition duration-300 hover:bg-[#B5B8FF]">
                <img src={google} alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </button>
              <p className="mt-4 text-sm text-gray-600">
                <Link to="/reset-password" className="text-red-600 hover:text-red-500">Forgot Password?</Link>
              </p>
              <p className="mt-4 text-sm text-gray-600">
                Don’t have an account? <Link to="/signup" className="text-[#072AC8]">Sign up</Link>
              </p>
              <button onClick={() => setStep("email")} className="text-[#072AC8] text-sm mt-4">
                Back to email
              </button>

            </form>
          )}
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center relative">
        <img src={background} alt="Decorative Background" className="absolute w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Login;