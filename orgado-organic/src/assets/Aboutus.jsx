import React from "react";
import "../assets/style/Aboutus.css";

function Aboutus() {
  return (
    <div className="display ">
      <div className="Aboutus">
        <div style={{ marginLeft: "50px" }}>About Us</div>
        <div>My Account</div>
      </div>
      <div className="display1">
        <div>
          <select className="selectiontool">
            <option className="selection">English</option>
            <option className="selection">Hindi</option>
            <option className="selection">Arabic</option>
            <option className="selection">Bengali</option>
            <option className="selection">French</option>
          </select>
        </div>

        <div>
          <select  className="selectiontool">
            <option className="selection">USD</option>
            <option className="selection">EUR</option>
            <option className="selection">JPY</option>
            <option className="selection">GBP</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
