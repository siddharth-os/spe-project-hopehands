import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getToken, url } from "../services/auth";
import AdminSideBar from "./adminSidebar";
export default function OrganInfoCard() {
  const {id}=useParams();   
  const [details,setDetails]=useState({});
  const navigate = useNavigate("");
  useEffect(()=>{
    const fetchDetails = async ()=>{
      const token = getToken();
      try {
          const res = await (await axios.post(url+"/get/orgdetail/"+id,{},{headers:{'Authorization':token}}));
          setDetails(res.data);
      } catch (error) {
          console.log(error);
          navigate("/");
      }
    }
    fetchDetails();
  },[]);
  const liStyle={textAlign:"left"}
  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSideBar />
        <div className="col-md-4" style={{margin:"1rem auto"}}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="doctor-img"
              src={require("./images/bg-image1.jpeg")}
              alt="logo"
              style={{ marginBottom: "1rem" }}
            />
            <div className="card-body">
              <h5 className="card-title">Drishti Old Age home</h5>
              <p className="card-text" style={{textAlign:"left"}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <ul>
                <li style={liStyle}>{details.posts} Posts</li>
                <li style={liStyle}>{details.likes} HopeHands</li>
                <li style={liStyle}>0 Successful</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
