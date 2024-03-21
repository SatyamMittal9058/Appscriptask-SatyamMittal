import React from 'react'
import productcard from '../componentcss/productcard.module.css'
import heart from "../Assets/HeaderLogo/heart.png";
const ProductCard = ({ data }) => {
    return (
        // <div>
            <div className={productcard.cardContainer}>
                <div>
                    <img className={productcard.cardImage} alt="" src={data.image}></img>
                    <div className={productcard.cardTitle}>
                        <p>{data.title}</p>
                        <img alt="heart" src={heart}></img>
                    </div>
                </div>
            </div>

        // </div>
    )
}

export default ProductCard