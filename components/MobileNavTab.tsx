import { IconType } from "react-icons";
import { FaHome, FaSearch, FaUser, FaShoppingBag, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

type NavTab = "HomePage" | "Gifts" | "Cart" | "OrderHistory" | "account";

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
    cartItemCount = 0,
    className = "",
    iconSize = 20,
}: MobileBottomNavProps) {
    const navItems: NavItem[] = [
        { icon: FaHome, label: "Home", tab: "HomePage" },
        { icon: FaSearch, label: "Gifts", tab: "Gifts" },
        { icon: FaShoppingBag, label: "Cart", tab: "Cart" },
        { icon: FaHeart, label: "Orders", tab: "OrderHistory" },
        { icon: FaUser, label: "Account", tab: "account" },
    ];

    return (
        <nav className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 ${className}`}>
            <div className="flex justify-around items-center p-2">
                {navItems.map(({ icon: Icon, label, tab }) => {
                    const isActive = activeTab === tab;
                    const isCart = tab === "Cart";

                    return (
                        <Link
                            to={`/${tab}`}
                            key={tab}
                            className={`flex flex-col items-center p-2 text-xs ${isActive ? "text-[#072AC8]" : "text-gray-600 hover:text-[#072AC8]"
                                }`}
                            aria-current={isActive ? "page" : undefined}
                        >
                            <div className="relative">
                                <Icon size={iconSize} className="mb-1" />
                                {isCart && cartItemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {Math.min(cartItemCount, 99)}
                                    </span>
                                )}
                            </div>
                            <span>{label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}