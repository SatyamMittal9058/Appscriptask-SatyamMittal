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
import mobilefooter from '../componentcss/mobilefooter.module.css';
const MobileFooter = () => {
    
    const [showMetta, setShowMetta] = useState(false);
    const [showQuickLinks, setShowQuickLinks] = useState(false);
    const [showFollow, setShowFollow] = useState(false);
    return (
        <div className={mobilefooter.container}>
            <div className={mobilefooter.innerContainer}>
                <h3>BE THE FIRST TO KNOW</h3>
                <h4>Sign up for update from metta muse</h4>
                <span>
                    <input className={mobilefooter.emailInputBox} type="text" placeholder="Enter your Email" />
                    <button className={mobilefooter.subscribeButton}>Subcribe</button>
                </span>
            </div>
            <div>
                <div className={mobilefooter.contactContainer}>
                    <h3>CALL US</h3>
                    <div>
                        <p>+1154517784</p>
                        <p>customercare@mettamuse.com</p>
                    </div>
                </div>
                <div className={mobilefooter.currencyContainer}>
                    <h3>CURRENCY</h3>
                    <p>+USD</p>
                </div>
                <div className={mobilefooter.mettamusseContainer}>
                    <div>
                        <p>metta musse</p>
                        <p onClick={() => setShowMetta(!showMetta)}>
                            {showMetta ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                        </p>
                    </div>
                    {showMetta &&
                        <>
                            <p >About Us</p>
                            <p >Stories</p>
                            <p >Artisans</p>
                            <p >Boutiques</p>
                            <p >Contact Us</p>
                            <p >EU Compliances Docs</p>
                        </>
                    }
                </div>
                <div className={mobilefooter.quickLinkContainer}>
                    <div>
                        <p>QuickLinks</p>
                        <p onClick={() => setShowQuickLinks(!showQuickLinks)}>
                            {showQuickLinks ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                        </p>
                    </div>
                    {showQuickLinks &&
                        <>
                            <p>Terms and Conditions</p>
                            <p>Order& Shipping</p>
                            <p>Join/Login as Seller</p>
                            <p>Payment & Pricing</p>
                            <p>Return & Refunds</p>
                            <p>FAQs</p>
                            <p>Privacy Policy</p>
                        </>
                    }
                </div>
                <div className={mobilefooter.followContainer}>
                    <div>
                        <p>FollowUs</p>
                        <p onClick={() => setShowFollow(!showFollow)}>
                            {showFollow ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                        </p>
                    </div>
                    {showFollow &&
                        <>
                            <img alt="socialmedia" src={socialmedia}></img>
                        </>
                    }
                </div>
                    <h1 className={mobilefooter.paymentOption}>metta muse ACCEPTS</h1>
                    <span className={mobilefooter.payment}>
                        <img alt="gpay" src={gpay}></img>
                        <img alt="masterCard" src={mastercard}></img>
                        <img alt="paypal" src={paypal}></img>
                        <img alt="amex" src={amex}></img>
                        <img alt="apay" src={apay}></img>
                        <img alt="pay" src={pay}></img>
                    </span>
                    <p>Copyright @ 2023 mettamuse.All rights reserved</p>
            </div>
        </div>
    )
}

export default MobileFooter