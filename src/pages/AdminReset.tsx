import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminReset() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState<"email" | "code" | "password">("email");
  const [serverError, setServerError] = useState("");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendCode = () => {
    setValidationErrors([]);
    if (!email) {
      setValidationErrors(["Email is required"]);
      return;
    }
    if (!validateEmail(email)) {
      setValidationErrors(["Please enter a valid email address"]);
      return;
    }

    // Call the API to send the code
    axios
      .post("https://eight5gifts-be.onrender.com/api/admin/forgot-password", { email })
      .then((response) => {
        if (response.data.success) {
          setStep("code"); // Move to the next step
        } else {
          setServerError("Failed to send code. Please try again.");
        }
      })
      .catch((err) => {
        setServerError("Something went wrong. Please try again.");
      });
  };

  const handleVerifyCode = () => {
    if (!code) {
      setValidationErrors(["Verification code is required"]);
      return;
    }

    // Call the API to verify the code (you may need to implement this API)
    axios
      .post("https://eight5gifts-be.onrender.com/api/admin/verify-code", { email, code })
      .then((response) => {
        if (response.data.success) {
          setStep("password"); // Move to the next step
        } else {
          setServerError("Invalid code. Please try again.");
        }
      })
      .catch((err) => {
        setServerError("Something went wrong. Please try again.");
      });
  };

  const handleUpdatePassword = () => {
    if (!newPassword) {
      setValidationErrors(["New password is required"]);
      return;
    }

    // Call the API to update the password
    axios
      .post("https://eight5gifts-be.onrender.com/api/admin/update-password", { email, newPassword })
      .then((response) => {
        if (response.data.success) {
          navigate("/login"); // Redirect to login page
        } else {
          setServerError("Failed to update password. Please try again.");
        }
      })
      .catch((err) => {
        setServerError("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-6">Forgot Password</h2>

        {step === "email" && (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {validationErrors.map((error, index) => (
              <p key={index} className="text-red-500 text-sm mb-2">{error}</p>
            ))}
            {serverError && <p className="text-red-500 text-sm mb-2">{serverError}</p>}
            <button
              onClick={handleSendCode}
              className="w-full bg-black text-white p-3 rounded"
            >
              Send Code
            </button>
          </>
        )}

        {step === "code" && (
          <>
            <input
              type="text"
              placeholder="Enter verification code"
              className="w-full p-3 border rounded mb-4"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            {validationErrors.map((error, index) => (
              <p key={index} className="text-red-500 text-sm mb-2">{error}</p>
            ))}
            {serverError && <p className="text-red-500 text-sm mb-2">{serverError}</p>}
            <button
              onClick={handleVerifyCode}
              className="w-full bg-black text-white p-3 rounded"
            >
              Verify Code
            </button>
          </>
        )}

        {step === "password" && (
          <>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full p-3 border rounded mb-4"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {validationErrors.map((error, index) => (
              <p key={index} className="text-red-500 text-sm mb-2">{error}</p>
            ))}
            {serverError && <p className="text-red-500 text-sm mb-2">{serverError}</p>}
            <button
              onClick={handleUpdatePassword}
              className="w-full bg-black text-white p-3 rounded"
            >
              Update Password
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminReset;