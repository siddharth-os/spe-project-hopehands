import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, url } from "../services/auth";

export default function ListOfUsers() {
    const [listUsers,setListUsers]=useState([]);
    const navigate = useNavigate("");
    useEffect(()=>{
        const fetchList = async()=>{
            const token = getToken();
            try {
                const res = await axios.post(url+"/users/getall",{},{headers:{'Authorization':token}});
                // console.log(res.data);
                setListUsers(res.data);
            } catch (error) {
                console.log(error);
                navigate("/");
            }
        }
        fetchList();
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
        List Of Users
      </h2>
      <div className="" style={{height:"300px",overflow:"auto"}}>
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
            {listUsers.map((ele,index)=>{
                return(<tr>
                    <td>{index+1}</td>
                    <td>{ele.uid}</td>
                    <td>{ele.email}</td>
                    <td>{ele.mobile}</td>
                    <td>{ele.address}</td>
                  </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}