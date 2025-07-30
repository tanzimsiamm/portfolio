import { HiArrowUpRight } from "react-icons/hi2";
import { BsCodeSlash } from "react-icons/bs";
import { IoIosTabletPortrait } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { motion, type Variants } from "framer-motion";
import Container from "./Container";
import type { JSX } from "react";

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
  hover: {
    scale: 1.03,
    boxShadow: "0px 15px 30px rgba(128, 90, 213, 0.4)",
    transition: { duration: 0.3 },
  },
};

interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    icon: <BsCodeSlash />,
    title: "Frontend Development",
    description:
      "Crafting visually stunning, interactive, and high-performance user interfaces using modern frameworks like React and Next.js, ensuring exceptional user experiences.",
  },
  {
    icon: <IoIosTabletPortrait />,
    title: "Responsive Web Design",
    description:
      "Building pixel-perfect, adaptive websites that seamlessly adjust and perform flawlessly across all devices and screen sizes, from mobile to desktop.",
  },
  {
    icon: <MdOutlineDesignServices />,
    title: "UI/UX Design Implementation",
    description:
      "Transforming design mockups into functional, intuitive, and aesthetically pleasing user interfaces, focusing on usability, accessibility, and visual harmony.",
  },
  {
    icon: <TbApi />,
    title: "API Integration & Backend",
    description:
      "Developing robust and scalable backend solutions with Node.js, Express, and MongoDB, and seamlessly integrating third-party APIs for extended functionality.",
  },
];

const Services = () => {
  return (
    <Container>
      <div className="px-7 md:px-12 lg:px-20 mb-20 lg:mb-32 mt-20 lg:mt-20">
        <motion.h1
          className="text-[34px] lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-16 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          variants={titleVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          MY SERVICES
        </motion.h1>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4 lg:gap-y-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] rounded-2xl shadow-xl shadow-purple-900/30"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <motion.div
                className="rounded-2xl bg-gray-900/90 backdrop-blur-sm py-6 px-5 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-6 xl:gap-7 text-center md:text-left h-full"
                whileHover={{ scale: 1 }}
              >
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] rounded-2xl flex-shrink-0">
                  <div className="bg-gray-800 rounded-2xl p-5 md:p-6 xl:p-7">
                    <div className="border border-purple-500/30 rounded-full p-2">
                      <div className="bg-gradient-to-r from-purple-400 to-blue-400 rounded-full p-[1px]">
                        <h3 className="text-white text-3xl md:text-4xl bg-gray-900 rounded-full p-3 flex items-center justify-center">
                          {service.icon}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3 flex-grow">
                  <p className="text-gray-200 text-base md:text-lg xl:text-xl font-semibold uppercase flex items-center justify-center md:justify-start gap-2">
                    {service.title}
                    <HiArrowUpRight className="text-xl text-purple-400" />
                  </p>
                  <p className="text-gray-400 font-light text-sm lg:text-[15px] xl:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </section>
      </div>
    </Container>
  );
};

export default Services;
