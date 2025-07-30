import Container from "./Container";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { useGetBlogsQuery } from "../redux/features/blogs/blogApi";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

interface Blog {
  _id: string;
  title: string;
  image: string;
  time: string;
}

interface BlogsApiResponse {
  success: boolean;
  message: string;
  data: Blog[];
}

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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

const BlogSection = () => {
  const { data, isLoading, isError } =
    useGetBlogsQuery<BlogsApiResponse>(undefined);
  const blogs: Blog[] = data?.data || [];

  if (isLoading) {
    return <div className="text-center text-white py-20">Loading blogs...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-20">
        Failed to load blogs.
      </div>
    );
  }

  return (
    <Container>
      <section className="px-7 md:px-12 lg:px-20 mt-32 xl:mb-16 rounded-xl">
        <motion.h1
          className="text-[34px] lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-16 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          variants={titleVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          LATEST BLOGS
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog._id}
              to={`/blogs/${blog._id}`}
              className="block group"
            >
              <motion.div
                className="bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] rounded-2xl shadow-xl shadow-purple-900/30 overflow-hidden h-full"
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.2 }}
              >
                <section className="bg-gray-900/90 backdrop-blur-sm rounded-2xl h-full flex flex-col">
                  <div className="h-[200px] md:h-[190px] lg:h-[220px] xl:h-[300px] w-full rounded-t-2xl overflow-hidden">
                    <img
                      src={blog?.image}
                      className="w-full h-full rounded-t-2xl object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      alt={blog.title}
                    />
                  </div>

                  <div className="p-5 lg:p-6 xl:p-7 flex-grow flex flex-col justify-between">
                    <h3 className="text-gray-200 font-semibold text-lg lg:text-xl mb-3 leading-tight group-hover:text-purple-300 transition-colors">
                      {blog.title}
                    </h3>
                    <time className="flex items-center gap-2 text-gray-400 font-light text-sm lg:text-base">
                      <PiClockCounterClockwiseBold className="text-xl text-purple-400" />
                      {new Date(blog?.time).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </section>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default BlogSection;
