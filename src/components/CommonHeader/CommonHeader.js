import React from 'react'
import NotificationBell from '../../images/bell.png'
import User from '../../images/user.png'
import OnOffBtn from '../../images/on-off-button.png'

function CommonHeader() {
    return (
        <>
            <div className="common-header">
                <div className="right-div">
                    <div className="head-notification">
                        <img src={NotificationBell} height={25} width={25} alt="notification-bell" />
                    </div>
                    <div className="head-user">
                        <img src={User} height={25} width={25} alt="notification-bell" />
                    </div>
                    <div className="head-log-out">Log out</div>
                    <div className="head-button">
                        <img src={OnOffBtn} height={25} width={25} alt="notification-bell" />
                    </div>
                </div>
            </div>
            <div className="notification-bar">
                Hey 👋, we’ve sent you an email to validate your account. This is crucial so that we can keep your data safe and secure. If you don’t find it, you can resend it by clicking here.
            </div>
        </>
    )
}

export default CommonHeader
