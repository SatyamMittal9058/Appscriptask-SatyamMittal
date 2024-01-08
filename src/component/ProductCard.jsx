import React from 'react'
import productcard from './productcard.module.css'
const ProductCard = ({ data }) => {
    return (
        <div>
            <div className={productcard.productcardcontainer}>
                <div>
                    <img className={productcard.cardimage} alt="" src={data.image}></img>
                    <div className={productcard.cardtitle}><p>{data.title}</p></div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard