import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { BarLoader } from "react-spinners";

import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
  
    axios.post('http://localhost:5000/api/auth/register', { username,email,password })
    .then((response) => {
      console.log("register ",response )
      const msg = response?.data?.message;
  
      if (msg === "Please fill all the fields") {
        toast.warning(msg);
      } else if (msg === "Email already exists") {
        toast.error(msg);
      } else if (msg === "Registered Successfully") {
        toast.success(msg);
        navigate("/login");
      } else {
        toast.info(msg || "Unexpected response");
      }
    })
    .catch((error) => {
      const message = error?.response?.data?.message || "Something went wrong";
      toast.error(message);
      console.log("registration error is ",error)
    })
    .finally(() =>{
      setLoading(false)
    })
  };
  

  return (
    <div className="flex justify-center items-center h-[calc(100vh-70px)] bg-body">
      <div className="bg-white p-6 w-80 rounded-lg shadow-lg">
        <p className="text-center text-2xl font-extrabold text-text mb-4">TESTSOLUTION</p>
        <form className="flex flex-col" onSubmit={handleSubmit}>

           <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-navbar"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-navbar"
          />
         
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-navbar"
          />

           <input
            type="number"
            placeholder="Whatsapp Number"
            onChange={(e) => setWhatsapp(e.target.value)}
            className="p-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-navbar"
          />

          <button
            type="submit"
            className="bg-text text-white flex justify-center h-10 items-center font-semibold py-2 rounded-md transition duration-200"
          >
            {loading ? <BarLoader color="white" height={4} width={100} /> : "Register"}
          </button>
     

          <hr className="my-4 border-gray-300" />

          <Link
            to="/login"
            className="text-center text-text font-semibold w-3/4 mx-auto transition duration-200"
          >
            Already have an Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Registration;