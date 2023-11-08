import {useEffect, useState} from "react";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const products = useLoaderData();
  const {_id, name, photo, price, description, servicearea} = products;
  console.log(products);
  const navigate = useNavigate();

  const {id} = useParams();

  const [defaultValue, setDefaultValue] = useState(null);

  useEffect(() => {
    fetch(`http://b8-a11-server-side.vercel.app/brands/${id}`)
      .then((res) => res.json())
      .then((data) => setDefaultValue(data[0]));
  }, [id]);

  console.log(defaultValue);

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const description = form.description.value;
    const servicearea = form.servicearea.value;

    console.log(name, photo, price, description, servicearea);

    // new product added in the server side
    const product = {name, photo, price, description, servicearea};
    console.log(product);

    fetch(`https://b8-a11-server-side.vercel.app/brands/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate(`/manageservice`);
        }
      });
  };

  return (
    <div>
      <div className="mt-3 hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateProduct} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  defaultValue={defaultValue?.name}
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={defaultValue?.photo}
                  placeholder="photo"
                  className="input input-bordered text-black"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={defaultValue?.price}
                  placeholder="price"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  defaultValue={defaultValue?.description}
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Area</span>
                </label>
                <input
                  type="text"
                  name="servicearea"
                  placeholder="servicearea"
                  defaultValue={defaultValue?.servicearea}
                  className="input input-bordered text-black"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
