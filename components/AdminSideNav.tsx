import { Home,  Coins, Gift,Users, ListOrdered } from "lucide-react"
// import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
import { cn } from "@/src/lib/utils";




import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
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
   title: "gifts",
   path: "/admingiftspage",
   icon: Gift,
  },
  {
    title: "orders",
    path: "/orders",
    icon: ListOrdered,
  },
]





export function AdminSideNav() {
  return (
   <div className="flex h-screen">
    <Sidebar collapsible="icon" className="bg-[#032bb7]">
      <SidebarContent className="bg-[#032bb7] text-white">
        <SidebarGroup className="bg-[#032bb7] hover:text-white">
          <SidebarGroupContent className="">
            <SidebarMenu>
            <span className="justify-center gap-2 items-center">
            <div className="mb-4">
            <SidebarTrigger />
            </div>
            <Link to='/adminpage' className=''>
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

        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#032bb7] text-white flex justify-around items-center p-2 md:hidden">
    <div className="flex h-screen">
      <Sidebar collapsible="icon" className="bg-[#032bb7]">
        <SidebarContent className="bg-[#032bb7] text-white">
          <SidebarGroup className="bg-[#032bb7] hover:text-white">
            <SidebarGroupContent className="">
              <SidebarMenu>
                <span className="justify-center gap-2 items-center">
                  <div className="mb-4">
                    <SidebarTrigger />
                  </div>
                  <Link to='/adminpage' className=''>
                    <img src='../src/assets/logo.png' alt='logo' className='w-28 mb-2 min-w-10' />
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
     </div>
      </nav>
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

  )
}
