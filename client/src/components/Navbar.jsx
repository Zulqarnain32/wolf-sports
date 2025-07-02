import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../global/AuthContext";
import axios from "axios";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { user } = useContext(AuthContext);
  const [totalItem, setTotalItem] = useState(
    parseInt(localStorage.getItem("totalItem")) || 0
  );
useEffect(() => {
  const updateCart = (e) => {
    setTotalItem(e.detail); // e.detail is the new totalItem
  };

  window.addEventListener("cartUpdated", updateCart);

  return () => {
    window.removeEventListener("cartUpdated", updateCart);
  };
}, []);


  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNav = () => {
    setShowNavbar(false);
  };

  let isAdmin = user?.role === "admin";

  const handleLogout = () => {
    window.localStorage.removeItem("user"); // Remove local user
    window.location.reload();
  };

  useEffect(() => {
    if (showNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showNavbar]);

  return (
    <div className="sticky w-full top-0 h-[70px] flex justify-between items-center px-10 xs:px-5 z-50 bg-gradient-to-r from-[#83ccff] to-[#4290fb] bg-blue-300">
      <div className="flex items-center text-[30px] text-red-500">
        <h4 className="font-extrabold xs:text-[22px]">
          WOLF<span className="text-red-500">SPORTS</span>
        </h4>
      </div>
      <div
        className="block md:hidden cursor-pointer"
        onClick={handleShowNavbar}
      >
        <GiHamburgerMenu className="text-3xl text-white" />
      </div>
      <div
        className={`xs:bg-blue-500 xs:text-white absolute md:static top-[70px] left-0 w-[140px] md:w-auto h-screen md:h-auto transition-all duration-300 ease-in overflow-hidden z-50 md:flex md:items-center md:space-x-4 md:text-[18px] font-bold uppercase tracking-wide ${
          showNavbar ? "left-0" : "left-[-140px]"
        }`}
      >
        <button
          className="absolute top-2 right-2 text-[35px] md:hidden"
          onClick={closeNav}
        >
          <RxCross2 />
        </button>
        <Link
          to="/"
          className="text-white md: block py-4 px-4 border-b md:border-0"
          onClick={closeNav}
        >
          Home
        </Link>
        <Link
          to="/products"
          className="md:text-white  block py-4 px-4 border-b md:border-0"
          onClick={closeNav}
        >
          Products
        </Link>
      
        {isAdmin && (
          <Link
            to="/dashboard"
            className="md:text-white  block py-4 px-4 border-b md:border-0"
            onClick={closeNav}
          >
            DASHBOARD
          </Link>
        )}

        {user && (
          <Link
            className="text-red-500  md:text-red-500 block py-4 px-4 border-b md:border-0 xs:text-sm"
            onClick={closeNav}
          >
            {user.username || user.displayName.split(" ")[0]}
          </Link>
        )}

        <Link
          to="/cart"
          className="xs:fixed xs:top-5 xs:right-[60px] text-white"
          onClick={closeNav}
        >
          <div className="flex">
            <FaShoppingCart className="text-3xl" />
            <span className="mt-[-5px] ml-0.5 bg-red-500 text-white text-[12px]  rounded-full h-[20px] w-5 flex items-center justify-center font-semibold">
              {totalItem}
            </span>
          </div>
        </Link>

        {user?.username || user?.email ? (
          <button
            onClick={handleLogout}
            className="text-white block py-1.5 xs:m-3  px-3  md:border-0 cursor-pointer bg-red-500 "
          >
            LOGOUT
          </button>
        ) : (
          <Link
            to="/login"
            className="text-white block py-1.5 xs:py-4 px-3 border-b md:border-0 bg-red-500"
            onClick={closeNav}
          >
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;