import React from 'react'
import axios from 'axios';
import {useEffect,useState} from "react";
import ProductCard from './ProductCard';
import body from './body.module.css';
const Body = () => {
  const [productData,setProductData]=useState(null);
  const fetchProductData=async()=>{
    const response=await axios.get("https://fakestoreapi.com/products");
    setProductData(response.data);
  }
  useEffect(()=>{
    fetchProductData();
  },[])
  return productData===null?<h1>Data Processing....</h1>:(
    <div className={body.productsbody}>
      <div className={body.productsbodycard}>
      {
        productData.map((product)=>(<ProductCard data={product}/>))
      }
      </div>
    </div>
  )
}

export default Body