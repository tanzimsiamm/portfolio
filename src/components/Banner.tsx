import { motion } from "framer-motion"; // Import motion from framer-motion
import Experience from "./Experience";
import image from '../assets/portfolio-profile.jpg'; // Import your profile image

// Define animation variants for the text
const textVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Define animation variants for the buttons
const buttonVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.6 } },
  hover: { scale: 1.05, boxShadow: "0px 10px 15px rgba(128, 90, 213, 0.4)" }, // Purple shadow
  tap: { scale: 0.95 },
};

// Define variants for the profile image container
const imageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut", delay: 0.4 } },
};


export default function Banner() {
  return (
    <div className="hero md:h-[620px] lg:h-[800px] max-w-[1400px] mx-auto font-sans flex flex-col-reverse md:flex-row justify-around items-center gap-8 px-6 md:px-12 pb-14 md:pb-36 relative overflow-hidden">
      {/* Main content area */}
      {/* Replaced data-aos with Framer Motion's initial and animate props */}
      <motion.div
        className="text-white flex-1 xl:pl-14 relative z-20 xl:border-l border-purple-500/70 rounded-2xl"
        initial="initial"
        animate="animate"
        variants={textVariants} // Apply text animation variants
      >
        <div className="max-w-4xl space-y-3 lg:space-y-6">
          <p className="text-xl lg:text-3xl font-light mb-2 text-right md:text-left text-gray-300">
            Hello, I'm
          </p>
          <h1 className="text-5xl lg:text-8xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap">
            Siam 
          </h1>
          <h2 className="text-3xl lg:text-5xl font-semibold text-white text-right md:text-left">
            MERN Full Stack Developer
          </h2>

          <p className="font-light text-gray-400 text-sm lg:text-base text-right md:text-left leading-relaxed">
            Crafting dynamic and responsive web applications with expertise in{" "}
            <span className="text-purple-300 font-medium">React</span>,{" "}
            <span className="text-blue-300 font-medium">Next.js</span>, and{" "}
            <span className="text-green-300 font-medium">TypeScript</span>.
            Skilled in robust state management with{" "}
            <span className="text-red-300 font-medium">Redux</span> and
            building scalable backend solutions with{" "}
            <span className="text-yellow-300 font-medium">Node.js</span> and{" "}
            <span className="text-cyan-300 font-medium">Mongoose</span>.
          </p>
        </div>
        <motion.div // Apply button animation variants here
          className="flex items-center gap-3 mt-5 md:mt-10"
          initial="initial"
          animate="animate"
          variants={buttonVariants}
        >
          <a href="resume link">
            <motion.button
              className="px-7 py-3 md:py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-xs md:text-sm shadow-lg shadow-purple-500/40 transition hover:from-purple-700 hover:to-blue-700"
              whileHover="hover" // Apply hover animation from variants
              whileTap="tap" // Apply tap animation from variants
            >
              Download Resume
            </motion.button>
          </a>
          <a href="#projects">
            <motion.button
              className="px-7 py-3 md:py-4 rounded-full border border-purple-500 text-purple-300 font-medium text-xs md:text-sm transition hover:bg-purple-500 hover:text-white"
              whileHover="hover" // Apply hover animation from variants
              whileTap="tap" // Apply tap animation from variants
            >
              View Projects
            </motion.button>
          </a>
        </motion.div>
      </motion.div>

      {/* circles (image containers) - Using Framer Motion for better animation control */}
      {/* For mobile */}
      <motion.div
        className="md:hidden relative gradient-border rounded-full w-[290px] h-[290px] z-20 mt-8"
        initial="initial"
        animate="animate"
        variants={imageVariants} // Apply image animation variants
      >
        <img
          src={image}
          className="absolute rounded-full w-[325px] h-[325px] object-cover inset-0 -top-8 mx-auto bg-white/5"
          alt="Siam H profile"
        />
      </motion.div>

      {/* For large screens */}
      <motion.div
        className="hidden md:block relative gradient-border rounded-full md:w-80 xl:w-[440px] md:h-80 lg:w-[380px] lg:h-[380px] xl:h-[440px] z-20 mt-8 md:mt-0"
        initial="initial"
        animate="animate"
        variants={imageVariants} // Apply image animation variants
      >
        <img
          src={image}
          className="absolute rounded-full md:w-full md:h-[350px] lg:h-[440px] xl:h-[520px] object-cover inset-0 md:-top-8 lg:-top-16 xl:-top-20 mx-auto bg-transparent"
          alt="Siam H profile"
        />
      </motion.div>

      {/* Experience section */}
      <section className="absolute -bottom-20 md:bottom-24 z-30 left-0 right-0">
        <Experience />
      </section>
    </div>
  );
}