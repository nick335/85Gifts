import { NavLink } from "react-router-dom";
import { cn } from "@/src/lib/utils";


const navItems = [

]

const BottomNav = () => {
{/* Bottom navigation for mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white flex justify-around items-center p-2 md:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center text-xs",
                isActive ? "text-blue-400" : "text-gray-400"
              )
            }
          >
            <item.icon className="h-5 w-5 mb-1" />
            {item.name}
          </NavLink>
        ))}
      </nav>

}


export default BottomNav;
