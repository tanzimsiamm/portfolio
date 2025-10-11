import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { motion, type Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const buttonVariants: Variants = {
  hover: { scale: 1.05, boxShadow: "0px 10px 15px rgba(128, 90, 213, 0.4)" },
  tap: { scale: 0.95 },
};

const AboutMe = () => {
  return (
    <motion.div
    id="about-me"
      className="hero h-[670px] md:h-[390px] lg:h-[430px] xl:h-[470px] max-w-[1400px] mx-auto flex flex-col md:flex-row justify-around items-center px-8 md:px-16 relative mt-36 md:mt-0 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="w-[80%] mx-auto h-[1px] bg-gradient-to-r from-purple-500 to-blue-500 opacity-10 absolute -top-20 md:-top-28 right-0 left-0 z-40"></div>

      <motion.div
        className="flex-1 flex justify-center items-center h-full w-full relative"
        variants={imageVariants}
      >
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-[2px] rounded-full w-56 h-52 md:w-48 lg:w-[280px] md:h-48 lg:h-[280px] xl:w-[300px] xl:h-[300px] absolute left-auto top-[68px] md:left-auto lg:left-20 xl:left-40 md:top-16 lg:top-24 xl:top-24 -z-10 shadow-2xl shadow-purple-900/50"></div>

  <img
  src="https://img.freepik.com/free-vector/web-development-programmer-working-laptop-computer_39422-911.jpg?w=420&t=st=1698765432~exp=1698766032~hmac=abc123"
  className="w-[280px] lg:w-[360px] xl:w-[420px] rounded-full object-cover"
  alt="Single developer coding JavaScript on a laptop"
/>

      </motion.div>

      <motion.div className="text-white flex-1 w-full font-sans">
        <div className="max-w-4xl space-y-2 lg:space-y-5">
          <motion.h1
            className="text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 my-5 text-left"
            variants={itemVariants}
          >
            About Me
          </motion.h1>

          <motion.p
            style={{ lineHeight: 1.7 }}
            className="text-gray-300 font-light text-sm lg:text-base xl:text-[17px] text-justify md:text-left"
            variants={itemVariants}
          >
            As a MERN Full Stack Developer with a keen eye for front-end
            excellence, I specialize in crafting dynamic and responsive web
            applications. My toolkit includes{" "}
            <span className="text-blue-300 font-medium">Next.js</span>,{" "}
            <span className="text-purple-300 font-medium">React</span>, and{" "}
            <span className="text-green-300 font-medium">TypeScript</span> for
            building robust user interfaces, complemented by{" "}
            <span className="text-red-300 font-medium">Redux</span> for
            efficient state management and{" "}
            <span className="text-indigo-300 font-medium">Tailwind CSS</span>{" "}
            for elegant designs. On the backend, I leverage{" "}
            <span className="text-yellow-300 font-medium">Node.js</span>,{" "}
            <span className="text-orange-300 font-medium">Express</span>, and{" "}
            <span className="text-cyan-300 font-medium">MongoDB</span> with{" "}
            <span className="text-teal-300 font-medium">Mongoose</span>,
            ensuring scalable and secure API solutions, including{" "}
            <span className="text-pink-300 font-medium">JWT</span>
            authentication.
          </motion.p>
        </div>

        <motion.section
          className="flex flex-wrap lg:flex-nowrap items-center gap-5 lg:gap-8 mt-5 lg:mt-6 xl:mt-7"
          variants={itemVariants}
        >
          <a href="https://drive.google.com/uc?export=download&id=1VvI3kxUpt8bto3pNdxnCyRcVJ4xnRROx">
            <motion.button
              className="px-4 lg:px-5 xl:px-6 py-3 md:py-3 lg:py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-xs xl:text-sm shadow-lg shadow-purple-500/40 transition"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              Download Resume
            </motion.button>
          </a>

          <div>
            <motion.h1
              className="font-light text-gray-300 mb-[6px] lg:mb-2 text-left text-sm lg:text-base xl:text-[17px] flex items-center gap-3"
              variants={itemVariants}
            >
              <IoLocationSharp className="text-2xl text-purple-400" />
              Tangail, Dhaka, Bangladesh
            </motion.h1>

            <motion.h1
              className="font-light text-gray-300 text-left text-sm lg:text-base xl:text-[17px] flex items-center gap-3"
              variants={itemVariants}
            >
              <AiOutlineMail className="text-2xl text-purple-400" />
              tanjim.siyam.tech@gmail.com
            </motion.h1>
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
