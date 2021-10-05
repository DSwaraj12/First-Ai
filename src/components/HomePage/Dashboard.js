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
  const [activeBg, setActiveBg] = useState({
    first: true,
    second: false,
    third: false,
  });

  const handleActiveBgClick = (e) => {
    let val = e.currentTarget.classList.value;
    console.log(val);

    if (val === "first-container") {
      setActiveBg({ first: true, second: false, third: false });
    } else if (val == "second-container") {
      console.log("second");
      setActiveBg({ first: false, second: true, third: false });
    } else if (val === "third-container") {
      setActiveBg({ first: false, second: false, third: true });
    }
    console.log("end");
  };
  return (
    <section className="home">
      {/* ------------ SIDEBAR------------ */}
      {/* <div className="sidebar">
        <div className="logoHeading">
          <div className="image">
            <img src={logo} alt="logo" />
          </div>
          <h4>first.ai</h4>
        </div>

        <div className="container">
          <div
            className={"first-container " + (activeBg.first ? "bg-active" : "")}
            onClick={handleActiveBgClick}
          >
            <div className="first">
              <img src={Plus} alt="first" className="icons" />
              <h4>New Smart Campaign</h4>
            </div>
          </div>
          <div
            className={
              "second-container " + (activeBg.second ? "bg-active" : "")
            }
            onClick={handleActiveBgClick}
          >
            <div className="second">
              <img src={Plug} alt="second" className="icons" />
              <h4>Smart Campaign</h4>
            </div>
          </div>

          <div
            className={"third-container " + (activeBg.third ? "bg-active" : "")}
            onClick={handleActiveBgClick}
          >
            <div className="third">
              <img src={Promotion} alt="third" className="icons" />
              <h4>Compatibility Report</h4>
            </div>
          </div>

          <div className="bottom-icons">
            <div className="bottom-first">
              <img src={Setting} alt="setting" className="icons" />
              <h4>Settings</h4>
            </div>
            <div className="bottom-second">
              <img src={Bill} alt="Bill" className="icons" />
              <h4>Billing</h4>
            </div>
            <div className="bottom-third">
              <img src={Help} alt="Help" className="icons" />
              <h4>Help</h4>
            </div>
          </div>
        </div>
      </div> */}
      {/* ------------ End of SIDEBAR------------ */}

      <div className="main-page">
        {/* <div className="log-out">
          <h3>Log Out</h3>
        </div> */}

        <div className="sub-page">
          <div className="connect-Acc">
            <h2>Connect Your Accounts</h2>
            <h5>At least you must connect one Account to continue.</h5>
            <div className="social-media">
              <div className="fb">
                <img src={FB} alt="fb" />
                <h5>Account name</h5>
                <h5>Account Email</h5>
              </div>
              <div className="google">
                <img src={Google} alt="google" />
                <h5>Account name</h5>
                <h5>Account Email</h5>
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
    </section>
  );
};

export default Dashboard;
