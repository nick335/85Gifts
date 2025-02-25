import logo from "../assets/logo.png";
import Frame285 from "../assets/Frame285.png";
import { Link } from "react-router-dom";

export default function AdminReset() {
  return (
    <>
      <div className="signup-page flex flex-col sm:flex-row lg:flex-row">
        <div className="signup-left w-full sm:w-1/2 p-4">
          <div>
            <img src={logo} alt="Logo" height={45} width={75} />
          </div>
          <div className="mt-[10%] flex flex-col justify-center items-center ">
              <p className="font-medium sm:text-left">Hello Admin, Please enter your email</p>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full sm:w-1/2 p-3 border rounded-xl mb-4 outline-none"
              />
              <button type="submit" className="w-full bg-black text-white p-3 mt-2  mb-3 max-w-[50%] rounded-xl"> 
                Send Code
              </button>
              </div>
               <p className="mt-4 text-sm text-gray-600 ">
                              <Link to="/adminlogin" className="text-[#072AC8]">Back to Login</Link>
                            </p>
            
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
