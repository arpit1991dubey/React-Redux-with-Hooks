import React from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
const ProductDetails =()=>{
    const {productId}=useParams();
    console.log(productId);
const fetchProduct = async () =>{
    const response=await axios
.get(`https://fakestoreapi.com/products/${productId}`)
.catch(err=>{
    console.log(err);
})
}
return(
    <div>
        <h2>
            Product ProductDetails
        </h2>
    </div>
)
}

export default ProductDetails;
