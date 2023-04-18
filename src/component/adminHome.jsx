import { Avatar } from "@mui/material";
import { getConfig } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { danger, getToken, isAdmin, url } from "../services/auth";
import AdminSideBar from "./adminSidebar";
import AdminSideBarUl from "./adminSideBarUl";
import ListOfOrgan from "./listOfOrgan";
import ListOfUsers from "./listOfUsers";

export default function AdminHome(){
    const [numOrgs,setNumOrgs]=useState("");
    const [listOrgs,setListOrgs]=useState([]);
    const [numUsers,setNumUsers]=useState("");
    const [numsPosts,setNumsPosts]=useState("");
    const [likes,setLikes]=useState("");
    const navigate = useNavigate("");
    useEffect(()=>{
        const fetchList = async()=>{
            const token = getToken();
            try {
                const res = await axios.post(url+"/org/getall",{},{headers:{'Authorization':token}});
                // console.log(res.data);
                setListOrgs(res.data);
                setNumOrgs(res.data.length);
                const res2 = await axios.post(url+"/users/getall",{},{headers:{'Authorization':token}});
                // console.log(res2.data.length);
                setNumUsers(res2.data.length);
                const res3 = await axios.post(url+"/posts/getcount",{},{headers:{'Authorization':token}});
                setNumsPosts(res3.data);
                const res4 = await axios.post(url+"/likes/getcount",{},{headers:{'Authorization':token}});
                setLikes(res4.data);
            } catch (error) {
                console.log(error);
                navigate("/");
            }
        }
        fetchList();
    },[])
    if(!isAdmin()){
        danger();
        console.log("Admin not Authenticated");
        navigate("/");
    }
    else
    return(
        <div className="container-fluid">
        <div className="row">
            <AdminSideBar/>
            <div className="col-md-10 bg-light">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title">{numOrgs}</h1>
                                    <p className="card-text">Total Number of Organisations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title">{numUsers}</h1>
                                    <p className="card-text">Total Number of Users.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title">{numsPosts}</h1>
                                    <p className="card-text">Total Number of Posts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" style={{margin:"1rem auto"}}>
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title">{likes}</h1>
                                    <p className="card-text">Total Number of Interests Shown.</p>
                                </div>
                            </div>
                        </div>
                        <ListOfOrgan/>
                        <ListOfUsers/>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    );
}