import React from "react";

function Footer() {
  return (
    <>
      <div
        className="bg-dark text-white"
        style={{
          textAlign: "center",
          height: "150px",
          marginBottom: "0",
          paddingTop: "20px",
        }}
      >
      <h3><span style={{color: '#e74c3c'}}>S</span>ho<span style={{color: '#e74c3c'}}>p</span>sy
  </h3>
        <p>&copy; Copyright 2021 Space Dynamic Co. All Rights Reserved.</p>
        <i class="fa-brands fa-linkedin" aria-hidden="true"></i>&nbsp;
        <i class="fa-brands fa-instagram" aria-hidden="true"></i>&nbsp;
        <i class="fa-brands fa-twitter" aria-hidden="true"></i>&nbsp;
        <i class="fa-brands fa-youtube"></i>&nbsp;
        <i class="fa-brands fa-facebook"></i>
      </div>
    </>
  );
}
export default Footer;
