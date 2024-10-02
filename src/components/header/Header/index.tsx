import React from "react";
import "../Header/index.scss";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
   
    <header className="py-3 header">
      <div className="container d-flex control header-div">
        <div className="logo me-auto">
          <a className="" href="#">
            <img src="/logo1.png" className="logo"></img>
          </a>
        </div>
        <nav className="nav mx-auto d-flex align-items-center">
           <a className="nav-link  mains " aria-current="page" href="#">
            ABOUT
          </a>
          <a className="nav-link mains" href="#">
            SPEAKERS
          </a>
          <a className="nav-link mains" href="#">
            AGENDA
          </a>
          <a className="nav-link mains" href="#">
            FEATURED EVENTS
          </a> 
          <a className="nav-link mains " href="#">
            EXPERIANCE ADWF
          </a>
        </nav>
        <div className="main d-flex ms-auto align-items-center gap-4">
          <a className="btn btn-outline-primary b1">GET YOUR TICKET</a>
          <CgProfile size={30} color="border: 1.5px solid var(--Secondry, #002646)" />
        </div>
      </div>
        
    </header>
  );
}

export default Header;
