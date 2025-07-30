import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, type Variants } from 'framer-motion';

const accordionItemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
    hover: {
        scale: 1.01,
        boxShadow: "0px 8px 15px rgba(128, 90, 213, 0.2)",
        transition: { duration: 0.2 }
    }
};

interface AccordionItemProps {
    header: string;
    children: React.ReactNode;
    initialEntered?: boolean;
}

const AccordionItem = ({ header, children, ...rest }: AccordionItemProps) => {
    const getButtonClassNames = ({ isEnter }: { isEnter: boolean }) =>
        `relative flex w-full py-5 md:py-4 lg:py-5 xl:py-6 text-left rounded-lg xl:rounded-xl px-5 lg:px-6 mb-4 text-gray-300 font-medium transition-all duration-200 ease-out
         ${isEnter
            ? 'border border-purple-500/30 bg-gray-800/70 shadow-lg shadow-purple-900/20'
            : 'border border-gray-700 bg-gray-900/80 hover:border-purple-500/50'
        }`;

    return (
        <Item
            {...rest}
            header={({ state: { isEnter } }) => (
                <>
                    <h2 className={`text-base md:text-lg xl:text-xl font-semibold w-[80%] text-gray-200 transition-colors duration-200 ${isEnter ? 'text-purple-300' : ''}`}>
                        {header}
                    </h2>

                    <motion.div
                        className={`absolute border border-purple-500/20 right-5 top-2 p-1 rounded-full text-xl md:text-2xl xl:text-3xl ml-auto transition-transform duration-200 ease-out text-purple-400 flex items-center justify-center`}
                        animate={{ rotate: isEnter ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isEnter ? <FiMinus /> : <FiPlus />}
                    </motion.div>
                </>
            )}
            className=''
            buttonProps={{ className: getButtonClassNames }}
            contentProps={{ className: `text-[15px] lg:text-base xl:text-lg px-5 lg:px-6 text-gray-400 transition-height duration-200 ease-out` }}
            panelProps={{ className: "pb-5 lg:pb-6 xl:pb-7" }}
        >
            {children}
        </Item>
    );
};

export default function AccordionBox() {
    const faqData = [
        {
            header: "What technologies do you work with?",
            content: "I specialize in the MERN stack (MongoDB, Express, React, Node.js). My expertise extends to Next.js, TypeScript, Redux, and Tailwind CSS, enabling me to build modern, responsive, and scalable web applications.",
            initialEntered: false
        },
        {
            header: "What kind of projects have you worked on?",
            content: "I've developed a diverse range of projects, including full-stack e-commerce platforms, interactive dashboards, dynamic content management systems, and highly responsive marketing websites. These projects showcase my ability to handle complex challenges from UI/UX implementation to robust backend development.",
            initialEntered: true
        },
        {
            header: "Why should we consider you for this opportunity?",
            content: "I am a dedicated MERN Full Stack Developer with a strong foundation in modern web technologies and a proven track record of delivering high-quality, scalable applications. I am passionate about crafting exceptional user experiences and am eager to contribute my skills to a dynamic team. I am highly motivated, quick to learn, and committed to exceeding expectations.",
            initialEntered: false
        },
        {
            header: "What makes you a good fit for a frontend developer role?",
            content: "As a frontend-focused MERN developer, I bring a robust skill set in building dynamic and responsive web applications. My proficiency in Next.js, React, and TypeScript allows me to create high-performance, maintainable, and visually appealing user interfaces. I am adept at state management with Redux and building pixel-perfect designs with Tailwind CSS.",
            initialEntered: false
        },
    ];

    return (
        <div className="mx-2 my-4 w-full">
            <Accordion transition transitionTimeout={200}>
                {faqData.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        variants={accordionItemVariants}
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <AccordionItem
                            header={faq.header}
                            initialEntered={faq.initialEntered}
                        >
                            {faq.content}
                        </AccordionItem>
                    </motion.div>
                ))}
            </Accordion>
        </div>
    );
}
