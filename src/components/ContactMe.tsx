import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "sonner";
import Container from "./Container";
import { ImLocation2 } from "react-icons/im";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { motion, type Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const contactInfoItemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.03, x: 5, transition: { duration: 0.2 } },
};

const formInputVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const buttonVariants: Variants = {
  hover: { scale: 1.05, boxShadow: "0px 10px 15px rgba(128, 90, 213, 0.4)" },
  tap: { scale: 0.95 },
};

export default function ContactMe() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const userName = (
      e.currentTarget.elements.namedItem("user_name") as HTMLInputElement
    )?.value;
    const userEmail = (
      e.currentTarget.elements.namedItem("user_email") as HTMLInputElement
    )?.value;
    const phone = (
      e.currentTarget.elements.namedItem("phone") as HTMLInputElement
    )?.value;
    const message = (
      e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement
    )?.value;

    if (userName && userEmail && phone && message) {
      if (form.current) {
        emailjs
          .sendForm(
            "service_i9rfsjq",
            "template_7c10k5a",
            form.current,
            "obvgqwmlKnS271e1n"
          )
          .then(
            () => {
              toast.success("Message sent successfully!");
              setLoading(false);
              form.current?.reset();
            },
            (error) => {
              console.error("EmailJS Error:", error.text);
              toast.error("Failed to send message. Please try again.");
              setLoading(false);
            }
          );
      } else {
        toast.error("Form reference not found.");
        setLoading(false);
      }
    } else {
      toast.error("Please fill out all fields.");
      setLoading(false);
    }
  };

  return (
    <Container>
      <motion.section
        className="h-[850px] md:h-[500px] lg:h-[560px] xl:h-[600px] bg-auto md:bg-cover mt-[120px] md:mt-36 xl:mt-40 px-7 md:px-12 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        <section className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          <motion.div
            className="flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-8 flex-1 font-light"
            variants={sectionVariants}
          >
            <motion.section className="mb-5" variants={contactInfoItemVariants}>
              <h1 className="text-[34px] lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 lg:mb-2 text-center md:text-left">
                Contact Me
              </h1>
              <p className="text-gray-400/90 text-center md:text-left p-1 md:pr-8 text-sm lg:text-base lg:max-w-sm xl:max-w-md">
                If you would like to work with me or just want to get in touch,
                I'd love to hear from you!
              </p>
            </motion.section>

            <motion.div
              className="flex items-center gap-4 group"
              variants={contactInfoItemVariants}
              whileHover="hover"
            >
              <h4 className="text-purple-400 text-2xl">
                <ImLocation2 />
              </h4>
              <p className="text-gray-300 text-sm lg:text-base xl:text-lg transition-colors group-hover:text-purple-300">
                Tangail, Bangladesh
              </p>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 group"
              variants={contactInfoItemVariants}
              whileHover="hover"
            >
              <h4 className="text-purple-400 text-2xl">
                <IoCallOutline />
              </h4>
              <p className="text-gray-300 text-sm lg:text-base xl:text-lg transition-colors group-hover:text-purple-300">
                +880 1614031676
              </p>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 group"
              variants={contactInfoItemVariants}
              whileHover="hover"
            >
              <h4 className="text-purple-400 text-2xl">
                <AiOutlineMail />
              </h4>
              <p className="text-gray-300 text-sm lg:text-base xl:text-lg transition-colors group-hover:text-purple-300">
                siam88536@gmail.com
              </p>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 group"
              variants={contactInfoItemVariants}
              whileHover="hover"
            >
              <h4 className="text-purple-400 text-2xl">
                <FaLinkedinIn />
              </h4>
              <a
                href="https://www.linkedin.com/in/tanjimsiddikisiyam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-sm lg:text-base xl:text-lg transition-colors group-hover:text-purple-300"
              >
                linkedin.com/in/tanjimsiddikisiyam
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 mt-8 md:mt-0"
            variants={sectionVariants}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col opacity-90 gap-5 font-light"
            >
              <motion.input
                type="text"
                className="p-4 outline-none rounded-lg text-sm xl:text-base text-gray-300 bg-gray-800/70 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                placeholder="Your Name"
                name="user_name"
                variants={formInputVariants}
              />
              <motion.input
                type="email"
                className="p-[18px] outline-none rounded-lg text-sm xl:text-base text-gray-300 bg-gray-800/70 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                placeholder="Email Address"
                name="user_email"
                variants={formInputVariants}
              />
              <motion.input
                type="tel"
                className="p-[18px] outline-none rounded-lg text-sm xl:text-base text-gray-300 bg-gray-800/70 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                placeholder="Phone Number"
                name="phone"
                variants={formInputVariants}
              />
              <motion.textarea
                className="p-4 outline-none rounded-lg text-sm xl:text-base text-gray-300 bg-gray-800/70 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                rows={7}
                placeholder="Message"
                name="message"
                variants={formInputVariants}
              />
              <div className="flex justify-end items-center mt-6">
                <motion.button
                  type="submit"
                  className="px-4 lg:px-5 xl:px-6 py-3 md:py-3 lg:py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-xs xl:text-sm shadow-lg shadow-purple-500/40"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                  disabled={loading}
                >
                  {loading ? "SENDING..." : "SEND MESSAGE"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </section>
      </motion.section>
    </Container>
  );
}
