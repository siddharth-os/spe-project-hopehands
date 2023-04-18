import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout(){
    const navigate = useNavigate("");
    useEffect(()=>{
        localStorage.clear();
        navigate("/");
    },[])
    return(
        <h1>LoggedOut</h1>
    )
}