import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { danger, getToken, isUser, url } from "../services/auth";
import ListOfOrgan from "./listOfOrgan";
import ListOfPost from "./listOfPost";
import ListOfUsers from "./listOfUsers";
import OrganSideBar from "./organSideBar";
import PostTimeline from "./postTimeline";
import UserSideBar from "./UserSideBar";

export default function UserHome() {
    const l =[1,2,2,2,2,2,2,2];
    const navigate = useNavigate();
    const [postsList,setPostsList]=useState([]);
    const [name,setName]=useState("");
    useEffect(()=>{
        const fetchData = async()=>{
            const token = getToken();
            try {
              const res = await axios.post(url+"/getall/posts",{},{headers:{'Authorization':token}});
              // console.log(res.data);
              setPostsList(res.data);
            } catch (error) {
                console.log(error);
                navigate("/");
            }
        }
        fetchData();
    },[])
  if(!isUser()){
    danger();
    navigate("/");
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <UserSideBar />
        <div className="col-md-10 bg-light" style={{height:"680px",overflow:"auto"}}>
            <hr />
            <h1>Post</h1>
            <hr />
            {postsList.map((ele,index)=>{
                return(
                    <PostTimeline key={index} oid ={ele.oid} pid={ele.pid} title={ele.title} detail={ele.detail} date={ele.postdate}/>
                )
            })}
        </div>
      </div>
    </div>
  );
}
