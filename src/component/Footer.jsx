import React, { useEffect, useState } from 'react'
import gpay from '../Assets/FooterLogo/Group 136188.png';
import mastercard from '../Assets/FooterLogo/Group 136190.png';
import paypal from '../Assets/FooterLogo/Group 136192.png';
import amex from '../Assets/FooterLogo/Group 136193.png';
import apay from '../Assets/FooterLogo/Group 136194.png';
import pay from '../Assets/FooterLogo/Group 136195.png';
import socialmedia from '../Assets/FooterLogo/Frame 28.png';
import footer from '../componentcss/footer.module.css';
import MobileFooter from './MobileFooter';
const Footer = () => {
    const [width,setWidth]=useState(window.innerWidth);
    const handlewidth=()=>{
        setWidth((prevWidth) => {
           
            if (prevWidth !== window.innerWidth) {
              return window.innerWidth;
            }
            return prevWidth;
          });
    }
    useEffect(()=>{
        window.addEventListener('resize',handlewidth);
        return ()=>{
            window.removeEventListener('resize',handlewidth);
        }
    },[]);
    return width<768?<MobileFooter/>:(
        <div className={footer.container}>
            <div className={footer.upperContainer}>
                <div>
                    <h3 className={footer.leftPartHeading}>BE THE FIRST TO KNOW</h3>
                    <h4>Sign up for update from metta muse</h4>
                    <span>
                        <input className={footer.emailInputBox} type="text" placeholder="Enter your Email" />
                        <button className={footer.subscribeButton}>Subcribe</button>
                    </span>
                </div>
                <div>
                    <div>
                        <h3 className={footer.contactHeading}>CONTACT US</h3>
                        <p className={footer.contactPoints}>+1154517784</p>
                        <p className={footer.contactPoints}>customercare@mettamuse.com</p>
                    </div>
                    <div>
                        <h3 className={footer.currencyHeading}>CURRENCY</h3>
                        <p className={footer.currencyPoints}>+USD</p>
                        <p className={footer.currencypoints}>Transactions will be completed in Euros and Currency reference is availble in hover</p>
                    </div>
                </div>
            </div>
            <div className={footer.lowerContainer}>
                <div className={footer.sectionWidth}>
                    <h3 className={footer.sectionHeadings}>metta musse</h3>
                    <p>About Us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact Us</p>
                    <p>EU Compliances Docs</p>
                </div>
                <div className={footer.sectionWidth}>
                    <p className={footer.sectionHeadings}>Quick Links</p>
                    <p>Order& Shipping</p>
                    <p>Join/Login as Seller</p>
                    <p>Payment & Pricing</p>
                    <p>Return & Refunds</p>
                    <p>FAQs</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
                <div >
                    <div className={footer.sectionWidth}>
                        <h3 className={footer.sectionHeadings}>FOLLOW US</h3>
                        <img alt="socialmedia" src={socialmedia}></img>
                    </div>
                    <p className={footer.points}>metta muse ACCEPTS</p>
                    <span className={footer.paymentOptions}>
                        <img alt="gpay" src={gpay}></img>
                        <img alt="mastercard" src={mastercard}></img>
                        <img alt="paypal" src={paypal}></img>
                        <img alt="amex" src={amex}></img>
                        <img alt="apay" src={apay}></img>
                        <img alt="pay" src={pay}></img>
                    </span>
                </div>
            </div>
        </div >
    )
}
export default Footer