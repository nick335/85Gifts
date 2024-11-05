import { Gift, Home,  MessageSquareText, ReceiptText, LogOut, Settings } from "lucide-react"
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    path: "#",
    icon: Home,
  },
  {
    title: "Gifts",
    path: "/Gifts",
    icon: Gift,
  },
  {
    title: "Messages",
    path: "/Messages",
    icon: MessageSquareText,
  },
  {
    title: "Cart",
    path: "/Cart",
    icon: RiShoppingBagLine,
  },
  {
    title: "Order History",
    path: "/OrderHistory",
    icon: ReceiptText,
  },
]


const footerItems = [
  {
    title: "Settings",
    path: "/Settings",
    icon: Settings,
  },
  {
    title: "Logout",
    path: "/Logout",
    icon: LogOut,
  },
]



export function AppSidebar() {
  return (
    <Sidebar className="bg-[#032bb7]" >
      <SidebarContent className="bg-[#032bb7] text-white">
        <SidebarGroup className="bg-[#032bb7]">
          {/* <SidebarGroupLabel> */}
          {/* </SidebarGroupLabel> */}
          <SidebarGroupContent className="">
            <SidebarMenu>
            <span className=''>

            <Link to='/HomePage' className=''>
            <img src='../src/assets/logo.png' alt='logo' className='w-28 mb-2'/>
            </Link>
            </span>
                          {items.map((item) => (
                <SidebarMenuItem key={item.title} >
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="hover:bg-[#041c85] hover:text-white">
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
            <SidebarFooter className="bg-[#032bb7] text-white ">
              <SidebarMenu>
                <SidebarMenuItem>
                    {footerItems.map((item) => (
                    <  SidebarMenuButton asChild>
                    <Link to={item.path} className="hover:bg-[#041c85] hover:text-white text-white">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                    ))}
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
    </Sidebar>
  )
}
