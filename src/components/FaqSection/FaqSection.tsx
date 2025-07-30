import Container from '../Container';
import { motion, type Variants } from 'framer-motion';
import AccordionBox from './AccordianBox';

const titleVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const accordionBoxVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FaqSection = () => {
    return (
        <Container>
            <div className="px-7 md:px-12 lg:px-20 mt-32 md:mt-40 mb-20 md:mb-32">
                <motion.h1
                    className="text-[34px] lg:text-5xl text-center md:text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-16"
                    initial="hidden"
                    whileInView="visible"
                    variants={titleVariants}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    FREQUENTLY ASKED QUESTIONS
                </motion.h1>

                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
                    <motion.div
                        className="w-full md:w-[45%] xl:w-[47%]"
                        initial="hidden"
                        whileInView="visible"
                        variants={accordionBoxVariants}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <AccordionBox />
                    </motion.div>

                    <motion.div
                        className="w-full md:w-[55%] xl:w-[47%] h-full flex justify-center items-center"
                        initial="hidden"
                        whileInView="visible"
                        variants={imageVariants}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <img
                            src="https://i.ibb.co.com/D7bCzyd/Png-Item-2377786-Recovered.png"
                            className="h-[250px] md:h-[350px] lg:h-[400px] xl:h-[450px] w-full object-contain"
                            alt="Person asking questions"
                        />
                    </motion.div>
                </div>
            </div>
        </Container>
    );
};

export default FaqSection;
