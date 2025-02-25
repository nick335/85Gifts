import { useState } from "react";
import { AnimatedMenuButton } from "./MobBtn";
import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // For the hamburger menu icon
import SearchInput from "./ui/search-bar";
import { Button } from "./ui/button";

const NavLinks = [
  { title: "Find a gift", href: "/FindAGift" },
  { title: "Men", href: "/men" },
  { title: "Women", href: "/women" },
  { title: "Event", href: "/event" },
];
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-transparent text-[18px] w-full px-6 py-4 md:px-12 md:py-6">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src="../src/assets/logo.png" alt="logo" className="h-10" />
      </Link>
      <nav className="flex w-[80%] items-center justify-between  ">
        {/* Desktop Menu */}
        <div className="hidden  md:font-bold md:flex gap-6 text-gray-800">
          {NavLinks.map((link, index) => (
            <Link key={index} to={link.href} className="hover:text-primary">
              {link.title}
            </Link>
          ))}
        </div>

        {/* Search Input (Visible only on larger screens) */}
        <div className="hidden md:block">
          <SearchInput />
        </div>

        {/* Login & Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/HomePage"
            className="text-primary hover:rounded-full px-4 py-1 hover:bg-black hover:text-white"
          >
            Login
          </Link>
          <Button className="bg-secondary text-black rounded-full px-6 py-2 hover:bg-primary hover:text-white">
            Get Started
          </Button>
        </div>
      </nav>
      {/* Mobile Menu Button */}
      <div className="block items-center justify-items-center md:hidden">
        <AnimatedMenuButton onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-blue-600 bg-gradient-to-tr absolute top-16 left-2 w-[95%] shadow-lg py-4 px-6`}
      >
        <div className="flex flex-col gap-4">
          <Link
            to="/FindAGift"
            className="hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Find a gift
          </Link>
          <Link
            to="/Men"
            className="hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Men
          </Link>
          <Link
            to="/Women"
            className="hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Women
          </Link>
          <Link
            to="/Event"
            className="hover:text-primary hover:rounded-md hover:bg-slate-400 hover:bg-gradient-to-br"
            onClick={() => setMenuOpen(false)}
          >
            Event
          </Link>
          <Link
            to="/HomePage"
            className="hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Button className="bg-secondary text-black rounded-full px-6 py-2 hover:bg-primary hover:text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
