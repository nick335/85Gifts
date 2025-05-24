import { useState, useEffect, useRef } from "react";
import { AnimatedMenuButton } from "./MobBtn";
import { Link } from "react-router-dom";
import SearchInput from "./ui/search-bar";
import { Button } from "./ui/button";

const NavLinks = [
  { title: "Find Gift", href: "/Signup" },
  { title: "Men", href: "/Signup" },
  { title: "Women", href: "/Signup" },
  { title: "Event", href: "/Signup" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between text-[18px] w-full px-4 py-4 md:px-6 md:py-2 bg-gradient-to-l from-[#E2E5FF] to-[#B5B8FF]">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src="https://res.cloudinary.com/dsmc6vtpt/image/upload/v1741372844/logo_gayznn.png"
          alt="logo"
          className="h-10"
        />
      </Link>
      <nav className="flex w-[80%] items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:font-bold md:flex gap-6 text-gray-800">
          {NavLinks.map((link, index) => (
            <Link key={index} to={link.href} className="hover:text-primary">
              {link.title}
            </Link>
          ))}
        </div>

        {/* Search Input */}
        <div className="hidden md:block">
          <SearchInput />
        </div>

        {/* Login & Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-primary hover:rounded-full px-4 py-1 hover:bg-black hover:text-white"
          >
            Login
          </Link>
          <Link to="/Signup">
            <Button className="bg-secondary text-black rounded-full px-6 py-2 hover:bg-primary hover:text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>
      {/* Mobile Menu Button */}
      <div className="block items-center justify-items-center md:hidden">
        <AnimatedMenuButton onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="bg-blue-600 bg-gradient-to-l absolute z-40 top-16 left-2 w-[95%] shadow-lg py-4 px-6"
        >
          <div className="flex flex-col gap-4">
            <Link
              to="/Signup"
              className="hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Find Gift
            </Link>
            <Link
              to="/Signup"
              className="hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Men
            </Link>
            <Link
              to="/Signup"
              className="hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Women
            </Link>
            <Link
              to="/Signup"
              className="hover:text-primary hover:rounded-md hover:bg-slate-400 hover:bg-gradient-to-br"
              onClick={() => setMenuOpen(false)}
            >
              Event
            </Link>
            <Link
              to="/login"
              className="hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link to="/Signup">
              <Button className="bg-secondary text-black rounded-full px-6 py-2 hover:bg-primary hover:text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
