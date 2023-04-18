import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { danger, getToken, isOrganization, url } from "../services/auth";
import ListOfOrgan from "./listOfOrgan";
import ListOfPost from "./listOfPost";
import ListOfUsers from "./listOfUsers";
import OrganSideBar from "./organSideBar";

export default function OrganHome(){
    const navigate = useNavigate();
    const [postNum,setPostNum]=useState("");
    const [likes,setLikes]=useState("");

    useEffect(()=>{
        const fetchData = async()=>{
            const token = getToken();
            try {
                const id = localStorage.getItem('id');
                const res = await axios.post(url+"/get/orgdetail/"+id,{},{headers:{'Authorization':token}});
                // console.log(res.data);
                setPostNum(res.data.posts);
                setLikes(res.data.likes);
            } catch (error) {
                console.log(error);
                navigate("/");
            }
        }
        fetchData();
    },[])
    if(!isOrganization()){
        danger();
        navigate("/");
    }
    else
    return(
        <div className="container-fluid">
        <div className="row">
            <OrganSideBar/>
            <div className="col-md-10 bg-light">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title">{postNum}</h1>
                                    <p className="card-text">Total Number of Post.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title">{likes}</h1>
                                    <p className="card-text">Total Number of Interests.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title">1</h1>
                                    <p className="card-text">Total Number of Success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ListOfPost/>
            </div>
        </div>
    </div>
    );
}