import React, { useState } from 'react'
import Recommend from './Recommend'
import search from "../Assets/HeaderLogo/search-normal.png";
import profile from "../Assets/HeaderLogo/profile.png";
import shopping from "../Assets/HeaderLogo/shopping-bag.png";
import heart from "../Assets/HeaderLogo/heart.png";
import language from "../Assets/HeaderLogo/Language.png";
import logo from "../Assets/HeaderLogo/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import mobileheader from './mobileheader.module.css';
const MobileHeader = () => {
    const [slider, setSlider] = useState(false);
    return (
        <div>
            <div className={mobileheader.headercontainer}>
                <div className={mobileheader.headercontainerdiv}>
                    <div className={mobileheader.headerlogodiv}onClick={() => setSlider(!slider)}>
                        <FontAwesomeIcon icon={faBars} className={mobileheader.slider} />
                        {slider && <div className= {mobileheader.slidercontent}>
                            <h1 className={mobileheader.h1hover}>SHOP</h1>
                            <h1 className={mobileheader.h1hover}>SKILLS</h1>
                            <h1 className={mobileheader.h1hover}>STORIES</h1>
                            <h1 className={mobileheader.h1hover}>ABOUT</h1>
                            <h1 className={mobileheader.h1hover}>CONTACT US</h1>
                        </div>}
                        <img className={mobileheader.logoimage} alt="" src={logo}></img>
                    </div>
                    <div className={mobileheader.logo}>LOGO</div>
                    <div className={mobileheader.headerfunction}>
                        <span ><img alt="" src={search}></img></span>
                        <span ><img alt="" src={shopping}></img></span>
                        <span ><img alt="" src={heart}></img></span>
                        <span ><img alt="" src={profile}></img></span>
                        <span ><img alt="" src={language}></img></span>
                    </div>
                </div>

            </div>
            <div className="text-center">
                <h1 className="mt-10 font-bold text-3xl">DISCOVER OUR PRODUCTS</h1>
                <p className="mx-auto w-[50%] font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla alias sint ut deleniti reprehenderit ullam porro repellat necessitatibus voluptas illum dolores magni optio, perferendis assumenda tempore tenetur aliquam sapiente earum!</p>
            </div>
            <Recommend />
        </div >
    )
}

export default MobileHeader