import {Outlet} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {Toaster} from "react-hot-toast";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Toaster />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
