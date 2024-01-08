import React, { useEffect, useState } from 'react'
import gpay from '../Assets/FooterLogo/Group 136188.png';
import mastercard from '../Assets/FooterLogo/Group 136190.png';
import paypal from '../Assets/FooterLogo/Group 136192.png';
import amex from '../Assets/FooterLogo/Group 136193.png';
import apay from '../Assets/FooterLogo/Group 136194.png';
import pay from '../Assets/FooterLogo/Group 136195.png';
import socialmedia from '../Assets/FooterLogo/Frame 28.png';
import footer from './footer.module.css';
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
        <div className={footer.footerbox}>
            <div className={footer.footerboxupper}>
                <div className={footer.leftsize}>
                    <h1 className={footer.footerboxleftheader}>BE THE FIRST TO KNOW</h1>
                    <h1>Sign up for update from metta muse</h1>
                    <span>
                        <input className={footer.footerboxinput} type="text" placeholder="Enter your Email" />
                        <button className={footer.footerboxbutton}>Subcribe</button>
                    </span>
                </div>
                <div className={footer.footerrightpart}>
                    <div className={footer.footerrightpartcontact}>
                        <h1 className={footer.footerright}>CONTACT US</h1>
                        <h2 className={footer.points}>+1154517784</h2>
                        <h2 className={footer.points}>customercare@mettamuse.com</h2>
                    </div>
                    <div className={footer.footerrightpartcurrency}>
                        <h1 className={footer.footerright}>CURRENCY</h1>
                        <h2 className={footer.points}>+USD</h2>
                        <h3 className={footer.points}>Transactions will be completed in Euros and Currency reference is availble in hover</h3>
                    </div>
                </div>
            </div>
            <div className={footer.footerlower}>
                <div className={footer.footerlowerwidth}>
                    <h1 className={footer.footerlowerheading}>metta musse</h1>
                    <h1 className={footer.points}>About Us</h1>
                    <h1 className={footer.points}>Stories</h1>
                    <h1 className={footer.points}>Artisans</h1>
                    <h1 className={footer.points}>Boutiques</h1>
                    <h1 className={footer.points}>Contact Us</h1>
                    <h1 className={footer.points}>EU Compliances Docs</h1>
                </div>
                <div className={footer.footerlowerwidth}>
                    <h1 className={footer.footerlowerheading}>Quick Links</h1>
                    <h1 className={footer.points}>Order& Shipping</h1>
                    <h1 className={footer.points}>Join/Login as Seller</h1>
                    <h1 className={footer.points}>Payment & Pricing</h1>
                    <h1 className={footer.points}>Return & Refunds</h1>
                    <h1 className={footer.points}>FAQs</h1>
                    <h1 className={footer.points}>Privacy Policy</h1>
                    <h1 className={footer.points}>Terms and Conditions</h1>
                </div>
                <div >
                    <div className={footer.footerlowerwidth}>
                        <h1 className={footer.footerlowerheading}>FOLLOW US</h1>
                        <img alt="" src={socialmedia}></img>
                    </div>
                    <h1 className={footer.points}>metta muse ACCEPTS</h1>
                    <span className={footer.footerpaymentoption}>
                        <img alt="" src={gpay}></img>
                        <img alt="" src={mastercard}></img>
                        <img alt="" src={paypal}></img>
                        <img alt="" src={amex}></img>
                        <img alt="" src={apay}></img>
                        <img alt="" src={pay}></img>
                    </span>
                </div>
            </div>
        </div >
    )
}
export default Footer