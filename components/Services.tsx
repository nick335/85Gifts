import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "src/assets/icons/delivery.svg",
    title: "Free Delivery",
    description: "For all orders above 50k",
    href: "/delivery",
  },
  {
    icon: "src/assets/icons/security.png",
    title: "Secure Payment",
    description: "Seamless payment on any device",
    href: "/secure-payment",
  },
  {
    icon: "src/assets/icons/customer-care.png",
    title: "Customer Support",
    description: "24/7 customer support",
    href: "/customer-support",
  },
  {
    icon: "/src/assets/icons/return.png",
    title: "7 days Return Policy",
    description: "7 days return policy on all orders",
    href: "/return-policy",
  },
];

function Services() {
  return (
    <>
      <div className="flex flex-col mt-56 md:h-44 md:flex-row md:mt-0 justify-between items-center gap-4 bg-[#f5f5f5] md:mx-2">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.href}
            className="service w-[90%] md:h-0  flex flex-col gap-4 justify-center items-center hover:ease-in-out"
          >
            <div className="service-icon">
              <img
                src={service.icon}
                alt={service.title}
                className="bg-white  p-4 mb-2  rounded-full w-full cursor-pointer"
              />
            </div>
            <h4
              className="mt-2
             md:mt-0 text-center text-lg font-bold"
            >
              {service.title}
            </h4>
            <p className="">{service.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Services;
