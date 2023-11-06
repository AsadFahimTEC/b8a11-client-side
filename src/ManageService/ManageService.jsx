import {useLoaderData} from "react-router-dom";
import ManageServiceDetails from "./ManageServiceDetails";
import {useEffect, useState} from "react";

const ManageService = () => {
  //   const service = useLoaderData();

  const [services, setServices] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services, updated]);

  console.log(services);

  return (
    <div>
      <h2 className="mt-4 text-center text-black text-6xl font-montserrat">
        My Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {services.length === 0 ? (
          <p className="text-center text-red-500">No data found.</p>
        ) : (
          services?.map((service) => (
            <ManageServiceDetails
              setUpdated={setUpdated}
              key={service._id}
              service={service}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ManageService;
