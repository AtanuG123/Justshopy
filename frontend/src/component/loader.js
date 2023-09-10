import React from "react";
// import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
     <img style={{width:"100px",marginTop:"200px"}} src={require("./images/loader.gif")} alt="loader"></img>
    </div>
  );
}