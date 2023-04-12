import { Avatar } from "@mui/material";
import React from "react";
import AdminSideBarUl from "./adminSideBarUl";

export default function AdminSideBar(){
    return(
        <div className="col-md-2 sidebar bg-dark text-light">
        <div className="text-center mt-4">
            <div style={{margin:"0.rem auto"}}><Avatar style={{height:"80px",width:"80px",margin:"0.5rem auto"}}>A</Avatar></div>
            <h5 className="mt-3">Admin</h5>
        </div>
        <AdminSideBarUl/>
    </div>
    );
}