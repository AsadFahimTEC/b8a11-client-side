import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const ManageServiceDetails = ({service, setUpdated}) => {
  const {_id, description, name, photo, price, servicearea} = service || {};

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("confirmed");
        fetch(`https://b8-a11-server-side.vercel.app/brands/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setUpdated(true);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

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
            <Link to={`/updateproduct/${_id}`}>
              <button className="bg-[blue] hover:bg-[green] font-avenir text-[white] rounded px-5 py-2">
                Update
              </button>
            </Link>

            <button
              onClick={() => handleDeleteProduct(_id)}
              className="bg-[green] hover:bg-[red] font-avenir text-[white] rounded px-5 py-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServiceDetails;
