import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-logo">Whistle Coding</div>
      <div className="Footer-links">
        <div className="link-websites">
          <Link className="link" to="https://lebarongaleana.com/app">
            Lebaron Galeana
          </Link>
          <Link className="link" to="">
            Whistle Construction
          </Link>
        </div>
        <div className="link-contact">
          <Link className="link" to="">
            gmail
          </Link>
          <Link className="link" to="">
            instagram
          </Link>
        </div>
      </div>
    </div>
  );
}
