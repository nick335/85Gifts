import { Link } from 'react-router-dom';
import error from "../assets/icons/error.svg";

export default function ErrorPage() {
    return (
        <div className='Errorpage flex flex-col md:flex-row min-h-screen'>
            <div className='w-full md:w-1/2 flex flex-col items-center justify-center bg-white px-6 sm:px-8 py-20 relative'>
                <a href="/" className="absolute top-6 left-6 md:top-10 md:left-10">
                    <img src="src/assets/logo.png" alt="Logo" className="w-[71px] h-[43px]" />
                </a>
                <h2 className='m-12'>Oops!</h2>
                <p>That Page cannot be found, We encountered an error. We are working on it</p>
                <p className='text-decoration'>
                    <Link to="/">Back to homepage...</Link>
                </p>
            </div>
            <div className="w-full md:w-1/2 bg-gray-100 relative">
                <img src={error} alt="Error Background" className="absolute w-full h-full object-cover" />
            </div>

        </div>
    )
}
