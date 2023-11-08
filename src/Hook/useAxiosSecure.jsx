import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "./UseAuth";

const axiosSecure = axios.create({
baseURL: 'http://b8-a11-server-side.vercel.app',
withCredentials: true
})

const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();
    useEffect(() =>{
    axiosSecure.interceptors.response.use(res =>{
        return res;
    }, error =>{
        console.log('error tracked in the interceptors', error.response);
        if(error.response.status === 401 || error.response.status === 403 ){
            console.log('logout the user');
            logOut()
            .then(() =>{
                navigate('/login')
            })
            .catch(error =>console.log(error))
        }
    })
  
}, [])
    return axiosSecure;
};

export default useAxiosSecure;