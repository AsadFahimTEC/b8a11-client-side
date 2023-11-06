import {useLoaderData} from "react-router-dom";
import ManageServiceDetails from "./ManageServiceDetails";

const ManageService = () => {
  const service = useLoaderData();
  // console.log(service);

  return (
    <div>
      <h2 className="mt-4 text-center text-black text-6xl font-montserrat">
        My Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {service.length === 0 ? (
          <p className="text-center text-red-500">No data found.</p>
        ) : (
          service?.map((service) => (
            <ManageServiceDetails key={service._id} service={service} />
          ))
        )}
      </div>
    </div>
  );
};

export default ManageService;
