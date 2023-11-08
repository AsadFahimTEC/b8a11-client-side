import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {AuthContext} from "../Hook/AuthProvider";

const AddProduct = () => {
  const [brands, setBrands] = useState(null);

  useEffect(() => {
    fetch("https://b8-a11-server-side.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  const {user} = useContext(AuthContext);

  const navigate = useNavigate();
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;

    const photo = form.photo.value;
    const price = form.price.value;
    const description = form.description.value;
    const servicearea = form.servicearea.value;
    const userEmail = user?.email;
    const userName = user?.DisplayName;

    // new product added in the server side
    const product = {
      name,
      photo,
      price,
      description,
      servicearea,
      userEmail,
      userName,
    };

    // console.log(product);

    fetch("http://b8-a11-server-side.vercel.app/brands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        }
      });
  };

  return (
    <div>
      <div>
        <div className="mt-3 hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleAddProduct} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
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
                    className="input input-bordered text-black"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add Service</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
