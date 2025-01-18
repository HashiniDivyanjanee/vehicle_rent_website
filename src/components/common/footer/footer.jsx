import React from "react";
import "./footer.css";
import logoImg from "../../images/logo.png";
import { footer } from "../../data/data";
const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src={logoImg} alt="" />
              <h2></h2>
              <p></p>
              <div className="input flex">
                <input type="text" placeholder="Email Address" name="" id="" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>@2025. Design By CodeCraft Innovation.</span>
      </div>
    </>
  );
};

export default Footer;
