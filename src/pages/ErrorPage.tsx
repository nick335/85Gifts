import { Link } from 'react-router-dom';
import error from "../assets/icons/error.svg";
import logo from "../assets/logo.png"; // Ensure correct import

export default function ErrorPage() {
    return (
        <div className="Errorpage flex flex-col md:flex-row min-h-screen">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white px-6 sm:px-8 py-20 relative">
                <Link to="/" className="absolute top-6 left-6 md:top-10 md:left-10">
                    <img src={logo} alt="Logo" className="w-[71px] h-[43px]" />
                </Link>
                <h2 className="m-8 text-2xl font-semibold text-gray-800">Oops!</h2>
                <p className="text-gray-600">That page cannot be found. We are working on it.</p>
                <div className="m-4">
                    <Link to="/">
                        <button className="w-full bg-black text-white p-3 rounded-lg transition duration-300 hover:bg-gray-800">
                            Back to homepage...
                        </button>
                    </Link>
                </div>
            </div>

            <div className="w-full md:w-1/2 bg-gray-100 relative">
                <img src={error} alt="Error Background" className="absolute w-full h-full object-cover" />
            </div>
        </div>
    );
}
