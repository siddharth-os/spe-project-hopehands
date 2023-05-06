import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import axios from "axios";
import { getToken, isAdmin, isOrganization, isUser, url } from "../services/auth";
export default function Login() {
  const [role, setrole] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword]=  useState("");
  const navigate = useNavigate("");
  
  useEffect(()=>{
    if(isAdmin()){
      navigate("/admin/home");
    }
    else if(isOrganization()){
      navigate("/organisation/home");
    }
    else if(isUser()){
      navigate("/user/home");
    }
  },[])

  const handleChangeSelect = (event) => {
    event.preventDefault();
    setrole(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const data={username:username,password:password,role:role};
    const result = await axios.post(url+"/admin/authenticate",data)
    .catch((error)=>{
      alert("Error Encountered.");
      navigate("/");
    })
    if(result.status===200){
      console.log("successfully loggedIn");
      console.log(result.data);
      localStorage.setItem('jwtToken',result.data.token);
      localStorage.setItem('authRole',role);
      localStorage.setItem('id',result.data.id);
      if(role===0){
        navigate("/admin/home");
      }
      else if(role===1){
        navigate("/organisation/home")
      }
      else{
        navigate("/user/home");
      }
    }
    else{
      console.log("herer");
    }
  }
  return (
    <div
      className="col-12 col-md-4"
      style={{
        margin: "1rem auto",
        boxShadow: "5px 5px 5px 5px #CE5959",
        color: "",
      }}
    >
      <h3 className="dark-custom-color" style={{color:"white",padding:"0.7rem",background:"#555555"}}>Login</h3>
      <div style={{ padding: "1rem" }}>
        <form onSubmit={handleSubmit}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={role}
            label="role"
            onChange={handleChangeSelect}
            required
            fullWidth
          >
            <MenuItem value={0}>Admin</MenuItem>
            <MenuItem value={1}>Organisation</MenuItem>
            <MenuItem value={2}>User</MenuItem>
          </Select>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            style={{ margin: "1rem auto" }}
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            fullWidth
            required
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type={"password"}
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            fullWidth
            required
          />
          <button
            className="btn"
            type="submit"
            style={{
              width: "100%",
              marginTop: "1rem",
              background:"#555555",
              color:"white"
            }}
          >
            Login
          </button>
          <Link to={`/user/registration`}>Register User</Link>
        </form>
      </div>
    </div>
  );
}
