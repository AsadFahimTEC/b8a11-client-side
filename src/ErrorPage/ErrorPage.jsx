import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="mt-14 flex justify-center items-center h-screen">
        <img src="https://i.ibb.co/CmCZmbL/shutterstock-774749455.jpg" alt="" />
      </div>

      <div className="mt-6 text-center font-bold text-xl">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
