import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import React from "react";

const DrawerNav: React.FC = () => {
  const closeDrawer = () => {
    const checkbox = document.getElementById('my-drawer') as HTMLInputElement | null;
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={closeDrawer}
          className={({ isActive }) =>
            isActive
              ? "font-bold gradient-text rounded py-2"
              : "text-gray-300 transition-colors hover:text-purple-400 py-2"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about-me"
          onClick={closeDrawer}
          className={({ isActive }) =>
            isActive
              ? "font-bold gradient-text rounded py-2"
              : "text-gray-300 transition-colors hover:text-purple-400 py-2"
          }
        >
          About Me
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/projects"
          onClick={closeDrawer}
          className={({ isActive }) =>
            isActive
              ? "font-bold gradient-text rounded py-2"
              : "text-gray-300 transition-colors hover:text-purple-400 py-2"
          }
        >
          Projects
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact-me"
          onClick={closeDrawer}
          className={({ isActive }) =>
            isActive
              ? "font-bold gradient-text rounded py-2"
              : "text-gray-300 transition-colors hover:text-purple-400 py-2"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="drawer z-40">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={closeDrawer}
          ></label>

          <section className="bg-black/70 backdrop-blur-sm fixed w-full h-full"></section>

          <div
            className={`menu p-4 w-52 md:w-60 min-h-full bg-gray-900/95 border-r border-gray-800 backdrop-blur-sm relative overflow-hidden`}
          >
            <div className="bg-gradient-to-t from-purple-500 to-blue-500 w-1 h-full fixed -right-0.5 top-0 opacity-10">
              {" "}
            </div>

            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay flex justify-end p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
              onClick={closeDrawer}
            >
              <AiOutlineClose size={24} />
            </label>

            <div className="flex items-center gap-2 mt-2 mb-8">
              <h2 className={`text-xl font-bold whitespace-nowrap gradient-text`}>
                Siam
              </h2>
            </div>

            <div className="flex flex-col gap-4 font-light">
              {navLinks}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawerNav;
