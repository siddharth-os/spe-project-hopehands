import React from "react";

export default function NavbarBoot() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{padding:"1rem"}}>
      <a className="navbar-brand" href="#" style={{fontSize:"2rem",fontFamily: "'Rubik Vinyl', cursive",fontFamily: "'Tilt Prism', cursive",color:"white"}}>
      <i class="fa-solid fa-hand-holding-heart"></i>  HopeHands
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" style={{paddingLeft:"2rem"}}>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#" style={{color:"#F3E8FF",fontSize:"1.1rem"}}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:"#F3E8FF",fontSize:"1.1rem"}}>
              Features
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
