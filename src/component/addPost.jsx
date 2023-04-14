import React, { useState } from "react";
import OrganSideBar from "./organSideBar";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, url, details };
    console.log(data);
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
              <label for="mobile">Url:</label>
              <input
                type="text"
                class="form-control"
                id="mobile"
                placeholder="Enter Url for Poster"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
            </div>
            <div class="form-group">
              <label for="address">Details:</label>
              <textarea
                class="form-control"
                id="address"
                rows="3"
                placeholder="Enter More Details"
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
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
