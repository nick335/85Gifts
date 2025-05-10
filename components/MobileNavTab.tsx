import { useState } from "react";
import { IconType } from "react-icons";
import { FaHome, FaSearch, FaUser, FaShoppingBag, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../src/store/useCart";

type NavTab = "HomePage" | "Gifts" | "Cart" | "Orders" | "account";

interface NavItem {
    icon: IconType;
    label: string;
    tab: NavTab;
}

interface MobileBottomNavProps {
    activeTab: NavTab;
    cartItemCount?: number;
    className?: string;
    iconSize?: number;
}

export default function MobileBottomNav({
    activeTab,
    className = "",
    iconSize = 20,
}: MobileBottomNavProps) {
    const [showAccountPopup, setShowAccountPopup] = useState(false);
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);
    const navigate = useNavigate();
    

    const navItems: NavItem[] = [
        { icon: FaHome, label: "Home", tab: "HomePage" },
        { icon: FaSearch, label: "Gifts", tab: "Gifts" },
        { icon: FaShoppingBag, label: "Cart", tab: "Cart" },
        { icon: FaHeart, label: "Orders", tab: "Orders" },
        { icon: FaUser, label: "Account", tab: "account" },
    ];

    const { cartItems } = useCart();
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);


    const accountOptions = [
        { label: "Edit Profile", href: "/edit-profile" },
        { label: "Settings", href: "/settings" },
        { label: "Help", href: "/help" },
        { label: "Logout", action: () => setShowLogoutPopup(true) }, // Trigger logout popup
    ];

    const handleLogout = () => {
        localStorage.removeItem("authToken"); // Remove auth token
        navigate("/login"); // Redirect to login page
    };

    return (
        <>
            <nav className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 ${className}`}>
                <div className="flex justify-around items-center p-2">
                    {navItems.map(({ icon: Icon, label, tab }) => {
                        const isActive = activeTab === tab;
                        const isCart = tab === "Cart";

                        return (
                            <div key={tab} className="relative">
                                <Link
                                    to={tab !== "account" ? `/${tab}` : "#"}
                                    className={`flex flex-col items-center p-2 text-xs ${isActive ? "text-[#072AC8]" : "text-gray-600 hover:text-[#072AC8]"
                                        }`}
                                    aria-current={isActive ? "page" : undefined}
                                    onClick={() => {
                                        if (tab === "account") {
                                            setShowAccountPopup(!showAccountPopup);
                                        }
                                    }}
                                >
                                    <div className="relative">
                                        <Icon size={iconSize} className="mb-1" />
                                        {isCart && cartItemCount > 0 && (<span className='absolute top-2 left-[] bg-[#072ACD] text-[#fff] text-xs rounded-full px-1'>{cartItemCount}</span>)}
                                    </div>
                                    <span>{label}</span>
                                </Link>

                                {/* Account Popup */}
                                {tab === "account" && showAccountPopup && (
                                    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 w-48 z-50">
                                        <ul className="flex flex-col gap-2">
                                            {accountOptions.map((option, index) => (
                                                <li key={index}>
                                                    {option.href ? (
                                                        <Link
                                                            to={option.href}
                                                            className="block text-sm text-gray-700 hover:text-blue-600 px-2 py-1"
                                                            onClick={() => setShowAccountPopup(false)}
                                                        >
                                                            {option.label}
                                                        </Link>
                                                    ) : (
                                                        <button
                                                            onClick={option.action}
                                                            className="block text-sm text-gray-700 hover:text-blue-600 w-full text-center px-2 py-1"
                                                        >
                                                            {option.label}
                                                        </button>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </nav>

            {/* Logout Confirmation Popup */}
            {showLogoutPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                        <h2 className="text-lg font-semibold mb-4">Are you sure you want to logout?</h2>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => setShowLogoutPopup(false)}
                                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}