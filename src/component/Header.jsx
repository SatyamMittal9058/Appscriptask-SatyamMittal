import React, { useEffect, useState } from 'react'
import Recommend from './Recommend'
import search from "../Assets/HeaderLogo/search-normal.png";
import profile from "../Assets/HeaderLogo/profile.png";
import shopping from "../Assets/HeaderLogo/shopping-bag.png";
import heart from "../Assets/HeaderLogo/heart.png";
import language from "../Assets/HeaderLogo/Language.png";
import logo from "../Assets/HeaderLogo/Logo.png";
import header from "./header.module.css";
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
            <div className={header.headercontainer}>
                <div className={header.headercontainerdiv}>
                    <div className={header.headerimage}><img alt="" src={logo}></img></div>
                    <div className={header.headerlogo}>LOGO</div>
                    <div className={header.headerfunction}>
                        <span ><img alt="" src={search}></img></span>
                        <span ><img alt="" src={shopping}></img></span>
                        <span ><img alt="" src={heart}></img></span>
                        <span ><img alt="" src={profile}></img></span>
                        <span ><img alt="" src={language}></img></span>
                    </div>
                </div>
                <div className={header.headerpages}>
                    <div ><h1>SHOP</h1></div>
                    <div><h1>SKILLS</h1></div>
                    <div><h1>STORIES</h1></div>
                    <div><h1>ABOUT</h1></div>
                    <div><h1>CONTACT US</h1></div>
                </div>
            </div>
            <div className={header.headerdescription}>
                <h1 className={header.headerparagraph}>DISCOVER OUR PRODUCTS</h1>
                <p className={header.headercontent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla alias sint ut deleniti reprehenderit ullam porro repellat necessitatibus voluptas illum dolores magni optio, perferendis assumenda tempore tenetur aliquam sapiente earum!</p>
            </div>
            <Recommend />
        </div>
    )
}

export default Header