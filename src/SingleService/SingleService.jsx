import {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import SingleServiceDetail from "./SingleServiceDetail";

const SingleService = () => {
  const [service, setService] = useState(null);
  const {id} = useParams();
  const services = useLoaderData();

  useEffect(() => {
    const findService = services?.find((service) => service.id === id);
    setService(findService);
  }, [id, services]);

  return (
    <div>
      <SingleServiceDetail service={service}></SingleServiceDetail>
    </div>
  );
};

export default SingleService;
