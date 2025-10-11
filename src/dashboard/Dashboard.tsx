// import { NavLink, Outlet } from "react-router-dom";
// import { motion, type Variants } from 'framer-motion';
// import React from "react";

// const navBarVariants: Variants = {
//   hidden: { opacity: 0, y: -50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//       staggerChildren: 0.1,
//     },
//   },
// };

// const navLinkItemVariants: Variants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
// };

// const Dashboard: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <motion.ul
//         className="flex flex-wrap items-center justify-center bg-gray-900/90 backdrop-blur-sm max-w-[1400px] mx-auto p-5 rounded-md shadow-lg border border-gray-800 gap-4 sm:gap-5 lg:gap-8"
//         initial="hidden"
//         animate="visible"
//         variants={navBarVariants}
//       >
//         <motion.li variants={navLinkItemVariants}>
//           <NavLink
//             className={({ isActive }) =>
//               isActive
//                 ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 px-3 py-2 rounded transition-all duration-300"
//                 : "font-medium text-gray-300 hover:text-purple-400 px-3 py-2 rounded transition-all duration-300"
//             }
//             to="/dashboard/projects"
//           >
//             Projects
//           </NavLink>
//         </motion.li>

//         <motion.li variants={navLinkItemVariants}>
//           <NavLink
//             className={({ isActive }) =>
//               isActive
//                 ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 px-3 py-2 rounded transition-all duration-300"
//                 : "font-medium text-gray-300 hover:text-purple-400 px-3 py-2 rounded transition-all duration-300"
//             }
//             to="/dashboard/blogs"
//           >
//             Blogs
//           </NavLink>
//         </motion.li>

//         <motion.li variants={navLinkItemVariants}>
//           <NavLink
//             className={({ isActive }) =>
//               isActive
//                 ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 px-3 py-2 rounded transition-all duration-300"
//                 : "font-medium text-gray-300 hover:text-purple-400 px-3 py-2 rounded transition-all duration-300"
//             }
//             to="/dashboard/skills"
//           >
//             Skills
//           </NavLink>
//         </motion.li>
//       </motion.ul>

//       <div className="max-w-[1400px] mx-auto py-8 md:py-12 px-7 md:px-12 lg:px-20">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;