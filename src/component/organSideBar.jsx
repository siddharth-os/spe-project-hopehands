import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, url } from "../services/auth";
import OrganSideBarUl from "./organSideBarUl";

export default function OrganSideBar(){
    const [name,setName]=useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchData = async()=>{
            const token = getToken();
            console.log(token);
            try {
                const id = localStorage.getItem('id');
                const res = await axios.post(url+"/get/orgdetail/"+id,{},{headers:{'Authorization':token}});
                setName(res.data.orgDetails.email);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[])
    return(
        <div className="col-md-2 sidebar bg-dark text-light">
        <div className="text-center mt-4">
            <div style={{margin:"0.rem auto"}}><Avatar style={{height:"80px",width:"80px",margin:"0.5rem auto"}}>N</Avatar></div>
            <h5 className="mt-3">{name}</h5>
        </div>
        <OrganSideBarUl/>
    </div>
    );
}