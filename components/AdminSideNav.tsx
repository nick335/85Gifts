import { Home,  Coins, LogOut, Settings, Users, ListOrdered } from "lucide-react"
// import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom"

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
} from "@/components/ui/sidebar"

// Menu items.
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
    title: 'transactions',
    path: "/transactions",
    icon: Coins,
  },
  {
    title: "orders",
    path: "/orders",
    icon: ListOrdered,
  },
]



// ]


export function AdminSideNav() {
  return (
    <Sidebar collapsible="icon" className="bg-[#032bb7]">
      <SidebarContent className="bg-[#032bb7] text-white">
        <SidebarGroup className="bg-[#032bb7] hover:text-white">
          <SidebarGroupContent className="">
            <SidebarMenu>
            <span className="justify-center gap-2 items-center">
            <div className="mb-4">
            <SidebarTrigger />
            </div>
            <Link to='/AdminHomePage' className=''>
            <img src='../src/assets/logo.png' alt='logo' className='w-28 mb-2 min-w-10'/>
            </Link>
            </span>
                          {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link to={item.path} className="hover:bg-900">
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
            {/* <SidebarFooter className="bg-[#032bb7] text-white "> */}
            {/*   <SidebarMenu> */}
            {/*     <SidebarMenuItem > */}
            {/*         {footerItems.map((item) => ( */}
            {/*         <SidebarMenuButton asChild tooltip={item.title}> */}
            {/*         <Link to={item.path} className="hover:bg-[#041c85]text-white"> */}
            {/*           <item.icon /> */}
            {/*           <span>{item.title}</span> */}
            {/*         </Link> */}
            {/*       </SidebarMenuButton> */}
            {/*         ))} */}
            {/*     </SidebarMenuItem> */}
            {/*   </SidebarMenu> */}
            {/* </SidebarFooter> */}
    </Sidebar>
  )
}
