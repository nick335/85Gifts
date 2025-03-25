import { useState } from "react";
import { Gift, Home, MessageSquareText, ReceiptText, LogOut, Settings } from "lucide-react";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import logo from "../src/assets/logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", path: "/HomePage", icon: Home },
  { title: "Gifts", path: "/Gifts", icon: Gift },
  { title: "Messages", path: "/Messages", icon: MessageSquareText },
  { title: "Cart", path: "/Cart", icon: RiShoppingBagLine },
  { title: "Order History", path: "/OrderHistory", icon: ReceiptText },
];

const footerItems = [
  { title: "Settings", path: "/Settings", icon: Settings },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove auth token
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
      <Sidebar collapsible="icon" className="bg-[#032bb7]">
        <SidebarContent className="bg-[#032bb7] text-white">
          <SidebarGroup className="bg-[#032bb7] hover:text-white">
            <SidebarGroupContent>
              <SidebarMenu>
                <div className="flex flex-col items-center mb-4">
                  <SidebarTrigger />
                  <Link to="/HomePage">
                    <img src={logo} alt="logo" className="w-28 mb-2" />
                  </Link>
                </div>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <Link to={item.path} className="hover:bg-900 flex items-center gap-2">
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer Section */}
        <SidebarFooter className="bg-[#032bb7] text-white">
          <SidebarMenu>
            {footerItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <Link to={item.path} className="hover:bg-[#041c85] flex items-center gap-2">
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}

            {/* Logout Button with Confirmation Popup */}
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setShowLogoutPopup(true)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      {/* Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black w-50% bg-opacity-30">
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
