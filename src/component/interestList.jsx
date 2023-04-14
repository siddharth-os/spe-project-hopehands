import React from "react";

export default function InterestList() {
  const l = [1, 21, 1, 1, 1, 1, 1, 1, 1, 1, 1];
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
        Interest
      </h2>
      <div className="" style={{ height: "300px", overflow: "auto" }}>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {l.map((ele, index) => {
              return (
                <tr>
                  <td>Siddha</td>
                  <td>9424594245</td>
                  <td>mail@mail.com</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
