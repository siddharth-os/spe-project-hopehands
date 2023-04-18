import { Avatar } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { danger, isOrganization } from "../services/auth";
import ListOfOrgan from "./listOfOrgan";
import ListOfPost from "./listOfPost";
import ListOfUsers from "./listOfUsers";
import OrganSideBar from "./organSideBar";

export default function OrganHome(){
    const navigate = useNavigate();
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
                                    <h1 className="card-title">4</h1>
                                    <p className="card-text">Total Number of Post.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title">2</h1>
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