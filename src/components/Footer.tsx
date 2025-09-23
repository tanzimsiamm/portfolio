import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { motion, type Variants } from 'framer-motion';

const footerSectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const columnItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const socialIconVariants: Variants = {
  hover: { scale: 1.2, color: "#a78bfa", transition: { duration: 0.2 } },
  tap: { scale: 0.9 },
};

const linkVariants: Variants = {
  hover: { x: 5, color: "#a78bfa", transition: { duration: 0.2 } },
};

const newsletterButtonVariants: Variants = {
  hover: { scale: 1.1, color: "#a78bfa", transition: { duration: 0.2 } },
  tap: { scale: 0.9 },
};

export default function Footer() {
  return (
    <div className="pt-8 mt-10 lg:mt-20 xl:mt-28 bg-gray-950">
      <motion.section
        className="max-w-[1400px] border-t border-purple-500/30 mx-auto px-7 md:px-12 lg:px-20 grid grid-cols-12 gap-8 py-8 md:py-12"
        initial="hidden"
        whileInView="visible"
        variants={footerSectionVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="space-y-5 col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-4" variants={columnItemVariants}>
          <div className="flex items-center gap-1">
            <h2 className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-2xl lg:text-3xl xl:text-4xl whitespace-nowrap`}>
              Siam
            </h2>
          </div>
          <p className="text-gray-400 text-[15px] font-light">
            MERN Full Stack Developer
            <br /> Dhaka Division, Bangladesh
          </p>
          <div className="flex gap-4 text-gray-300 text-xl">
            <motion.a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="rounded-full" variants={socialIconVariants} whileHover="hover" whileTap="tap">
              <FaFacebookF />
            </motion.a>
            <motion.a href="https://github.com/tanzimsiamm" target="_blank" rel="noopener noreferrer" className="rounded-full" variants={socialIconVariants} whileHover="hover" whileTap="tap">
              <AiOutlineGithub />
            </motion.a>
            <motion.a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="rounded-full" variants={socialIconVariants} whileHover="hover" whileTap="tap">
              <FaXTwitter />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/tanjimsiddikisiyam" target="_blank" rel="noopener noreferrer" className="rounded-full" variants={socialIconVariants} whileHover="hover" whileTap="tap">
              <FaLinkedinIn />
            </motion.a>
            <motion.a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer" className="rounded-full" variants={socialIconVariants} whileHover="hover" whileTap="tap">
              <FaPinterestP />
            </motion.a>
          </div>
        </motion.div>

        <motion.div className="col-span-5 md:col-span-3 lg:col-span-2 xl:col-span-2" variants={columnItemVariants}>
          <h2 className="text-gray-300 font-semibold text-xl mb-5">Services</h2>
          <div className="flex flex-col gap-3 text-gray-400 font-light">
            <motion.span className="transition cursor-pointer" variants={linkVariants} whileHover="hover">UI / UX Implementation</motion.span>
            <motion.span className="transition cursor-pointer" variants={linkVariants} whileHover="hover">Responsive Web Design</motion.span>
            <motion.span className="transition cursor-pointer" variants={linkVariants} whileHover="hover">Frontend Development</motion.span>
            <motion.span className="transition cursor-pointer" variants={linkVariants} whileHover="hover">API Integration & Backend</motion.span>
          </div>
        </motion.div>

        <motion.div className="col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-2" variants={columnItemVariants}>
          <h2 className="text-gray-300 font-semibold text-xl mb-5">Contact</h2>
          <div className="flex flex-col gap-2 text-gray-400 font-light">
            <span className="transition">+880 1614131676</span>
            <span className="transition">siam88536@example.com</span>
            <span className="transition">Tangail, Bangladesh</span>
          </div>
        </motion.div>

        <motion.div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-4" variants={columnItemVariants}>
          <h2 className="font-semibold text-xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Stay Updated
          </h2>
          <div className="flex items-center relative">
            <input
              type="email"
              className="px-4 w-full py-3 outline-none rounded-md text-sm xl:text-base text-gray-300 bg-gray-800/70 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 pr-12"
              placeholder="Your Email Address"
              name='newsletter_email'
            />
            <motion.button
              className="absolute right-3 text-3xl text-purple-400"
              variants={newsletterButtonVariants}
              whileHover="hover"
              whileTap="tap"
              type="submit"
            >
              <MdOutlineDoubleArrow />
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-800 mt-8">
        <p>&copy; {new Date().getFullYear()} Siam. All rights reserved.</p>
      </div>
    </div>
  );
}
