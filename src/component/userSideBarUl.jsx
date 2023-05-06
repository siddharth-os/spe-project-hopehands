import React from "react";

export default function UserSideBarUl() {
  return (
    <ul className="nav flex-column mt-5">
      <li className="nav-item">
        <a className="nav-link text-light" href="/user/home">
        <i className="fa-solid fa-desktop"></i> Timeline
        </a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link text-light" href="#">
        <i className="fa-solid fa-gear"></i> Settings
        </a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link text-light" href="/logout">
        <i className="fa-solid fa-right-from-bracket"></i> Logout
        </a>
      </li>
    </ul>
  );
}
