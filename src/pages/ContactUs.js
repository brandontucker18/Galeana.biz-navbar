import React from "react";
import "../Styles/ContactUs.scss";

export default function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-page">
        <div className="contact-left">
          <div className="left-header">We would love to talk to you if </div>
          <ul className="left-list">
            <li className="left-li"> You have any questions.</li>
            <li className="left-li"> Want to join the community.</li>
            <li className="left-li">Would like us to make you a website.</li>
          </ul>
          <div className="contact-links">
            <a className="contact-link" onClick={() => window.open("")}>
              instagram
            </a>
            <a className="contact-link" onClick={() => window.open("")}>
              facebook
            </a>
            <a className="contact-link" onClick={() => window.open("")}>
              messenger
            </a>
          </div>
        </div>
        <div className="contact-form">
          <div className="contact-for-header">Contact us</div>
          <div className="input-name">
            <input type="text" className="inp-name" placeHolder="name" />
          </div>
          <div className="gmail">
            <input type="text" id="inp-gmail" placeHolder="email" />
          </div>
          <textarea className="input-message" placeHolder="message"></textarea>
          <div className="button-container">
            <button className="btn-send">message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
