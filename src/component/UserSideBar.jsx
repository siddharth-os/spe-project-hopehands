import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, url } from "../services/auth";
import OrganSideBarUl from "./organSideBarUl";
import UserSideBarUl from "./userSideBarUl";

export default function UserSideBar(){
    const [name,setName]=useState("User");
    const navigate = useNavigate();
    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         const token = getToken();
    //         console.log(token);
    //         try {
    //             const id = localStorage.getItem('id');
    //             const res = await axios.post(url+"/get/userdetail/"+id,{},{headers:{'Authorization':token}});
    //             console.log(res.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchData();
    // },[])
    return(
        <div className="col-md-2 sidebar bg-dark text-light">
        <div className="text-center mt-4">
            <div style={{margin:"0.rem auto"}}><Avatar style={{height:"80px",width:"80px",margin:"0.5rem auto"}}>N</Avatar></div>
            <h5 className="mt-3">{name}</h5>
        </div>
        <UserSideBarUl/>
    </div>
    );
}