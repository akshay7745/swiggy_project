import { IMG_LOGO_LINK } from "./constants";
import "../index.css";
import Authentication from "./Authentication";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
export const Title = () => {
  return (
    <div className="logo-wrapper">
      <Link to="/">
        <img className="w-24" src={IMG_LOGO_LINK} alt="food food" />
      </Link>
    </div>
  );
};

export const Header = () => {
  const status = useOnline();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="justify-between flex items-center  shadow-md mb-5 bg-violet-300 fixed top-0 left-0 right-0">
      <Title />
      <div className="pr-12 ">
        <ul className="flex justify-around  w-[700px]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? "text-red-500 font-semibold"
                  : "text-black font-semibold";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive
                  ? "text-red-500 font-semibold"
                  : "text-black font-semibold";
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "text-red-500 font-semibold"
                  : "text-black font-semibold";
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>Cart {cartItems.length} items</li>
          <li>{status ? "🍏 online" : "🍎 offline"}</li>
          <Authentication />
        </ul>
      </div>
    </div>
  );
};
