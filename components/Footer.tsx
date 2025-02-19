// footer
import { Link } from "react-router-dom";

interface FooterSectionProps {
  title: string;
  links: { title: string; url: string }[];
  className?: string;
}
const FooterSection = ({ title, links, className }: FooterSectionProps) => {
  return (
    <div className={`footer-section flex-1 p-4 ${className}`}>
      <h1 className="text-lg font-semibold mb-2">{title}</h1>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url} className="hover:underline">
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
    { title: "Conatct Us", url: "/about" },
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
  return (
    <>
      <div className="footer-content bg-[#1F2022] text-white flex flex-col md:flex-row md:border md:border-t-white md:border-b-white justify-center h-full w-full md:h-[40vh]">
        <FooterSection title="About" links={aboutLinks} />
        <FooterSection
          title="Information"
          links={informationLinks}
          className="md:border-r md:border-l md:border-white"
        />
        <FooterSection title="Support" links={supportLinks} />
      </div>
      {/* <footer className="">
        <div className="footer-content bg-[#1F2022] text-white flex flex-col md:flex-row md:border md:border-t-white md:border-b-white justify-center h-full  w-full md:h-[30vh]">
          <div className="footer-about">
            <ul>
              <h1>About</h1>
              <li>
                <a href="/about">Our Company</a>
              </li>
              <li>
                <a href="/services">Our Story</a>
              </li>
              <li>
                <a href="/contact">Shop</a>
              </li>
              <li>
                <a href="/contact">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-information md:border-r-white md:border-l-white ">
            <ul>
              <h1>Information</h1>
              <li>
                <a href="/about">Delievery information</a>
              </li>
              <li>
                <a href="/services">privacy Policy</a>
              </li>
              <li>
                <a href="/contact">Terms & Coditions</a>
              </li>
              <li>
                <a href="/contact">Return Polices</a>
              </li>
            </ul>
          </div>
          <div className="footer-support">
            <ul>
              <h1>Support</h1>
              <li>
                <a href="/about">Conatct Us</a>
              </li>
              <li>
                <a href="/services">Help</a>
              </li>
              <li>
                <a href="/contact">FAQ</a>
              </li>
              <li>
                <a href="/contact">Check Outs</a>
              </li>
            </ul>
          </div>
        </div>
      </footer> */}
    </>
  );
}
