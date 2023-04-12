import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
export default function Login() {
  const [role, setrole] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword]=  useState("");
  const handleChangeSelect = (event) => {
    event.preventDefault();
    setrole(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    const cred = {role,username};
    console.log(cred);
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
          />
          <TextField
            id="outlined-basic"
            label="Password"
            type={"password"}
            variant="outlined"
            value={password}
            onChange={(e)=>{setPassword(e.target.password)}}
            fullWidth
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
