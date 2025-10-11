import { NavLink, useNavigate } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { TbMenuDeep } from "react-icons/tb";
import { BiLogInCircle } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { IoArrowRedoOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/authentication/authSlice";
import { toast } from "sonner";
import { motion, type Variants } from "framer-motion";
import DrawerNav from "./DrawerNavbar";

interface AuthState {
  user: {
    name?: string;
    email?: string;
    image?: string;
    role?: string;
  } | null;
}

interface RootState {
  auth: AuthState;
}

const navbarVariants: Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 15, delay: 0.2 },
  },
};

const navLinkVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  hover: { scale: 1.1, color: "#a78bfa", transition: { duration: 0.2 } },
  tap: { scale: 0.9 },
};

const dropdownMenuVariants: Variants = {
  hidden: { opacity: 0, y: -10, scale: 0.95, pointerEvents: "none" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    pointerEvents: "auto",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export default function Navbar() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = (): void => {
    dispatch(logout());
    toast.success("Logged out successfully!");
    navigate("/");
  };

  const navLinks = (
    <>
      <motion.li variants={navLinkVariants}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold gradient-text px-3 py-[3px] rounded"
              : "text-gray-300 transition-colors hover:text-purple-400"
          }
          to="/"
        >
          Home
        </NavLink>
      </motion.li>
      <motion.li variants={navLinkVariants}>
        <a
          href="#projects"
          className="text-gray-300 transition-colors hover:text-purple-400"
        >
          Projects
        </a>
      </motion.li>
      <motion.li variants={navLinkVariants}>
        <a
          href="#skills"
          className="text-gray-300 transition-colors hover:text-purple-400"
        >
          Skills
        </a>
      </motion.li>
      <motion.li variants={navLinkVariants}>
        <a
          href="#about-me"
          className="text-gray-300 transition-colors hover:text-purple-400"
        >
          About Me
        </a>
      </motion.li>
      <motion.li variants={navLinkVariants}>
        <a
          href="#contact-me"
          className="text-gray-300 transition-colors hover:text-purple-400"
        >
          Contact Me
        </a>
      </motion.li>
    </>
  );

  return (
    <motion.div
      className={`navbar max-w-[1400px] mx-auto flex justify-between p-6 md:p-7`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="navbar-start z-50 w-fit">
        <motion.div className="dropdown z-50" variants={iconVariants}>
          <label
            htmlFor="my-drawer"
            className={`lg:hidden text-[22px] md:text-2xl cursor-pointer`}
          >
            <TbMenuDeep className="text-gray-200" />
          </label>
          <DrawerNav />
        </motion.div>
        <motion.div
          className="flex items-center gap-4 pl-4 md:pl-8"
          variants={navLinkVariants}
        >
          <p className="text-[20px] md:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 whitespace-nowrap border-r border-purple-500/80 rounded pr-4">
            Siyam
          </p>
        </motion.div>
      </div>

      <div className="navbar-center hidden lg:flex gap-16 xl:gap-20 px-10">
        <motion.ul
          className="flex items-center gap-6 lg:gap-10 xl:gap-14 menu-horizontal px-1 font-light"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {navLinks}
        </motion.ul>
      </div>

      <div className="flex text-xl md:text-2xl gap-3 md:gap-4 xl:gap-6">
        <motion.a
          href="https://www.linkedin.com/in/tanjimsiddikisiyam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaLinkedinIn />
        </motion.a>
        <motion.a
          href="https://github.com/tanzimsiamm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaGithub />
        </motion.a>

        <motion.div
          className="dropdown dropdown-end flex items-center justify-center gap-2"
          variants={iconVariants}
        >
          {!user && (
            <motion.a
              href="/login"
              className="text-gray-200"
              whileHover="hover"
              whileTap="tap"
            >
              <BiLogInCircle />
            </motion.a>
          )}

          {user && (
            <div className="relative">
              <label
                tabIndex={0}
                className="w-8 md:w-9 rounded-full p-[2px] cursor-pointer"
              >
                <img
                  alt="profile"
                  src={
                    user?.image || "https://i.ibb.co/Ttgtb82/pngwing-com-15.png"
                  }
                  className="size-8 lg:size-8 object-cover rounded-full border border-purple-400 p-[1px]"
                />
              </label>

              <motion.ul
                tabIndex={0}
                className="dropdown-content z-50 p-3 mt-1 shadow-2xl bg-gray-900/90 backdrop-blur-sm rounded-lg w-60 border border-gray-700 absolute right-0"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownMenuVariants}
              >
                {user?.name && (
                  <li className="text-lg p-2 border-b border-gray-700 font-semibold gradient-text flex items-center gap-2">
                    {user.name}
                    <img
                      alt="profile"
                      src={
                        user?.image ||
                        "https://i.ibb.co/Ttgtb82/pngwing-com-15.png"
                      }
                      className="w-8 h-8 object-cover rounded-full border border-gray-500 p-[1px]"
                    />
                  </li>
                )}
                {user?.role === "admin" && (
                  <NavLink to="/dashboard/projects" className="block">
                    <li className="text-base font-medium cursor-pointer transition-all text-gray-300 p-2 rounded hover:text-cyan-400 flex items-center gap-2">
                      <MdDashboardCustomize /> Dashboard
                    </li>
                  </NavLink>
                )}
                <li
                  onClick={logoutUser}
                  className="text-base font-medium cursor-pointer transition-all text-gray-300 p-2 rounded hover:text-cyan-400 flex items-center gap-2"
                >
                  <IoArrowRedoOutline /> Log out
                </li>
              </motion.ul>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
