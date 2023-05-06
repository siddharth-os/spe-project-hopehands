import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { danger, isAdmin, isOrganization, isUser, url } from "../services/auth";
import Logout from "./logout";

export default function UserRegistration() {
    const [name,setName] = useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [address,setAddress]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    useEffect(()=>{
      if(isAdmin() || isUser() || isOrganization()){
        danger();
      }
    },[])
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // const d={name,email,mobile,address,password};
        const res = await axios.post(url+"/user/register",{username:name,password,role:2});
        if(res){
          const id = res.data;
          const res2 = await axios.post(url+"/user/savedetail",{uid:id,name,email,mobile,address});
          if(res2){
            alert("User Added successfully.");
            navigate("/");
          }
          else{
            alert("Error Encountered");
            navigate("/user/registration");
          }
        }
    }
  return (
    <div className="col-md-4" style={{margin:"1rem auto",boxShadow:"5px 5px 5px 5px pink"}}>
      <h3 style={{color:"white",background:"#555555",padding:"0.5rem"}}>User Registration Form</h3>
      <form style={{textAlign:"left",padding:"1rem"}} onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required
          />
        </div>
        <div class="form-group">
          <label for="mobile">Mobile:</label>
          <input
            type="text"
            class="form-control"
            id="mobile"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e)=>{setMobile(e.target.value)}}
            required
          />
        </div>
        <div class="form-group">
          <label for="mobile">Password:</label>
          <input
            type="password"
            class="form-control"
            id="pass"
            placeholder="Set your Password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            required
          />
        </div>
        <div class="form-group">
          <label for="address">Address:</label>
          <textarea
            class="form-control"
            id="address"
            rows="3"
            placeholder="Enter your address"
            value={address}
            onChange={(e)=>{setAddress(e.target.value)}}
            required
          ></textarea>
        </div>
        <button type="submit" class="btn" style={{width:"100%",marginTop:"1rem",background:"#555555",color:"white"}}>
          Register
        </button>
      </form>
    </div>
  );
}
