import { BsGift, BsStars, BsHeart } from "react-icons/bs"
import { Link } from "react-router-dom"

import { Button } from "./ui/button"

export default function FriendshipOfferSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#6971E0]/10 to-[#B5B8FF]/20 shadow-lg">
                {/* Enhanced Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B5B8FF]/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#B5B8FF]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-[#6971E0]/10 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#6971E0]/10 rounded-full"></div>

                <div className="p-8 md:p-12 relative z-10">
                    {/* Centered Content */}
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-[#6971E0]/20 text-[#4A4F9E]">
                            <BsGift className="w-4 h-4 mr-2" />
                            <span>Limited Time Offer</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 capitalize mb-6">
                            Friendship Day <span className="text-[#6971E0]">Special</span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            A perfect opportunity to celebrate your friendships with thoughtfully curated gift boxes that express your
                            appreciation. Get up to 30% off on all friendship day collections.
                        </p>

                        {/* Feature Icons */}
                        <div className="flex flex-wrap justify-center gap-6 mb-8">
                            <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow-sm">
                                <BsGift className="text-[#6971E0]" />
                                <span className="font-medium">Premium Gifts</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow-sm">
                                <BsHeart className="text-[#6971E0]" />
                                <span className="font-medium">Free Shipping</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full shadow-sm">
                                <BsStars className="text-[#6971E0]" />
                                <span className="font-medium">30% Off</span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2 mb-10">
                            <Link to="/Signup">
                                <Button variant="default" size="lg" className="bg-[#6971E0] hover:bg-[#5158C7] rounded-full px-8">
                                    Shop Now
                                </Button>
                            </Link>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-[#6971E0] text-[#6971E0] hover:bg-[#6971E0]/10 rounded-full"
                            >
                                View Collection
                            </Button>
                        </div>

                        {/* Enhanced Countdown Timer */}
                        <div className="mt-8">
                            <div className="text-lg font-medium text-gray-700 mb-4">Offer ends in:</div>
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    { value: "02", label: "Days" },
                                    { value: "18", label: "Hours" },
                                    { value: "45", label: "Mins" },
                                    { value: "30", label: "Secs" },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="bg-white shadow-lg rounded-xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-xl md:text-2xl font-bold text-[#4A4F9E] border border-[#B5B8FF]/30">
                                            {item.value}
                                        </div>
                                        <div className="text-sm mt-2 text-gray-500 font-medium">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Discount Badge */}
                        <div className="mt-10 inline-block bg-[#6971E0] text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg">
                            Use code: FRIEND30 for 30% OFF
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
