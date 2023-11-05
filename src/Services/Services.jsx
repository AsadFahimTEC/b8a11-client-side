import {useState} from "react";
import {useLoaderData} from "react-router-dom";
import AllServices from "./AllServices";

const Services = () => {
  const initialServices = useLoaderData();
  const [services, setServices] = useState(initialServices);

  //   console.log(initialServices);

  return (
    <div>
      <div className="py-10 mx-5 md:mx-15 my-5 md:my-15">
        <h2 className="text-center text-white text-6xl font-montserrat">
          Popular Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {services.length === 0 ? (
            <p className="text-center text-red-500">No data found.</p>
          ) : (
            services?.map((service) => (
              <AllServices key={service.service_id} service={service} />
            ))
          )}
        </div>
        <button className="bg-[green] hover:bg-[blue] font-avenir text-[white] rounded px-5 py-2">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Services;
