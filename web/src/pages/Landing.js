import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../styles/pages/landing.css";

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <h1>Client Registration System</h1>
        <Link to="/person" id="enter-app">
          <FiArrowRight size={30} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
