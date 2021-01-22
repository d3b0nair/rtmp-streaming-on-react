import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../components/auth/GoogleAuth";

function Header() {
  const homePage = () => (
    <Link to="/" className="item">
      <i className="blue action big react icon"></i>
    </Link>
  );
  const startStreaming = () => (
    <Link to="/streams/new" className="item">
      <button className="ui right labeled icon button primary ">
        <i className="right tv icon"></i>
        Start Streaming
      </button>
    </Link>
  );
  return (
    <div
      className={`ui attached ${
        window.innerWidth < 800 ? "mini" : "massive"
      } menu`}
      style={{ marginBottom: "3vh" }}
    >
      {homePage()}
      <div className="right menu">
        {window.innerWidth > 800 ? startStreaming() : null}
        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header;
