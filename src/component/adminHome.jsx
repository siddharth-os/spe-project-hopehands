import { Avatar } from "@mui/material";
import React from "react";
import AdminSideBar from "./adminSidebar";
import AdminSideBarUl from "./adminSideBarUl";
import ListOfOrgan from "./listOfOrgan";
import ListOfUsers from "./listOfUsers";

export default function AdminHome(){
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
                                    <h1 className="card-title">22</h1>
                                    <p className="card-text">Total Number of Organisations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title">43</h1>
                                    <p className="card-text">Total Number of Users.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title">37</h1>
                                    <p className="card-text">Total Number of Posts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" style={{margin:"1rem auto"}}>
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title">26</h1>
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