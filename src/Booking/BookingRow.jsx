

const BookingRow = ({ booking,handleDelete, handleBookingConfirm }) => {
    const {
        service_image,
        service_name,
        service_description,
        service_provider_image,
        service_provider_name,
        service_area,
        service_id,
        service_price,
      } = service || {};
  
   
  
    return (
      <tr>
        <th>
          <button onClick={() =>handleDelete(service_id)} className="btn btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                {service_image && <img src={service_image} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
          </div>
        </td>
        <td>{service_name}</td>
        <td>{ service_provider_name}</td>
        <td>${service_price}</td>
        <th>
         {
          status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
          <button onClick={() => handleBookingConfirm(service_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
         }
        </th>
      </tr>
    );
  };
  
  export default BookingRow;