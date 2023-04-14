import { Avatar } from "@mui/material";
import React from "react";
import InterestList from "./interestList";
import ListOfOrgan from "./listOfOrgan";
import ListOfPost from "./listOfPost";
import ListOfUsers from "./listOfUsers";
import OrganSideBar from "./organSideBar";

export default function OrganPost(){
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