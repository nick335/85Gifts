import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Sidenav"
import { Outlet } from "react-router"

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
        {/* <SidebarTrigger /> */}
      <main>
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
