import React, { useEffect, useState } from 'react'
import Recommend from './Recommend'
import search from "../Assets/HeaderLogo/search-normal.png";
import profile from "../Assets/HeaderLogo/profile.png";
import shopping from "../Assets/HeaderLogo/shopping-bag.png";
import heart from "../Assets/HeaderLogo/heart.png";
import language from "../Assets/HeaderLogo/Language.png";
import logo from "../Assets/HeaderLogo/Logo.png";
import header from "../componentcss/header.module.css";
import MobileHeader from './MobileHeader';
const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handlewidth = () => {
        setWidth((prevWidth) => {

            if (prevWidth !== window.innerWidth) {
                return window.innerWidth;
            }
            return prevWidth;
        });
    }
    useEffect(() => {
        window.addEventListener('resize', handlewidth);
        return () => {
            window.removeEventListener('resize', handlewidth);
        }
    }, []);
    return width<768?<MobileHeader/>:(
        <div>
            <div className={header.container}>
                <div className={header.containerDiv}>
                    <div className={header.logoImage}><img alt="" src={logo}></img></div>
                    <div className={header.logo}>LOGO</div>
                    <div className={header.topleftFunctions}>
                        <span ><img alt="search" src={search}></img></span>
                        <span ><img alt="shopping" src={shopping}></img></span>
                        <span ><img alt="heart" src={heart}></img></span>
                        <span ><img alt="profile" src={profile}></img></span>
                        <span ><img alt="language" src={language}></img></span>
                    </div>
                </div>
                <div className={header.headerPages}>
                    <div ><h5>SHOP</h5></div>
                    <div><h5>SKILLS</h5></div>
                    <div><h5>STORIES</h5></div>
                    <div><h5>ABOUT</h5></div>
                    <div><h5>CONTACT US</h5></div>
                </div>
            </div>
            <div className={header.contentContainer}>
                <h5 className={header.contentHeading}>DISCOVER OUR PRODUCTS</h5>
                <p className={header.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla alias sint ut deleniti reprehenderit ullam porro repellat necessitatibus voluptas illum dolores magni optio, perferendis assumenda tempore tenetur aliquam sapiente earum!</p>
            </div>
            <Recommend />
        </div>
    )
}

export default Header