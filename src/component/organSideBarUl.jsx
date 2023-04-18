import React from "react";

export default function OrganSideBarUl() {
  return (
    <ul className="nav flex-column mt-5">
      <li className="nav-item">
        <a className="nav-link text-light" href="/organisation/home">
        <i class="fa-solid fa-desktop"></i> DashBoard
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="/organisation/add/post">
        <i class="fa-solid fa-plus"></i> Add Post
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">
        <i class="fa-solid fa-gear"></i> Settings
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="/logout">
        <i className="fa-solid fa-right-from-bracket"></i> Logout
        </a>
      </li>
    </ul>
  );
}
