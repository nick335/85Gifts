
import { Home, Coins, Gift, Users, ListOrdered } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/src/lib/utils";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Menu items
const items = [
  {
    title: "AdminHome",
    path: "/adminpage",
    icon: Home,
  },
  {
    title: "Users",
    path: "/users",
    icon: Users,
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: Coins,
  },
  {
    title: "Gifts",
    path: "/admingiftspage",
    icon: Gift,
  },
  {
    title: "AdminOrders",
    path: "/adminorders",
    icon: ListOrdered,
  },
];

export function AdminSideNav() {
  return (
    <div className="flex h-screen">
      {/* Desktop Sidebar */}
      <Sidebar collapsible="icon" className="bg-[#032bb7] hidden md:flex">
        <SidebarContent className="bg-[#032bb7] text-white">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <div className="flex flex-col items-center mb-4">
                  <SidebarTrigger />
                  <Link to="/adminpage">
                    <img
                      src="/src/assets/logo.png"
                      alt="Logo"
                      className="w-28 min-w-10"
                    />
                  </Link>
                </div>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <Link to={item.path} className="hover:bg-blue-900 flex items-center gap-2 p-2 rounded">
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
      </Sidebar>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#032bb7] text-white flex justify-around items-center p-2 md:hidden">
        {items.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center text-xs",
                isActive ? "text-white" : "text-gray-300"
              )
            }
          >
            <item.icon className="h-5 w-5 mb-1" />
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
