import { Link } from "react-router-dom"

import { Button } from "./ui/button" // Import the Button component

// Sample data for TopGifts
// You can replace this with your actual TopGifts array
const TopGifts = [
    {
        id: 1,
        text: "Birthday Packages",
        image: "https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372619/items_4_jo35xd.png",
    },
    {
        id: 2,
        text: "Anniversary Gifts",
        image: "https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372618/items_5_eeo052.png",
    },
    {
        id: 3,
        text: "Thank You Gifts",
        image: "https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372619/items_6_mrwc1j.png",
    },
    {
        id: 4,
        text: "Corporate Gifts",
        image: "https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372619/items_4_jo35xd.png",
    },
]

export default function TopGiftsSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">Top Gift Packages</h2>
                <Link to="/Signup">
                    <Button variant="default" size="lg" className="bg-[#6971E0] hover:bg-[#5158C7]">
                        Explore more
                    </Button>
                </Link>
            </div>

            {/* Top Gifts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {TopGifts.map((gift) => (
                    <div key={gift.id} className="flex flex-col items-center group">
                        {/* Circular Image with Hover Effect */}
                        <div className="relative mb-4">
                            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#B5B8FF]/30 shadow-md transition-all duration-300 group-hover:border-[#6971E0] group-hover:shadow-lg">
                                <img
                                    src={gift.image || "/placeholder.svg"}
                                    alt={gift.text}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Decorative Circle */}
                            <div className="absolute -z-10 w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#B5B8FF]/10 -top-2 -left-2 transition-all duration-300 group-hover:bg-[#B5B8FF]/20"></div>

                            {/* View Button on Hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Link to="/Signup">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-white/80 backdrop-blur-sm hover:bg-white text-[#4A4F9E] border-transparent"
                                    >
                                        View Packages
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Gift Package Name */}
                        <h3 className="text-lg md:text-xl font-semibold text-center text-[#4A4F9E] group-hover:text-[#6971E0] transition-colors duration-300">
                            {gift.text}
                        </h3>

                        {/* Short Description */}
                        <p className="text-sm text-gray-500 text-center mt-2 max-w-xs">
                            Perfect gifts for every {gift.text.toLowerCase().replace(" packages", "").replace(" gifts", "")} occasion
                        </p>

                        {/* Price Range */}
                        <div className="mt-3 text-sm font-medium text-[#6971E0]">From $29.99</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
