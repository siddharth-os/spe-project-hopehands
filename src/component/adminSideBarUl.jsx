import React from "react";

export default function AdminSideBarUl() {
  return (
    <ul className="nav flex-column mt-5">
      <li className="nav-item">
        <a className="nav-link text-light" href="/admin/home">
        <i className="fa-solid fa-desktop"></i> DashBoard
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="/admin/organisation/register">
        <i className="fa-solid fa-plus"></i> Add Organisation
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">
        <i className="fa-solid fa-gear"></i> Settings
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
