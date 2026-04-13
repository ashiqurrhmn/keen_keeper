import React from "react";
import { Link, NavLink } from "react-router";
import NavLogo from "../../assets/KeenKeeper.png";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  const links = (
    <>
      <li>
        {" "}
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${isActive ? "text-white border bg-[#244D3F] rounded-lg" : ""}`
          }
        >
          <RiHome2Line />
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            `mx-3 ${isActive ? "text-white border bg-[#244D3F] rounded-lg" : ""}`
          }
        >
          <RiTimeLine />
          Timeline
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to={"/stats"}
          className={({ isActive }) =>
            ` ${isActive ? "text-white border bg-[#244D3F] rounded-lg" : ""}`
          }
        >
            <ImStatsDots />
          Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className=" bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="w-11/12 mx-auto navbar">
        <div className="navbar-start justify-between w-full">
          
          <img src={NavLogo} alt="KeenKeeper Logo" />
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-40 p-2 shadow right-0"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
