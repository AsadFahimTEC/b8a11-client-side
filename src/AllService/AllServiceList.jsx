import {Link} from "react-router-dom";

const AllServiceList = ({service}) => {
  
 
  const {
    service_image,
    service_name,
    service_description,
    service_provider_image,
    service_provider_name,
    service_id,
    service_price,
  } = service || {};

  return (
    <div>
      <div
        className="relative flex w-76 h-76 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        data-aos="zoom-out-down">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={service_image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="mt-2 block text-red-500 text-xl font-bebasneue font-bold leading-normal antialiased p-[2px] mb-2">
              {service_name}
            </h3>

            <p className="block text-base font-avenir font-bold leading-relaxed text-gray-900 antialiased">
              {service_price}
            </p>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <p className="block text-base font-semibold leading-relaxed antialiased">
              {service_description.length > 150 ? (
                <p>
                  {service_description.slice(0, 150)}
                  <Link to="/" className="text-yellow-800 font-bold">
                    ...
                  </Link>
                </p>
              ) : (
                <p>{service_description}</p>
              )}
            </p>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="mt-2 block text-blue-500 text-xl font-bebasneue font-bold leading-normal antialiased p-[2px] mb-2">
              {service_provider_name}
            </h3>

            <img src={service_provider_image} className="w-35 h-16 rounded" />
          </div>
          <div>
            <Link to={`/services/${service_id}`}>
              <button className="bg-[red] hover:bg-[green] font-avenir text-[white] rounded px-5 py-2">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServiceList;
