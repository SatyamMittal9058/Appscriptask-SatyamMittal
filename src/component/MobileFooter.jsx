import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import socialmedia from '../Assets/FooterLogo/Frame 28.png';
import gpay from '../Assets/FooterLogo/Group 136188.png';
import mastercard from '../Assets/FooterLogo/Group 136190.png';
import paypal from '../Assets/FooterLogo/Group 136192.png';
import amex from '../Assets/FooterLogo/Group 136193.png';
import apay from '../Assets/FooterLogo/Group 136194.png';
import pay from '../Assets/FooterLogo/Group 136195.png';
import mobilefooter from './mobilefooter.module.css';
const MobileFooter = () => {
    
    const [showMetta, setShowMetta] = useState(false);
    const [showQuickLinks, setShowQuickLinks] = useState(false);
    const [showFollow, setShowFollow] = useState(false);
    return (
        <div className={mobilefooter.mobilefootercontainer}>
            <div className={mobilefooter.mobilefootercontainerdiv}>
                <h1 className={mobilefooter.mobilefootercontainerh1}>BE THE FIRST TO KNOW</h1>
                <h1 className={mobilefooter.mobilefootercontainerh1}>Sign up for update from metta muse</h1>
                <span>
                    <input className={mobilefooter.mobilefootercontainerinput} type="text" placeholder="Enter your Email" />
                    <button className={mobilefooter.mobilefootercontainerbutton}>Subcribe</button>
                </span>
            </div>
            <div>
                <div className={mobilefooter.callus}>
                    <h1 className={mobilefooter.callush1}>CALL US</h1>
                    <div className={mobilefooter.callusdiv}>
                        <h2>+1154517784</h2>
                        <h2>customercare@mettamuse.com</h2>
                    </div>
                </div>
                <div className={mobilefooter.currency}>
                    <h1 className={mobilefooter.currencyh1}>CURRENCY</h1>
                    <h2 className={mobilefooter.currencyh2}>+USD</h2>
                </div>
                <div className={mobilefooter.metta}>
                    <div className={mobilefooter.mettadiv}>
                        <span className={mobilefooter.mettaspan}>metta musse</span>
                        <span onClick={() => setShowMetta(!showMetta)}>
                            {showMetta ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                        </span>
                    </div>
                    {showMetta &&
                        <>
                            <h1 >About Us</h1>
                            <h1 >Stories</h1>
                            <h1 >Artisans</h1>
                            <h1 >Boutiques</h1>
                            <h1 >Contact Us</h1>
                            <h1 >EU Compliances Docs</h1>
                        </>
                    }
                </div>
                <div className={mobilefooter.quicklinks}>
                    <div className={mobilefooter.quicklinksdiv}>
                        <span className={mobilefooter.quicklinkspan}>QuickLinks</span>
                        <span onClick={() => setShowQuickLinks(!showQuickLinks)}>
                            {showQuickLinks ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                        </span>
                    </div>
                    {showQuickLinks &&
                        <>
                            <h1>Terms and Conditions</h1>
                            <h1>Order& Shipping</h1>
                            <h1>Join/Login as Seller</h1>
                            <h1>Payment & Pricing</h1>
                            <h1>Return & Refunds</h1>
                            <h1>FAQs</h1>
                            <h1>Privacy Policy</h1>
                        </>
                    }
                </div>
                <div className={mobilefooter.follow}>
                    <div className={mobilefooter.followdiv}>
                        <span className={mobilefooter.followspan}>FollowUs</span>
                        <span onClick={() => setShowFollow(!showFollow)}>
                            {showFollow ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                        </span>
                    </div>
                    {showFollow &&
                        <>
                            <img alt="" src={socialmedia}></img>
                        </>
                    }
                </div>
                    <h1 className={mobilefooter.payment}>metta muse ACCEPTS</h1>
                    <span className={mobilefooter.paymentspan}>
                        <img alt="" src={gpay}></img>
                        <img alt="" src={mastercard}></img>
                        <img alt="" src={paypal}></img>
                        <img alt="" src={amex}></img>
                        <img alt="" src={apay}></img>
                        <img alt="" src={pay}></img>
                    </span>
                    <h1>Copyright @ 2023 mettamuse.All rights reserved</h1>
            </div>
        </div>
    )
}

export default MobileFooter