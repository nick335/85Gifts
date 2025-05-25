import { BsArrowRight, BsHeart } from "react-icons/bs"
import { Link } from "react-router-dom"

import { Button } from "./ui/button" // Import the Button component

// Simple Quantity Dropdown component
const QuantityDropdown = () => (
    <select className="bg-white border border-gray-200 rounded-md px-2 py-1 text-sm">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
)

export default function BestSellingSection() {
    // Product data
    const products = [
        {
            id: 1,
            name: "For Her Gift Box",
            price: "$49.99",
            image: "https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372619/items_4_jo35xd.png",
        },
        {
            id: 2,
            name: "Cupcake Collection",
            price: "$29.99",
            image: "https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372618/items_5_eeo052.png",
        },
        {
            id: 3,
            name: "Giorgio Perfume",
            price: "$59.99",
            image: "https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372619/items_6_mrwc1j.png",
        },
        {
            id: 4,
            name: "Luxury Gift Set",
            price: "$79.99",
            image: "https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372619/items_4_jo35xd.png", // Reusing image as placeholder for 4th item
        },
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">Best Selling Gifts</h2>
                <Link to="/Signup">
                    <Button
                        variant="default"
                        size="lg"
                        className="bg-[#6971E0] hover:bg-[#5158C7]"
                    >
                        Explore more
                    </Button>
                </Link>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        {/* Product Image */}
                        <div className="aspect-square overflow-hidden bg-gray-100">
                            <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* Wishlist Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                            aria-label="Add to wishlist"
                        >
                            <BsHeart className="text-[#4A4F9E]" />
                        </Button>

                        {/* Product Info */}
                        <div className="p-3 md:p-4 bg-white">
                            <h3 className="font-medium text-sm md:text-base">{product.name}</h3>
                            <div className="flex justify-between items-center mt-1">
                                <span className="font-bold text-[#4A4F9E]">{product.price}</span>
                                <div className="flex items-center gap-1">
                                    <span className="text-xs text-gray-500">⭐ 4.8</span>
                                </div>
                            </div>
                        </div>

                        {/* Hover Actions - Hidden on mobile, visible on hover for desktop */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
                                <Link to="/Signup" className="w-full md:w-auto">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full bg-white text-[#4A4F9E] hover:bg-[#B5B8FF] hover:text-white border-transparent"
                                    >
                                        Add to cart
                                        <BsArrowRight />
                                    </Button>
                                </Link>
                                <QuantityDropdown />
                            </div>
                        </div>

                        {/* Mobile Actions - Always visible on mobile */}
                        <div className="md:hidden absolute bottom-2 right-2">
                            <Link to="/Signup">
                                <Button
                                    variant="default"
                                    size="icon"
                                    className="bg-[#6971E0] hover:bg-[#5158C7] rounded-full shadow-md"
                                    aria-label="Quick add"
                                >
                                    <BsArrowRight />
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
