import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, url } from "../services/auth";

export default function InterestList(props) {
  const l = [1, 21, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [users,setUsers]=useState([]);
  const {pid}=props;
  const navigate = useNavigate();
  useEffect(()=>{
      const fetchData = async()=>{
          const token = getToken();
          try {
              const res = await axios.post(url+"/get/likeduser/"+pid,{},{headers:{'Authorization':token}});
              console.log(res.data);
              setUsers(res.data);
          } catch (error) {
              console.log(error);
              navigate("/");
          }
      }
      fetchData();
  },[])
  return (
    <div className="col-md-10 " style={{ margin: "1rem auto" }}>
      <h2
        style={{
          background: "#fff",
          border: "groove",
          borderRadius: "5px",
          padding: "0.5rem",
        }}
      >
        Interest
      </h2>
      <div className="" style={{ height: "300px", overflow: "auto" }}>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Uid</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((ele, index) => {
              return (
                <tr>
                  <td>{index+1}</td>
                  <td>{ele.uid}</td>
                  <td>{ele.email}</td>
                  <td>{ele.mobile}</td>
                  <td>{ele.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
