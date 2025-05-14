import { Link } from 'react-router-dom';
import error from "../assets/icons/error.svg";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ErrorPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-col-reverse md:flex-row flex-1">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white px-6 sm:px-8 py-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Oops!</h2>
            <p className="text-gray-600 mb-6 text-center max-w-xs sm:max-w-md">
              That page cannot be found. We are working on it.
            </p>
            <Link to="/" className="w-full max-w-xs">
              <button className="w-full text-white p-3 rounded-lg bg-blue-500 hover:bg-gray-800 transition duration-300">
                Back to homepage...
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
            <img src={error} alt="Error" className="w-full h-auto max-h-80 object-contain" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
