// footer
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

interface FooterLink {
  title: string;
  url: string;
  icon?: React.ReactNode; // Icon is now optional
}

interface FooterSectionProps {
  id?: number;
  title: string;
  links: FooterLink[];
  className?: string;
}

const FooterSection = ({ title, links, className }: FooterSectionProps) => {
  return (
    <div className={`footer-section flex-1 p-4 ${className}`}>
      <h1 className="text-xl font-bold mb-4 uppercase tracking-wide text-gray-300 border-b-2 border-[#B5B8FF] inline-block pb-1">
        {title}
      </h1>
      <ul
        className="flex flex-col md:p-4
        justify-center space-y-1 items-center md:items-start md:mx-12 md:space-y-4"
      >
        {links.map((link, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-300">
            {link.icon && <span>{link.icon}</span>}
            <Link
              to={link.url}
              className="hover:underline hover:text-[#B5B8FF] "
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  const aboutLinks = [
    { title: "Our Company", url: "/about" },
    { title: "Our Story", url: "/services" },
    { title: "Shop", url: "/contact" },
    { title: "Blog", url: "/contact" },
  ];

  const supportLinks = [
    { title: "Contact Us", url: "/about" },
    { title: "FAQ", url: "/services" },
    { title: "Help Center", url: "/contact" },
    { title: "Press", url: "/contact" },
  ];

  const informationLinks = [
    { title: "Delivery Information", url: "/about" },
    { title: "Privacy Policy", url: "/services" },
    { title: "Terms & Conditions", url: "/contact" },
    { title: "Return Policies", url: "/contact" },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaTwitter className="text-white transition" />,
      title: "Twitter",
      url: "/#",
    },
    {
      id: 2,
      icon: <FaFacebook className="text-white" />,
      title: "Facebook",
      url: "/#",
    },
    {
      id: 3,
      icon: <FaInstagram className="text-white" />,
      title: "Instagram",
      url: "/#",
    },
  ];

  return (
    <>
      <div className="footer-content bottom-0 bg-[#1F2022] text-white grid grid-cols-1 text-center md:grid-cols-4 justify-center items-center h-full w-full md:h-[40vh]">
        <FooterSection title="About" links={aboutLinks} />
        <FooterSection title="Information" links={informationLinks} />
        <FooterSection title="Support" links={supportLinks} className="" />
        <FooterSection title="Follow Us" links={socialLinks} />
      </div>
      <div className="footer-bottom bg-[#1F2022] text-white text-center py-8">
        <p>&copy; {new Date().getFullYear()} 85Gifts. All Rights Reserved</p>
      </div>
    </>
  );
}
