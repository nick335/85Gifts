import { BsArrowDownRight, BsGift, BsHeart, BsStars } from "react-icons/bs"
import { Link } from "react-router-dom"

export default function BentGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
        {/* Hero Image */}
        <div className="md:col-span-2 md:row-span-1 rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741367408/Chritsmas_piroiy.png"
            alt="Festive gift collection"
          />
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 md:row-span-3 bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Find the <span className="text-[#6971E0]">perfect gift</span> for your loved ones
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Show your appreciation with thoughtfully curated gift boxes for any occasion
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-[#B5B8FF]/20 text-[#4A4F9E] px-3 py-1 rounded-full text-sm font-medium">
              <BsGift className="inline mr-1" /> 25+ Brands
            </span>
            <span className="bg-[#B5B8FF]/20 text-[#4A4F9E] px-3 py-1 rounded-full text-sm font-medium">
              <BsHeart className="inline mr-1" /> Personalized
            </span>
            <span className="bg-[#B5B8FF]/20 text-[#4A4F9E] px-3 py-1 rounded-full text-sm font-medium">
              <BsStars className="inline mr-1" /> Premium Quality
            </span>
          </div>

          <Link to="/Signup" className="inline-block">
            <button className="bg-[#6971E0] hover:bg-[#5158C7] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md">
              Explore Collection
            </button>
          </Link>
        </div>

        {/* Stats Box */}
        <div className="md:col-span-2 bg-gray-900 text-white rounded-2xl p-6 shadow-lg flex flex-col justify-center">
          <div className="flex items-center">
            <div className="mr-4">
              <div className="text-4xl font-bold text-[#B5B8FF]">2,000+</div>
              <div className="text-xl mt-1">Happy Customers</div>
            </div>
            <div className="ml-auto">
              <div className="w-16 h-16 rounded-full bg-[#6971E0] flex items-center justify-center">
                <BsHeart className="text-white text-2xl" />
              </div>
            </div>
          </div>
          <div className="mt-4 text-gray-300">Join thousands of satisfied customers who found the perfect gift</div>
        </div>

        {/* Gift Image */}
        <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372524/thankyougift_kp5rqa.png"
            alt="Thank you gift"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gift Suggestion Box */}
        <div className="md:col-span-2 bg-gradient-to-r from-[#4A4F9E] to-[#383D7A] text-white rounded-2xl p-6 shadow-lg flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-3">Personalized Gift Suggestions</h2>
          <p className="mb-6">Let our gift experts help you find the perfect present for any occasion</p>
          <div className="flex justify-end">
            <div className="bg-white rounded-full p-3 text-[#4A4F9E] transform transition-all hover:scale-110 cursor-pointer">
              <BsArrowDownRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Popular Gift Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Birthday", "Anniversary", "Thank You", "Holidays"].map((category) => (
            <div
              key={category}
              className="bg-[#B5B8FF]/10 border border-[#B5B8FF]/30 rounded-xl p-4 text-center shadow-md hover:shadow-lg hover:bg-[#B5B8FF]/20 transition-all cursor-pointer"
            >
              <div className="text-lg font-medium text-[#4A4F9E]">{category}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
