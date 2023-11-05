import {Link} from "react-router-dom";
import logo from "../../src/assets/logo2.png";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center m-10">
        <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
          <h6 className="normal-case text-[#000] font-montserrat font-bold text-xl">
            BookStore
          </h6>
          <div className="ml-4">
            <img className="w-14 h-10 sm:w-16 sm:h-10" src={logo} alt="logo" />
          </div>
          <Link className="hover:text-gray-900" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-900" to="/services">
            Services
          </Link>
          <Link className="hover:text-gray-900" to="/addservice">
            Add Services
          </Link>
          <Link className="hover:text-gray-900" to="/media">
            Media
          </Link>
        </nav>

        <div className="flex justify-center space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
          </a>
          <a
            href="https://messenger.com"
            target="_blank"
            rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </a>
        </div>
        <p className="text-center text-gray-700 font-medium">
          &copy; 2023 BookStore Company Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
