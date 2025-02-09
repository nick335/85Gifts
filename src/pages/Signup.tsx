import logo from "../assets/logo.png";
import Frame285 from "../assets/Frame285.png";

export default function Signup() {
  return (
    <>
      <div className="signup-page flex flex-col sm:flex-row lg:flex-row">
        <div className="signup-left w-full sm:w-1/2 p-4">
          <div>
            <img src={logo} alt="Logo" height={45} width={75} />
          </div>
          <div className="mt-[10%]">
            <p className="text-xl font-semibold text-center sm:text-left">
              Hi there! Let's create your account and get you going.
            </p>
            <form className="flex flex-col items-center sm:items-start mt-5 ml-6">
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full sm:w-1/2 p-3 border rounded-xl mb-4 outline-none"
              />
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full sm:w-1/2 p-3 border rounded-xl mb-4 outline-none"
              />
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full sm:w-1/2 p-3 border rounded-xl mb-4 outline-none"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:w-1/2 p-3 border rounded-xl mb-4 outline-none"
              />
              <input
                type="number"
                placeholder="Enter your phone number"
                className="w-full sm:w-1/2 p-3 border rounded-xl mb-4 outline-none"
              />
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full sm:w-1/2 p-3 border rounded-xl mb-4 outline-none"
              />
              <input
                type="password"
                placeholder="Re-enter your password"
                className="w-full sm:w-1/2 p-3 border rounded-xl mb-4 outline-none"
              />
              <button className="bg-black text-white rounded-xl w-full sm:w-1/2 px-10 py-5">
                Submit
              </button>
            </form>
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
