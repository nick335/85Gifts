import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/icons/loginbg.png";
import logo from "../assets/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import eyeOpen from "../assets/icons/Eye.png";
import eyeClosed from "../assets/icons/Eye.png";

function AdminLogin() {
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
      .post("https://eight5gifts-be.onrender.com/api/admin/signin", { email, password })
      .then((result) => {
        console.log(result.data); // Debugging: Check API response in console
  
        if (result.data.success) {
          // Save the token (if needed)
          localStorage.setItem("authToken", result.data.data.authToken);
  
          // Navigate to home page
          navigate("/HomePage");
        } else {
          setServerError("Invalid login. Please check your credentials.");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          if (err.response.data.errors) {
            setValidationErrors(err.response.data.errors);
          } else if (err.response.data) {
            setServerError( "Invalid Credentials. Please try again.");
          }
        } else {
          setServerError("Something went wrong. Please try again.");
        }
      });
  };

  

  return (
    <div className="flex flex-col-reverse md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 sm:p-8">
        <div className="max-w-sm w-full">
        <img src={logo} alt="Logo" className="w-14 mb-4 -translate-y-28 -translate-x-6" />
          
          <h2 className="text-xl font-semibold mb-4 -mt-20">Welcome back Admin! Please enter your details</h2>

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
              <button onClick={handleEmailSubmit} className="w-full bg-black text-white p-3 rounded mb-5">
                Continue with email
              </button>
              
              <p className="mt-4 text-sm text-gray-600">
                <Link to="/reset" className="text-red-600">Forgot Password?</Link>
              </p>
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
              <button type="submit" className="w-full bg-black text-white p-3 mt-2 rounded mb-3">
                Sign In
              </button>
             
              <p className="mt-4 text-sm text-gray-600">
                <Link to="/admin/reset" className="text-red-600">Forgot Password?</Link>
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

export default AdminLogin;