import {Link} from "react-router-dom";

const ManageServiceDetails = ({service}) => {
  const {_id, description, name, photo, price, servicearea} = service || {};

  return (
    <div className="ml-10 mr-10">
      <div
        className="relative flex w-76 h-76 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        data-aos="zoom-out-down">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={photo} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="mt-2 block text-red-500 text-xl font-bebasneue font-bold leading-normal antialiased p-[2px] mb-2">
              {name}
            </h3>

            <p className="block text-base font-avenir font-bold leading-relaxed text-gray-900 antialiased">
              ${price}
            </p>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <p className="block text-base font-semibold leading-relaxed antialiased">
              {description.length > 150 ? (
                <p>
                  {description.slice(0, 150)}
                  <Link to="/" className="text-yellow-800 font-bold">
                    ...
                  </Link>
                </p>
              ) : (
                <p>{description}</p>
              )}
            </p>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="mt-2 block text-blue-500 text-sm font-bebasneue font-bold leading-normal antialiased p-[2px] mb-2">
              {servicearea}
            </h3>
          </div>
          <div className="flex justify-between items-center">
            <Link to={`/services/${_id}`}>
              <button className="bg-[blue] hover:bg-[green] font-avenir text-[white] rounded px-5 py-2">
                Update
              </button>
            </Link>
            <Link to={`/services/${_id}`}>
              <button className="bg-[green] hover:bg-[red] font-avenir text-[white] rounded px-5 py-2">
                Delete
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServiceDetails;
