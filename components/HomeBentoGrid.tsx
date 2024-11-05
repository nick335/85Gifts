import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
  } from "@radix-ui/react-icons";
  
  import { BentoCard, BentoGrid } from "../components/ui/bento-grid";
  
  const features = [
    {
      Icon: FileTextIcon,
      name: "Save your files",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-2 lg:h-[28rem] lg:w-[27rem]",
    },
    {
      Icon: InputIcon,
      name: "",
      description: "",
      href: "/",
      // cta: "Learn more",
      // background: <img className="absolute -right-20 -top-20 opacity-60" />,
      background:  <img src="/src/assets/Chritsmas.png" className="object-fit:cover"/> ,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 lg:h-[17rem] ml-[2vw] object-fit:cover",
    },
    {
      Icon: GlobeIcon,
      name: "Multilingual",
      description: "Supports 100+ languages and counting.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 mt-[7vh] ml-[2vw] lg:h-[15vh]",
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 h-[11vw] w-[31vw]",
    },
    {
      Icon: BellIcon,
      name: "Notifications",
      description:
        "Get notified when someone shares a file or mentions you in a comment.",
      href: "/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 mt-[10.5rem] lg:row-end-4 h-[20.8vw] w-[31vw]",
    },
  ];
  
  export default function HomeBentoGrid() {
    return (
      <BentoGrid className="lg:grid-rows-2">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    );
  }
  




