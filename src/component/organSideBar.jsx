import { Avatar } from "@mui/material";
import React from "react";
import OrganSideBarUl from "./organSideBarUl";

export default function OrganSideBar(){
    return(
        <div className="col-md-2 sidebar bg-dark text-light">
        <div className="text-center mt-4">
            <div style={{margin:"0.rem auto"}}><Avatar style={{height:"80px",width:"80px",margin:"0.5rem auto"}}>N</Avatar></div>
            <h5 className="mt-3">Name</h5>
        </div>
        <OrganSideBarUl/>
    </div>
    );
}