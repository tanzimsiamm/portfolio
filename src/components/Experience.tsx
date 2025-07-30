import CountUp from 'react-countup';
import { motion } from 'framer-motion'; // Import motion

// Define variants for the individual counter items
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
    return (
        // Outer container for the card, providing a subtle border effect with gradient
        <motion.section
            className="bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] rounded-xl md:rounded-2xl w-[87%] xl:max-w-[1250px] mx-auto overflow-hidden shadow-2xl shadow-purple-900/50"
            initial="hidden" // Set initial state for the section
            whileInView="visible" // Animate when the section comes into view
            viewport={{ once: true, amount: 0.5 }} // Trigger animation once when 50% of it is visible
        >
            {/* Inner container with a darker background to create the "card" effect */}
            <div className="flex items-center gap-3 justify-around rounded-xl md:rounded-2xl py-4 lg:py-5 xl:py-6 px-4 md:px-10 bg-gray-900/90 backdrop-blur-sm">
                
                {/* Years Experience */}
                <motion.div
                    className="flex flex-col items-center text-center"
                    variants={itemVariants} // Apply item variants
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 leading-none">
                        <CountUp end={2} duration={2.5} suffix="+" />
                    </h2>
                    <h5 className="hidden md:block text-sm md:text-base lg:text-lg text-gray-400 font-medium mt-1">
                        Years Experience
                    </h5>
                    <h5 className="md:hidden text-sm text-gray-400 font-medium mt-1">
                        Experience
                    </h5>
                </motion.div>

                {/* Projects Completed */}
                <motion.div
                    className="flex flex-col items-center text-center"
                    variants={itemVariants} // Apply item variants
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 leading-none">
                        <CountUp end={25} duration={3} suffix="+" />
                    </h2>
                    <h5 className="text-sm md:text-base lg:text-lg text-gray-400 font-medium mt-1">
                        Projects Completed
                    </h5>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Experience;