import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, url } from "../services/auth";
import { Link } from "react-router-dom";
export default function ListOfOrgan() {
    const [listOrgs,setListOrgs]=useState([]);
    const navigate = useNavigate("");
    useEffect(()=>{
        const fetchList = async()=>{
            const token = getToken();
            try {
                const res = await (await axios.post(url+"/org/getall",{},{headers:{'Authorization':token}}));
                // console.log(res.data);
                setListOrgs(res.data);
            } catch (error) {
                console.log(error);
                navigate("/");
            }
        }
        fetchList();
    },[])
  return (
    <div className="col-md-10 " style={{ margin: "1rem auto" }}>
      <h2
        style={{
          background: "#fff",
          border: "groove",
          borderRadius: "5px",
          padding: "0.5rem",
        }}
      >
        List Of Organisations
      </h2>
      <div className="" style={{height:"300px",overflow:"auto"}}>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Oid</th>
              <th>Email</th>
              <th>More Info</th>
            </tr>
          </thead>
          <tbody>
            {listOrgs.map((ele,index)=>{
                return(<tr>
                    <td>{index+1}</td>
                    <td>{ele.oid}</td>
                    <td>{ele.email}</td>
                    <td><Link to={`/admin/organisation/${listOrgs[index].oid}`}>More Info</Link></td>
                  </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
