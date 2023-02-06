import React from "react";
import "../Styles/Home.css";
import Bottega from "../images/lg-tree.svg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="hero-section">
          <div className="header">WHISTLE CODING</div>
          <div className="description">
            <h3> take a look at our amazing coumunity based websites. </h3>
          </div>
        </div>
        <div className="benifits-features-desktop">
          <div className="benifits-section">
            <div className="benifits-image">
              <img src={Bottega} alt="Logo" />
            </div>
            <div className="benifits-description">
              <div className="benifits-header"> Whistle Products</div>
              <ul className="benifits-list">
                <li className="benifit">lebaron galeana</li>
                <li className="benifit"> galeana biz</li>
                <li className="benifit">be part of the community</li>
                <li className="benifit">know whats going on</li>
              </ul>
            </div>
          </div>
          <div className="features-section">
            <div className="features-header">Features</div>
            <div className="features-list">
              <ul>
                <li className="feature">Sign up to Youth of israel online </li>
                <li className="feature">Check prices of dollars and pesos</li>
                <li className="feature"> stat updated with your comunity</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="call-to-action">
          <div className="cta-call-to-action">
            <a
              className="join-us-btn"
              onClick={() =>
                window.open("https://lebarongaleana.com/registration")
              }
            >
              Join
            </a>
            <div>us Now</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
