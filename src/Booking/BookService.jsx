import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Create a component to display service details
const ServiceDetail = ({ service, onStatusChange }) => (
  <tr key={service.id}>
    <td>{service.service_name}</td>
    <img className="ml-3 w-25 h-10" src={service.service_image} alt="" />
    <td>{service.service_description}</td>
    <td>{service.service_area}</td>
    <td>{service.service_price}</td>
    <td>
      <select
        value={service.status}
        onChange={(e) => onStatusChange(service.service_id, e.target.value)}
      >
        <option className="bg-white text-red-700" value="Pending">Pending</option>
        <option className="bg-white text-blue-700" value="In Progress">In Progress</option>
        <option className="bg-white text-green-800" value="Completed">Completed</option>
      </select>
    </td>
    {/* Add more columns for additional details */}
  </tr>
);

const BookService = () => {
  const { id } = useParams();
  const [bookedServices, setBookedServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookedServices = async () => {
      try {
        const response = await fetch("http://localhost:5000/bookings");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setBookedServices(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching booked services:", error);
        setLoading(false);
      }
    };

    fetchBookedServices();
  }, [id]);

  // Function to handle status change
  const handleStatusChange = (id, newStatus) => {
    const updatedServices = bookedServices.map((service) => {
      if (service.id === id) {
        return { ...service, status: newStatus };
      }
      return service;
    });

    setBookedServices(updatedServices);
    // You can also make an API call to update the status in the backend here
  };

  return (
    <div className="mt-6">
      <h2 className="text-center font-bold font-sans text-3xl">Booked Services</h2>

      {loading ? (
        <p>Loading booked services...</p>
      ) : bookedServices.length > 0 ? (
        <table className="table w-full">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Service Image</th>
              <th>Description</th>
              <th>Service Area</th>
              <th>Price</th>
              <th>Status</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {bookedServices.map((service) => (
              <ServiceDetail
                service={service}
                onStatusChange={handleStatusChange}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No booked services found.</p>
      )}

      {/* Add more services dynamically */}
      <h2 className="text-center font-bold font-sans text-xl mt-6">Other Services</h2>
      {/* Render more services here using the ServiceDetail component */}
    </div>
  );
};

export default BookService;
