import React, { useState } from "react";
import logo from "../../images/logo.svg";
import Rectangle from "../../images/Rectangle.png";
import "../../styles/Dashboard.css";
import Plus from "../../images/plus.png";
import Plug from "../../images/plug.png";
import Promotion from "../../images/promotion.png";
import Setting from "../../images/settings.png";
import Bill from "../../images/bill.png";
import Help from "../../images/help.png";
import FB from "../../images/fb.png";
import Google from "../../images/google.png";
import Img1 from "../../images/img1.png";
import Img2 from "../../images/img2.png";
import Img3 from "../../images/img3.png";

const Dashboard = () => {

  return (
    < >
      <div className="main-page">
        <div className="sub-page">
          <div className="connect-Acc">
            <h2>Connect Your Accounts !</h2>
            <span>At least you must connect one Account to continue.</span>
            <div className="social-media">
              <div className="fb">
                <img src={FB} alt="fb" />
                <h5>Account name</h5>
                <div>Account name</div>
                <h5>Account Email</h5>
                <div>Account Email</div>

              </div>
              <div className="google">
                <img src={Google} alt="google" />
                <h5>Account name</h5>
                <div>Account name</div>
                <h5>Account Email</h5>
                <div>Account Email</div>

              </div>
            </div>
          </div>

          <div className="launch-campaign">
            <a href="#">Launch a Smart Campaign!</a>
          </div>

          <div className="info">
            <div className="info1">
              <img src={Img1} alt="image" />
              <h3>Why do you have to connect your ad accounts </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis tempora officia dignissimos, minus voluptatum beatae.
              </p>
            </div>
            <div className="info2">
              <img src={Img2} alt="image" />
              <h3>Why First AI needs to access your advertising data </h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident eligendi doloremque recusandae libero, porro impedit?
              </p>
            </div>
            <div className="info3">
              <img src={Img3} alt="image" />
              <h3>Your advertising data is safe with First AI </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                odio vitae sit recusandae voluptates possimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ >
  );
};

export default Dashboard;
