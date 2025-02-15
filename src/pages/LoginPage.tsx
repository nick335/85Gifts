import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/icons/loginbg.png";
import axios from "axios";
import { Link } from "react-router-dom";
import google from "../assets/icons/Google.png";
import eyeOpen from "../assets/icons/Eye.png";
import eyeClosed from "../assets/icons/Eye.png";


function Login() {
  const [step, setStep] = useState<"email" | "password">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverError, setServerError] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const navigate = useNavigate();

  const handleEmailSubmit = () => {

    if (email) {
      setStep("password");
    }
    
    
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(""); 
    setValidationErrors([]);

    axios
      .post("https://eight5gifts-be.onrender.com/api/user/signin", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home"); 
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          
          if (err.response.data.errors) {
            setValidationErrors(err.response.data.errors);
          } else if (err.response.data) {
            setServerError(err.response.data);
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
          <img src="src/assets/logo.png" alt="Logo" className="w-14 mb-4 -translate-y-28 -translate-x-6" />
          <h2 className="text-xl font-semibold mb-4">Welcome back! Please enter your details</h2>

          {step === "email" ? (
            <>
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                placeholder="johndoe.pal@gmail.com"
                className="w-full p-3 border rounded mb-1"
              onChange={(e) => setEmail(e.target.value)}
              />
               {validationErrors.length > 0 && (
          <ul style={{ color: "red" }}>
            {validationErrors.map((error, index) => (
              <li key={index}>{error.msg}</li>
            ))}
          </ul>
        )}
               <button onClick={handleEmailSubmit} className="w-full bg-black text-white p-3 rounded mb-3">
                Continue with email
              </button>
              <button className="w-full border p-3 rounded flex items-center justify-center">
                <img src={google} alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </button>
              <p className="mt-4 text-sm text-gray-600">
                Don’t have an account? <a href="#" className="text-[#072AC8]">Sign up</a>
              </p>
            </>
          ) : (
            <form onSubmit={handleLogin}>
              <label className="block text-gray-600 mb-2">Enter Password</label>
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
              {/* Display validation errors */}
        {validationErrors.length > 0 && (
          <ul style={{ color: "red" }}>
            {validationErrors.map((error, index) => (
              <li key={index}>{error.msg}</li>
            ))}
          </ul>
        )}

        {/* Display server errors */}
        {serverError && <p style={{ color: "red" }}>{serverError}</p>}

 <button type="submit" className="w-full bg-black text-white p-3 rounded mb-3">
                Sign In
              </button>
              <button className="w-full border p-3 rounded flex items-center justify-center">
                <img src={google} alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </button>
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
