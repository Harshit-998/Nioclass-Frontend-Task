import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <div className="header-img">
        <img
          src="https://www.nioclass.com/static/media/nioclass.efdaf55818f7b373b89e.png"
          alt=""
        />
        {/* <div className="">
          <p>Home</p>
          <p>Login</p>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
