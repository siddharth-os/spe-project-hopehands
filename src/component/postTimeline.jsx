import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, url } from "../services/auth";

export default function PostTimeline(props) {
  const {oid,pid,title,detail,date}=props;
  const uid = localStorage.getItem('id');
  const navigate = useNavigate();
  const [isLike,SetIsLike]=useState(false);

  useEffect(()=>{

    const fetchData = async ()=>{
      try {
        const token = getToken();
        const res = await axios.post(url+"/like/user",{pid:pid,uid:uid},{headers:{'Authorization':token}});
        SetIsLike(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[])
  const handleClick = async ()=>{
    const token = getToken();
    const baseUrl = isLike===false?"/like/":"/unlike/";
    const res = await axios.post(url+baseUrl+pid,{},{headers:{'Authorization':token}});
    // navigate("/user/home");
    window.location.reload(true);
  }
  return (
    <div className="row" style={{ display: "flex", justifyContent: "center" }}>
      <div className="col-md-2" style={{}}>
        <img
          className="doctor-img"
          src={require("./images/bg-image1.jpeg")}
          alt="logo"
          style={{ marginBottom: "1rem", height: "100%", width: "100%" }}
        />
      </div>
      <div className="col-md-6" style={{ textAlign: "left" }}>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{detail} ----- Actual Details</p>
        <p> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </p>
        <button className="btn btn-dark" style={{ width: "100%" }} onClick={handleClick}>
          {/* {" "} */}
          <i className="fa-solid fa-heart"></i> Love{isLike===true ? <mytag>d</mytag>:<mytag></mytag>}
        </button>
      </div>
      <hr style={{width:"50%",marginTop:"1rem"}}/>
    </div>
  );
}
