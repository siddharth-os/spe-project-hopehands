import axios from "axios";
import React, { useEffect, useState } from "react";
import { getToken, url } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";

export default function ListOfPost() {
  const [posts,setPosts]=useState([]);
  // const l =[1,1,1,1];
  const navigate=useNavigate();
  useEffect(()=>{
    const fetchData = async()=>{
        const token = getToken();
        try {
            const id=localStorage.getItem('id');
            const res = await axios.post(url+"/org/getallposts/"+id,{},{headers:{'Authorization':token}});
            setPosts(res.data);
        } catch (error) {
            console.log(error);
            navigate("/");
        }
    }
    fetchData();
},[]);
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
        List Of Post
      </h2>
      <div className="" style={{ height: "300px", overflow: "auto" }}>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>More Info</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((ele, index) => {
              return (
                <tr>
                  <td>{index+1}</td>
                  <td>{ele.title}</td>
                  <td><Link to={`/organisation/post/${posts[index].pid}`}>More Info</Link></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
