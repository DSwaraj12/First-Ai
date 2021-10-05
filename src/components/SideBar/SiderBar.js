import React, { useState } from "react";
import logo from "../../images/logo.svg";
import Plus from "../../images/plus.png";
import Plug from "../../images/plug.png";
import Promotion from "../../images/promotion.png";
import Setting from "../../images/settings.png";
import Bill from "../../images/bill.png";
import Help from "../../images/help.png";

function SiderBar() {
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
        <div className="sidebar">
                <div className="logoHeading">
                    <div className="image">
                        <img src={logo} alt="logo" />
                    </div>
                    <h4>first.ai</h4>
                </div>
                <div className="nav-container">
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
    )
}

export default SiderBar
