import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { danger, getToken, isOrganization, url } from "../services/auth";
import InterestList from "./interestList";
import ListOfOrgan from "./listOfOrgan";
import ListOfPost from "./listOfPost";
import ListOfUsers from "./listOfUsers";
import OrganSideBar from "./organSideBar";

export default function OrganPost(){
    const [users,setUsers]=useState([]);
    const {id} = useParams();
    const navigate= useNavigate();
    useEffect(()=>{
        const fetchData = async()=>{
            const token = getToken();
            try {
                const res = await axios.post(url+"/get/likeduser/"+id,{},{headers:{'Authorization':token}});
                console.log(res.data);
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
    return(
        <div className="container-fluid">
        <div className="row">
            <OrganSideBar/>
            <div className="col-md-10 bg-light">
                <h2>Post Title</h2>
                <InterestList/>
            </div>
        </div>
    </div>
    );
}