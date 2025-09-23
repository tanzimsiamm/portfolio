import { GoArrowRight } from "react-icons/go";
import Container from "./Container";
import { useGetProjectsQuery } from "../redux/features/projects/projectApi";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";

interface Project {
  _id: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  live: string;
  client_code: string;
  server_code?: string;
}

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0px 15px 30px rgba(128, 90, 213, 0.4)",
    transition: { duration: 0.3 },
  },
};

const buttonVariants: Variants = {
  hover: { scale: 1.05, boxShadow: "0px 10px 15px rgba(128, 90, 213, 0.4)" },
  tap: { scale: 0.95 },
};

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -10, pointerEvents: "none" },
  visible: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto",
    transition: { duration: 0.2 },
  },
};

const Projects = () => {
  const { data, isLoading, isError } = useGetProjectsQuery(undefined);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const projects: Project[] = data?.data || [];

  if (isLoading) {
    return (
      <div className="text-center text-white py-20">Loading projects...</div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-20">
        Failed to load projects.
      </div>
    );
  }

  return (
    <Container>
      <section
        id="projects"
        className="px-7 md:px-12 lg:px-20 mb-28 scroll-mt-20"
      >
        {/* Ensure this heading always renders */}
        <motion.h1
          className="text-[34px] lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-16 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          LATEST PROJECTS
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-6">
          {projects.map((project) => (
            <motion.div
              key={project._id}
              className="bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] rounded-2xl shadow-xl shadow-purple-900/30 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl h-full flex flex-col">
                {/* Image */}
                <div className="h-[200px] md:h-[190px] lg:h-[220px] xl:h-[280px] w-full rounded-t-2xl overflow-hidden">
                  {project?.image && (
                    <img
                      src={project.image}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      alt={project.title}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6 xl:p-7 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 font-light text-sm lg:text-[15px] leading-relaxed mb-4 flex-grow">
                    {project.description}
                    {project.technologies?.length > 0 && (
                      <>
                        <br />
                        <span className="font-medium text-gray-300">
                          Technologies:
                        </span>{" "}
                        <span className="font-light text-purple-200">
                          {Array.isArray(project.technologies)
                            ? project.technologies.join(", ")
                            : project.technologies}
                        </span>
                      </>
                    )}
                  </p>

                  {/* Buttons */}
                  <section className="flex items-center gap-3 justify-between mt-auto">
                    <a
                      target="_blank"
                      href={project.live}
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        className="rounded-full w-32 h-11 text-sm flex justify-center items-center gradient-background text-white font-medium shadow-lg shadow-purple-500/40"
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                      >
                        Live Preview
                      </motion.button>
                    </a>

                    <div className="relative">
                      <motion.button
                        className="rounded-full w-32 h-11 text-sm flex justify-center items-center gap-2 text-gray-200 border border-gray-600 hover:border-purple-400 font-medium transition-colors"
                        onClick={() =>
                          setOpenDropdownId(
                            openDropdownId === project._id ? null : project._id
                          )
                        }
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                      >
                        GitHub <GoArrowRight className="text-xl" />
                      </motion.button>

                      <motion.div
                        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 rounded-full px-4 py-2 flex gap-3 min-w-max border border-gray-700 z-10"
                        initial="hidden"
                        animate={
                          openDropdownId === project._id ? "visible" : "hidden"
                        }
                        variants={dropdownVariants}
                        style={{ originY: "bottom" }}
                      >
                        {project.client_code && (
                          <a
                            href={project.client_code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 text-xs md:text-sm border-r border-gray-600 pr-3 hover:text-cyan-400 transition-colors"
                          >
                            Client
                          </a>
                        )}
                        {project.server_code && (
                          <a
                            href={project.server_code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 text-xs md:text-sm hover:text-cyan-400 transition-colors pl-3"
                          >
                            Server
                          </a>
                        )}
                      </motion.div>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Projects;
