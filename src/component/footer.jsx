import React from "react";

/* Set padding and text alignment for footer */
export default function Footer() {
  return (
    <footer className="footer mt-auto bg-dark" style={{color: "#f8f9fa"}}>
      <div className="container" style={{padding:"10px",textAlign:"center"}}>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
