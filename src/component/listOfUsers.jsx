import React from "react";

export default function ListOfUsers() {
    const l=[1,21,1,1,1,1,1,1,1,1,1];
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
        List Of Users
      </h2>
      <div className="" style={{height:"300px",overflow:"auto"}}>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>More Info</th>
            </tr>
          </thead>
          <tbody>
            {l.map((ele,index)=>{
                return(<tr>
                    <td>D11{index+1}</td>
                    <td>Pankaj Mahashaya</td>
                    <td>mail@mail.com</td>
                    <td><a href="#">More Info</a></td>
                  </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}