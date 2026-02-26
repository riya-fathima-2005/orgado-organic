import React from "react";
import "./style/Footer.css";
import logoname from "../assets/Img/logo.webp";

function Footer() {
  return (
    <footer className="margintop">
      {/* Logo */}
      <div>
        <img className="loconame" src={logoname} alt="logo" />
      </div>

      {/* Footer links */}
      <div className="footerflex">
        <div className="footerprop">ABOUT OUR COMPANY</div>
        <div className="footerprop">LATEST PRODUCT</div>
        <div className="footerprop">PAYMENT TYPE</div>
        <div className="footerprop">AWARD WINNINGS</div>
        <div className="footerprop">WORLD MEDIA PARTNERS</div>
        <div className="footerprop">FLASH OFFERS</div>
      </div>

      {/* Social Icons */}
      <div className="locols">
        {/* Facebook */}
        <svg
          className="grey"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
        </svg>

        {/* Twitter */}
        <svg
          className="grey"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429A3.29 3.29 0 0 0 1.018 7.01 3.3 3.3 0 0 1 .64 6.575a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58 9.34 9.34 0 0 0 5.026 15" />
        </svg>

        {/* LinkedIn */}
        <svg
          className="grey"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zM3.743 5.182c.837 0 1.358-.554 1.358-1.248 0-.709-.52-1.248-1.342-1.248-.821 0-1.359.539-1.359 1.248 0 .694.521 1.248 1.343 1.248zM13.458 13.394V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193V6.169h-2.4v7.225h2.4V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401z" />
        </svg>

        {/* Instagram */}
        <svg
          className="grey"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0z" />
        </svg>
      </div>

      {/* Copyright */}
      <div className="smallsize">
        All rights reserved © 2023 BDevs
      </div>
    </footer>
  );
}

export default Footer;
