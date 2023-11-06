import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

import toast from "react-hot-toast";
import { AuthContext } from "../Hook/AuthProvider";


const BookService = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData();
  const {  service_image,
    service_name,
    service_description,
    service_provider_image,
    service_provider_name,
    service_area,
    service_id,
    service_price, } = service;

 const handleBookService = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;

    const photo = form.photo.value;
    const price = form.price.value;
    const description = form.description.value;
    const servicearea = form.servicearea.value;
    const userEmail = user?.email;
    const userName = user?.DisplayName;
    const booking = {
    customerName: name,
    usersName: userName,
    userEmail,
    photo,
    price,
    service_description: description,
    service_area: servicearea,
    Price: price
  }
  console.log(booking);
  fetch('http://localhost:5000/bookings', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(booking)
  })
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    if(data.insertedId){
        toast.success('Service Book Successfully!')
    }
  })
 }

    return (
        <div>
      <h2>Book Service: {name} </h2>

        <form onSubmit={handleBookService} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name" name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text" name="des"
              placeholder="des"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email" name="email" defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Area</span>
            </label>
            <input
              type="text" name="due" defaultValue={service_area}
              placeholder="due amount"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-block btn-primary"
              type="submit"
              value="Order Confirm"
            />
          </div>
            </div>
        </form>
      </div>
    );
};

export default BookService;