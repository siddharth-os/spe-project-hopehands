import axios from "axios";
import React from "react";
import { getToken, url } from "../services/auth";

export default function PostTimeline(props) {
  const {oid,pid,title,detail,date}=props;
  const handleClick = async (e)=>{
    const token = getToken();
    const res = await axios.post(url+"/like/"+pid,{},{headers:{'Authorization':token}});
    console.log(res.data);
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
          <i className="fa-solid fa-heart"></i> Love
        </button>
      </div>
      <hr style={{width:"50%",marginTop:"1rem"}}/>
    </div>
  );
}
