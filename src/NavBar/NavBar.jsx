import {Link} from "react-router-dom";
import logo from "../../src/assets/logo2.png";
import {useContext} from "react";
import {AuthContext} from "../Hook/AuthProvider";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);

  // sign out a user
  const handleLogOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-500 rounded-box w-52">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            {/* <li>
              <Link to="/login">Login</Link>
            </li> */}
          </ul>
        </div>
        <img className="w-25 h-16" src={logo} alt="" />
        <a className="text-xl font-bold hover:text-green-600">BookStore</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          {/* <li>
            <Link to="/login">Login</Link>
          </li> */}
        </ul>
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
                  <button
                    onClick={handleLogOut}
                    className="font-avenir mr-10 px-2 py-1 rounded bg-purple-800 text-white">
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
    </div>
  );
};

export default NavBar;
