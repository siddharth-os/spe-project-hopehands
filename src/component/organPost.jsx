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
    const {id,title} = useParams();
    const navigate= useNavigate();
    if(!isOrganization()){
        danger();
        navigate("/");
    }
    return(
        <div className="container-fluid">
        <div className="row">
            <OrganSideBar/>
            <div className="col-md-10 bg-light">
                <h2>{title}</h2>
                <InterestList pid={id}/>
            </div>
        </div>
    </div>
    );
}