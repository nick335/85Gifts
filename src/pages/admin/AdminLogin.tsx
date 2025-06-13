import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/icons/loginbg.png";
import logo from "../../assets/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import eyeOpen from "../../assets/icons/Eye.png";
import eyeClosed from "../../assets/icons/Eye.png";
import { config } from "@/src/config";

function AdminLogin() {
  const [step, setStep] = useState<"email" | "password">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverError, setServerError] = useState("");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = () => {
    setIsLoading(true);
    setValidationErrors([]);
    if (!email) {
      setValidationErrors(["Email is required"]);
      setIsLoading(false);
      return;
    }
    if (!validateEmail(email)) {
      setValidationErrors(["Please enter a valid email address"]);
      setIsLoading(false);
      return;
    }
    setStep("password");
    setIsLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setServerError("");
    setValidationErrors([]);

    axios
      .post(`${config.BACKEND_URL}/api/admin/signin`, { email, password })
      .then((result) => {
        if (result.data.success) {
          localStorage.setItem("adminToken", result.data.data.authToken);
          localStorage.setItem("admin", "true"); // Mark as admin session
          navigate("/adminpage");
        } else {
          setServerError("Invalid login. Please check your credentials.");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          if (err.response.data.errors) {
            setValidationErrors(err.response.data.errors);
            navigate("/admin/login")
          } else if (err.response.data) {
            setServerError("Invalid Credentials. Please try again.");
          }
        } else {
          setServerError("Something went wrong. Please try again.");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 px-6 py-12 sm:px-12 lg:px-24 flex flex-col items-center justify-center">
          <div className="max-w-md w-full">
            <Link to="/" className="mb-8 block">
              <img src={logo} alt="Logo" className="w-16" />
            </Link>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Portal</h1>
            <p className="text-gray-600 mb-8">Please enter your credentials to continue</p>

            {step === "email" ? (
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Admin Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="admin@example.com"
                    className={`w-full px-4 py-3 rounded-lg border ${validationErrors.length ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-black focus:border-black outline-none transition`}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {validationErrors.map((error, index) => (
                    <p key={index} className="mt-1 text-sm text-red-600">{error}</p>
                  ))}
                </div>

                <button
                  onClick={handleEmailSubmit}
                  disabled={isLoading}
                  className={`w-full bg-black text-white font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'
                    }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </div>
                  ) : (
                    "Continue with email"
                  )}
                </button>

                <div className="flex justify-end">
                  <Link
                    to="/admin/reset"
                    className="text-sm text-red-600 hover:text-red-500 font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Admin Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="••••••••"
                      className={`w-full px-4 py-3 rounded-lg border ${validationErrors.length || serverError ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-black focus:border-black outline-none transition pr-10`}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <img
                        src={showPassword ? eyeOpen : eyeClosed}
                        alt="Toggle Password Visibility"
                        className="w-5 h-5 text-gray-500"
                      />
                    </button>
                  </div>
                  {validationErrors.map((error, index) => (
                    <p key={index} className="mt-1 text-sm text-red-600">{error}</p>
                  ))}
                  {serverError && <p className="mt-1 text-sm text-red-600">{serverError}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-black text-white font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'
                    }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Authenticating...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </button>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setStep("email")}
                    className="text-[#072AC8] font-medium hover:text-[#072ac8d0] text-sm"
                  >
                    Back to email
                  </button>
                  <Link
                    to="/admin/reset"
                    className="text-sm text-red-600 hover:text-red-500 font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block lg:w-1/2 bg-gray-100 relative">
          <img
            src={background}
            alt="Decorative Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;