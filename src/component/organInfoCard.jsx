import React from "react";
import AdminSideBar from "./adminSidebar";
export default function OrganInfoCard() {
    const liStyle={textAlign:"left"}
  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSideBar />
        <div className="col-md-4" style={{margin:"1rem auto"}}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="doctor-img"
              src={require("./images/bg-image1.jpeg")}
              alt="logo"
              style={{ marginBottom: "1rem" }}
            />
            <div className="card-body">
              <h5 className="card-title">Drishti Old Age Home</h5>
              <p className="card-text" style={{textAlign:"left"}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <ul>
                <li style={liStyle}>2 Posts</li>
                <li style={liStyle}>3 HopeHands</li>
                <li style={liStyle}>1 Successful</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
