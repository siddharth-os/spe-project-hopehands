import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, url } from "../services/auth";
import OrganSideBar from "./organSideBar";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [detail, setDetail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getToken();
    try {
        const oid = localStorage.getItem('id');
        // const data = {oid,likes:0,title,imageUrl,detail};
        // console.log(data);
        const res = await axios.post(url+"/upload/post",{oid,likes:0,title,url:imageUrl,detail},{headers:{'Authorization':token}});
        console.log(res.data);
        navigate("/organisation/home");
    } catch (error) {
        console.log(error);
        navigate("/");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <OrganSideBar />
        <div
          className="col-md-4"
          style={{ margin: "1rem auto", boxShadow: "5px 5px 5px 5px pink" }}
        >
          <h3
            style={{ color: "white", background: "#555555", padding: "0.5rem" }}
          >
            Add New Post
          </h3>
          <form
            style={{ textAlign: "left", padding: "1rem" }}
            onSubmit={handleSubmit}
          >
            <div class="form-group">
              <label for="name">Title:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="mobile">imageUrl:</label>
              <input
                type="text"
                class="form-control"
                id="mobile"
                placeholder="Enter imageUrl for Poster"
                value={imageUrl}
                onChange={(e) => {
                  setimageUrl(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="address">detail:</label>
              <textarea
                class="form-control"
                id="address"
                rows="3"
                placeholder="Enter More detail"
                value={detail}
                onChange={(e) => {
                  setDetail(e.target.value);
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn"
              style={{
                width: "100%",
                marginTop: "1rem",
                background: "#555555",
                color: "white",
              }}
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
