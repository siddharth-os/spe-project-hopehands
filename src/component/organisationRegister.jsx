import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { danger, getToken, isAdmin, url } from "../services/auth";
import AdminSideBar from "./adminSidebar";

export default function OrganisationRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [uid, setUid] = useState("");
  const navigate = useNavigate("");
  useEffect(()=>{
    if(!isAdmin()){
      danger();
      navigate("/");
    }
  },[])
  const handleSubmit = async(e) => {
    e.preventDefault();
    const password = "123";
    // const data = {username:name, email, mobile, lic:uid, address, password };
    try {
      const token = getToken();
      const config = {headers:{'Authorization':token}}
      const res = await axios.post(url+'/org/register',{username:name,password,role:1},config);
      if(res){
        const oid = res.data;
        const result = await axios.post(url+"/org/savedetail",{oid,name,email,mobile,address,lic:uid},config);
        alert("Saved Successfully");
        navigate("/admin/home");
      }
    } catch (error) {
      console.log(error);
      navigate("/admin/home");
    }

  };
  if(!isAdmin()){
    danger();
    navigate("/");
  }
  else
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
                required
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
                required
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
                required
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
                required
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
                required
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
