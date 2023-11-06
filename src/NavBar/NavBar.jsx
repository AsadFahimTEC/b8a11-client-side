import {Link, NavLink} from "react-router-dom";
import logo from "../../src/assets/logo2.png";
import {useContext, useState} from "react";
import {AuthContext} from "../Hook/AuthProvider";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // sign out a user
  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-yellow-300 text-blue-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-red-500 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu font-avenir menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-500 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <h6 className="normal-case text-[#000] font-montserrat font-bold text-xl">
          BookStore
        </h6>
        <div className="ml-4">
          <img className="w-14 h-10 sm:w-16 sm:h-10" src={logo} alt="logo" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-avenir menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {user?.displayName ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button className="btn btn-sm  btn-ghost">
                  {user.displayName}
                </button>
              </li>

              <li>
                <div className="relative inline-block">
                  <button
                    className="font-avenir mr-10 px-2 py-1 rounded text-black"
                    onClick={toggleDropdown}>
                    Dashboard
                  </button>
                  {isDropdownOpen && (
                    <div
                      className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
                      onClick={closeDropdown}>
                      <ul className="p-2">
                        <li>
                          <a
                            href="/manageservice"
                            className="block px-4 py-2 text-black">
                            My Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="/addservice"
                            className="block px-4 py-2 text-black">
                            Add Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="/myschedules"
                            className="block px-4 py-2 text-black">
                            My Schedules
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleLogOut}
                  className="font-avenir mt-2 mr-10 px-2 py-1 rounded bg-purple-800 text-white">
                  Log out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="font-avenir mr-10 px-3 py-1 rounded bg-purple-800 text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
