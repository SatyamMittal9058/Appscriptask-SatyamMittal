import React, { useState } from 'react'
import Recommend from './Recommend'
import search from "../Assets/HeaderLogo/search-normal.png";
import profile from "../Assets/HeaderLogo/profile.png";
import shopping from "../Assets/HeaderLogo/shopping-bag.png";
import heart from "../Assets/HeaderLogo/heart.png";
import logo from "../Assets/HeaderLogo/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import mobileheader from '../componentcss/mobileheader.module.css';
import leftside from '../Assets/mobileHeaderLogo/Left Side.png';
import time from '../Assets/mobileHeaderLogo/Time.png';
import Rightside from '../Assets/mobileHeaderLogo/Right Side.png';
const MobileHeader = () => {
    const [slider, setSlider] = useState(false);
    return (
        <div>
            <div className={mobileheader.topContainer}>
                <img alt="leftSide" src={leftside}></img>
                <img alt="time" src={time}></img>
                <img alt="right" src={Rightside}></img>
            </div>
            <div className={mobileheader.container}>
                <div className={mobileheader.containerDiv}>
                    <div className={mobileheader.sliderContainer} onClick={() => setSlider(!slider)}>
                        <FontAwesomeIcon icon={faBars} className={mobileheader.sliderImage} />
                        {slider && <div className={mobileheader.sliderOption}>
                            <p className={mobileheader.h1hover}>SHOP</p>
                            <p className={mobileheader.h1hover}>SKILLS</p>
                            <p className={mobileheader.h1hover}>STORIES</p>
                            <p className={mobileheader.h1hover}>ABOUT</p>
                            <p className={mobileheader.h1hover}>CONTACT US</p>
                        </div>}
                        <img className={mobileheader.logoImage} alt="logo" src={logo}></img>
                    </div>
                    <div className={mobileheader.logo}>LOGO</div>
                    <div className={mobileheader.function}>
                        <span >
                            <img alt="search" src={search}></img>
                            <img alt="heart" src={heart}></img>
                            <img alt="shopping" src={shopping}></img>
                        </span>
                    </div>
                </div>
            </div>
            <div className={mobileheader.contentContainer}>
                <h5 className={mobileheader.contentHeading}>DISCOVER OUR PRODUCTS</h5>
                <p className={mobileheader.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla alias sint ut deleniti reprehenderit ullam porro repellat necessitatibus voluptas illum dolores magni optio, perferendis assumenda tempore tenetur aliquam sapiente earum!</p>
            </div>
            <Recommend />
        </div >
    )
}

export default MobileHeader