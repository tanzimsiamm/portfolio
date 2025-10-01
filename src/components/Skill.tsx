import { useGetSkillsQuery } from '../redux/features/skills/skillApi';
import Container from './Container';
import { motion, type Variants } from 'framer-motion';

interface SkillItem {
  name: string;
  logo: string;
  transition?: string;
}

interface SkillsApiResponse {
  success: boolean;
  message: string;
  data: SkillItem[];
}

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const skillItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.08,
    y: -5,
    transition: { duration: 0.2 },
  },
};

const Skill = () => {
  const { data, isLoading, isError } = useGetSkillsQuery<SkillsApiResponse>(undefined);
  // console.log('first data:', data);
  const skills: SkillItem[] = data?.data || [];

  if (isLoading) {
    return <div className="text-center text-white py-20">Loading skills...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500 py-20">Failed to load skills.</div>;
  }

  return (
    <Container>
      <section
        id="skills"
        className="px-7 md:px-12 lg:px-20 lg:my-7 xl:my-16"
      >
        <motion.h1
          className="text-[34px] md:text-4xl lg:text-5xl pb-14 text-center md:text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3"
          initial="hidden"
          whileInView="visible"
          variants={titleVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          Skills
        </motion.h1>

        <motion.section
          className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-y-14 gap-x-3 mt-6"
          initial="hidden"
          whileInView="visible"
          variants={gridContainerVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between items-center gap-4 group"
              variants={skillItemVariants}
              whileHover="hover"
            >
              <img
                src={skill.logo}
                className="w-14 md:w-14 lg:w-16 xl:w-20 mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2"
                alt={`${skill.name} logo`}
              />
              <p className="text-gray-300 text-sm md:text-base xl:text-lg text-center uppercase font-medium">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.section>
      </section>
    </Container>
  );
};

export default Skill;
