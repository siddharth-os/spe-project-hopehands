import { Avatar } from "@mui/material";
import React from "react";
import ListOfOrgan from "./listOfOrgan";
import ListOfPost from "./listOfPost";
import ListOfUsers from "./listOfUsers";
import OrganSideBar from "./organSideBar";
import PostTimeline from "./postTimeline";
import UserSideBar from "./UserSideBar";

export default function UserHome() {
    const l =[1,2,2,2,2,2,2,2];
  return (
    <div className="container-fluid">
      <div className="row">
        <UserSideBar />
        <div className="col-md-10 bg-light" style={{height:"680px",overflow:"auto"}}>
            <hr />
            <h1>Post</h1>
            <hr />
            {l.map((ele)=>{
                return(
                    <PostTimeline/>
                )
            })}
        </div>
      </div>
    </div>
  );
}
