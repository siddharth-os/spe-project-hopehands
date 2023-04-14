import React, { useState } from "react";
import AdminSideBar from "./adminSidebar";

export default function OrganisationRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [uid, setUid] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = name + mobile.substring(0, 4);
    const creds = { name, email, mobile, uid, address, password };
    console.log(creds);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSideBar />
        <div
          className="col-md-4"
          style={{ margin: "1rem auto", boxShadow: "5px 5px 5px 5px pink" }}
        >
          <h3
            style={{ color: "white", background: "#555555", padding: "0.5rem" }}
          >
            Add New Organisation
          </h3>
          <form
            style={{ textAlign: "left", padding: "1rem" }}
            onSubmit={handleSubmit}
          >
            <div class="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="unique">Uid:</label>
              <input
                type="text"
                class="form-control"
                id="uid"
                placeholder="Enter Uid"
                value={uid}
                onChange={(e) => {
                  setUid(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="mobile">Mobile:</label>
              <input
                type="text"
                class="form-control"
                id="mobile"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="address">Address:</label>
              <textarea
                class="form-control"
                id="address"
                rows="3"
                placeholder="Enter address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn"
              style={{
                width: "100%",
                marginTop: "1rem",
                background: "#555555",
                color: "white",
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
