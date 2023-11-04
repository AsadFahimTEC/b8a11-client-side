import {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import ServiceDetails from "./ServiceDetails";

const Service = () => {
  const [service, setService] = useState(null);
  const {id} = useParams();
  const services = useLoaderData();

  useEffect(() => {
    const findService = services?.find((service) => service.id === id);
    setService(findService);
  }, [id, services]);

  return (
    <div>
      <ServiceDetails service={service}></ServiceDetails>
    </div>
  );
};

export default Service;
