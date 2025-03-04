import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";
import Frame285 from "../assets/Frame285.png";
import eyeOpen from "../assets/icons/eye.svg";
import eyeClosed from "../assets/icons/eye-off.svg";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [valid, setValid] = useState(true);
  const [serverError, setServerError] = useState<string | null>(null);
  const [emailExistsError, setEmailExistsError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    const validationErrors: {
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    if (!formData.firstName.trim()) {
      isValid = false;
      validationErrors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      isValid = false;
      validationErrors.lastName = "Last Name is required";
    }
    if (!formData.email.trim()) {
      isValid = false;
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = "Invalid email format";
    }
    if (!formData.password.trim()) {
      isValid = false;
      validationErrors.password = "Password required";
    } else if (formData.password.length < 6) {
      isValid = false;
      validationErrors.password = "Password must be at least 6 characters long";
    }
    if (formData.confirmPassword !== formData.password) {
      isValid = false;
      validationErrors.confirmPassword = "Password do not match";
    }

    setErrors(validationErrors);
    setValid(isValid);
    setServerError(null);
    setEmailExistsError(null); 

    // Authenticate User if valid

    if (isValid) {
      try {
        // Destructuring only the necessary fields from formData
        const { firstName, lastName, email, password } = formData;
        // console.log(firstName, lastName, email, password);

        const response = await axios.post(
          "https://eight5gifts-be.onrender.com/api/user/signup",
          {
            firstName,
            lastName,
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          // console.log("AuthToken set in localStorage:", localStorage.getItem("authToken"));
          // console.log("authToken", response.data.authToken);
          // console.log("Response Data:", response.data);
          localStorage.setItem("authToken", response.data.data.authToken); 
          // console.log("authToken", response.data.data.authToken);
          console.log("AuthToken set in localStorage:", localStorage.getItem("authToken"));     
          alert(
            "Registered successfully. Verification code has been sent to your email, expires in 5 mins!"
          );
          navigate("/VerifyEmail", { state: { email } });
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (!err.response) {
            // Network or server issue(no response)
            setServerError(
              "Network error. Please check your internet connection or try again later."
            );
          } else {
            if (err.response.data.error === "Email already exist"){
              setEmailExistsError("This email is already registered. Please try logging in.");
            }else
            // console.log("Signup error:", err);
            alert("Signup failed. Please try again.");
          }
        }
      }
    }
  };

  return (
    <>
      <div className="signup-page flex flex-col sm:flex-row lg:flex-row">
        <div className="signup-left w-full h-full sm:w-1/2 p-4">
          <div>
            <img src={logo} alt="Logo" height={45} width={75} />
          </div>
          <div className="mt-[5%]">
            <p className="text-xl font-semibold text-center sm:text-left">
              Hi there! Let's create your account and get you going.
            </p>
            <form
              className="flex flex-col items-center sm:items-start mt-5 ml-6"
              onSubmit={handleSignup}
            >
              {valid ? (
                <></>
              ) : (
                <span className="text-sm text-red-600">
                  {errors.firstName};
                </span>
              )}
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="w-full sm:w-1/2 p-3 border rounded-xl mb-4 outline-none"
                value={formData.firstName}
                required
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              {valid ? (
                <></>
              ) : (
                <span className="text-sm text-red-600">{errors.lastName};</span>
              )}
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="w-full sm:w-1/2 p-3 border rounded-xl mb-4 outline-none"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
              {valid ? (
                <></>
              ) : (
                <span className="text-sm text-red-600">{errors.email};</span>
              )}
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full sm:w-1/2 p-3 border rounded-xl mb-4 outline-none"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {emailExistsError && (
                <span className="text-sm text-red-600">{emailExistsError}</span>
              )}
              {valid ? (
                <></>
              ) : (
                <span className="text-sm text-red-600">{errors.password};</span>
              )}
              <div className="relative w-full sm:w-1/2 mb-4">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a strong password"
                className="w-full p-3 border rounded-xl outline-none"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
               <img
                  src={showPassword ? eyeOpen : eyeClosed}
                  alt="Toggle Password Visibility"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer w-5 h-5"
                  onClick={() => setShowPassword(!showPassword)}
                />
                </div>
              {valid ? (
                <></>
              ) : (
                <span className="text-sm text-red-600">
                  {errors.confirmPassword};
                </span>
              )}
              <div className="relative w-full sm:w-1/2 mb-4">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Re-enter your password"
                className="w-full p-3 border rounded-xl  outline-none"
                required
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
              <img
                  src={showConfirmPassword ? eyeOpen : eyeClosed}
                  alt="Toggle Confirm Password Visibility"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer w-5 h-5"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              </div>
              <button className="bg-black text-white rounded-xl w-full sm:w-1/2 px-10 py-5">
                Submit
              </button>
            </form>
            {serverError && (
              <div className="mt-4 text-red-600 text-sm">{serverError}</div>
            )}
            <p className="mt-5 mr-10">
              Already have an account? <Link to="/Login">Login</Link>
            </p>
          </div>
        </div>
        <div
          className="signup-right w-full sm:w-1/2 flex justify-center items-center bg-cover bg-center sm:hidden lg:block"
          style={{ backgroundImage: `url(${Frame285})` }}
        >
          <img
            src={Frame285}
            alt="shopping display"
            className="object-cover w-full h-full lg:h-auto lg:max-h-[90vh] hidden lg:block"
          />
        </div>
      </div>
    </>
  );
}
