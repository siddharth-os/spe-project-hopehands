import React from "react";

export default function PostTimeline() {
  return (
    <div className="row" style={{ display: "flex", justifyContent: "center" }}>
      <div className="col-md-2" style={{}}>
        <img
          className="doctor-img"
          src={require("./images/bg-image1.jpeg")}
          alt="logo"
          style={{ marginBottom: "1rem", height: "100%", width: "100%" }}
        />
      </div>
      <div className="col-md-6" style={{ textAlign: "left" }}>
        <h3>Title Post</h3>
        <small>13/04/2023</small>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </p>
        <button className="btn btn-dark" style={{ width: "100%" }}>
          {" "}
          <i className="fa-solid fa-heart"></i> Love
        </button>
      </div>
      <hr style={{width:"50%",marginTop:"1rem"}}/>
    </div>
  );
}
