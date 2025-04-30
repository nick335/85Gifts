import { AdminSideNav } from '@/components/AdminSideNav'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Outlet } from 'react-router'




export default function AdminLayout (){
return (
  <SidebarProvider>
    <div className='flex min-h-screen w-full'>
  <AdminSideNav />
    <main className='p-4 flex-1 bg-gray-100'>
          <Outlet />  
        </main>
   </div>
    </SidebarProvider>
  )
}



